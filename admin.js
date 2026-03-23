/* ================================================================
   TONG DUN — admin.js
   Admin Panel Logic: Login, Dashboard, Add/Edit/Delete Products
   ================================================================ */

// ── ADMIN PASSWORD ──────────────────────────────────────────────
// Change this password to whatever you want
const ADMIN_PASSWORD = "tongdun2025";

// ── STORAGE KEY ─────────────────────────────────────────────────
const STORAGE_KEY = "tongdun_products";

// ── STATE ───────────────────────────────────────────────────────
let adminProducts = [];       // working copy of all products
let editingId     = null;     // null = adding new, number = editing existing
let deleteTargetId = null;    // product id pending delete confirmation
let currentImageValue = "";   // current image path or uploaded data URL

// ── DOM REFS ────────────────────────────────────────────────────
const $ = (id) => document.getElementById(id);

const loginScreen   = $("loginScreen");
const adminApp      = $("adminApp");
const passwordInput = $("passwordInput");
const loginBtn      = $("loginBtn");
const loginError    = $("loginError");
const logoutBtn     = $("logoutBtn");

const navItems      = document.querySelectorAll(".nav-item");
const topbarTitle   = $("topbarTitle");

// Dashboard
const statTotal     = $("stat-total");
const statSingle    = $("stat-single");
const statTwin      = $("stat-twin");
const statHandle    = $("stat-handle");
const statTiles     = $("stat-tiles");
const totalBadge    = $("totalBadge");
const resetDefaultBtn = $("resetDefaultBtn");

// Products table
const adminSearch   = $("adminSearch");
const adminCatFilter= $("adminCatFilter");
const productTableBody = $("productTableBody");
const emptyTable    = $("emptyTable");
const adminProductCount = $("adminProductCount");

// Form
const formTitle     = $("formTitle");
const formSubtitle  = $("formSubtitle");
const editProductId = $("editProductId");
const fName         = $("f-name");
const fCategory     = $("f-category");
const fUnit         = $("f-unit");
const fPrice        = $("f-price");
const fImageFile    = $("f-imageFile");
const chooseImageBtn= $("chooseImageBtn");
const removeImageBtn= $("removeImageBtn");
const imageFileName = $("imageFileName");
const fShortInfo    = $("f-shortInfo");
const fDescription  = $("f-description");
const imagePreview  = $("imagePreview");
const imagePlaceholder = $("imagePlaceholder");
const shortInfoCount= $("shortInfoCount");
const saveProductBtn= $("saveProductBtn");
const cancelFormBtn = $("cancelFormBtn");
const formError     = $("formError");
const formSuccess   = $("formSuccess");

// Delete modal
const delOverlay    = $("delOverlay");
const delProductName= $("delProductName");
const confirmDeleteBtn = $("confirmDeleteBtn");
const cancelDeleteBtn  = $("cancelDeleteBtn");

// ════════════════════════════════════════════════════════════════
//  LOGIN
// ════════════════════════════════════════════════════════════════
function checkLogin() {
  if (sessionStorage.getItem("tongdun_admin") === "yes") {
    showApp();
  }
}

function login() {
  const val = passwordInput.value.trim();
  if (val === ADMIN_PASSWORD) {
    sessionStorage.setItem("tongdun_admin", "yes");
    loginError.textContent = "";
    showApp();
  } else {
    loginError.textContent = "❌ Incorrect password. Please try again.";
    passwordInput.value = "";
    passwordInput.focus();
  }
}

function logout() {
  sessionStorage.removeItem("tongdun_admin");
  adminApp.hidden = true;
  loginScreen.style.display = "flex";
  passwordInput.value = "";
}

function showApp() {
  loginScreen.style.display = "none";
  adminApp.hidden = false;
  loadProducts();
  renderDashboard();
  showView("dashboard");
}

loginBtn.addEventListener("click", login);
passwordInput.addEventListener("keydown", (e) => { if (e.key === "Enter") login(); });
logoutBtn.addEventListener("click", logout);

// ════════════════════════════════════════════════════════════════
//  PRODUCT DATA
// ════════════════════════════════════════════════════════════════
function loadProducts() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        adminProducts = parsed;
        return;
      }
    }
  } catch (_) {}
  // First time — copy from the hardcoded PRODUCTS array
  adminProducts = JSON.parse(JSON.stringify(PRODUCTS));
  saveProducts();
}

function saveProducts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(adminProducts));
}

function resetToDefault() {
  if (!confirm(`Reset to the original 36 products?\nAll your changes will be lost.`)) return;
  adminProducts = JSON.parse(JSON.stringify(PRODUCTS));
  saveProducts();
  renderDashboard();
  renderProductsTable();
  showToastAdmin("✅ Reset to default 36 products.");
}

function getNextId() {
  if (adminProducts.length === 0) return 1;
  return Math.max(...adminProducts.map(p => p.id)) + 1;
}

resetDefaultBtn.addEventListener("click", resetToDefault);

// ════════════════════════════════════════════════════════════════
//  NAVIGATION / VIEWS
// ════════════════════════════════════════════════════════════════
const TITLES = {
  dashboard: "Dashboard",
  products:  "All Products",
  add:       "Add Product",
};

function showView(viewName) {
  // Hide all views
  document.querySelectorAll(".view").forEach(v => v.hidden = true);
  // Show target
  const el = $(`view-${viewName}`);
  if (el) el.hidden = false;
  // Update nav
  navItems.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === viewName);
  });
  topbarTitle.textContent = TITLES[viewName] || viewName;

  if (viewName === "products") renderProductsTable();
  if (viewName === "add" && editingId === null) resetForm();
}

navItems.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.dataset.view === "add") editingId = null;
    showView(btn.dataset.view);
  });
});

// ════════════════════════════════════════════════════════════════
//  DASHBOARD
// ════════════════════════════════════════════════════════════════
function renderDashboard() {
  const total  = adminProducts.length;
  const single = adminProducts.filter(p => p.category === "Single Door").length;
  const twin   = adminProducts.filter(p => p.category === "Twin Door").length;
  const handle = adminProducts.filter(p => p.category === "Door Handle").length;
  const tiles  = adminProducts.filter(p => p.category === "Tiles").length;

  statTotal.textContent  = total;
  statSingle.textContent = single;
  statTwin.textContent   = twin;
  statHandle.textContent = handle;
  statTiles.textContent  = tiles;
  totalBadge.textContent = total;
}

// ════════════════════════════════════════════════════════════════
//  PRODUCTS TABLE
// ════════════════════════════════════════════════════════════════
function catBadgeClass(cat) {
  const map = {
    "Single Door": "cat-single",
    "Twin Door":   "cat-twin",
    "Door Handle": "cat-handle",
    "Tiles":       "cat-tiles",
  };
  return map[cat] || "cat-single";
}

function renderProductsTable() {
  const q   = (adminSearch.value || "").toLowerCase();
  const cat = adminCatFilter.value;

  let filtered = adminProducts.filter(p => {
    const matchCat  = cat === "all" || p.category === cat;
    const matchText = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    return matchCat && matchText;
  });

  adminProductCount.textContent = `${filtered.length} product${filtered.length !== 1 ? "s" : ""}`;

  if (filtered.length === 0) {
    productTableBody.innerHTML = "";
    emptyTable.hidden = false;
    return;
  }
  emptyTable.hidden = true;

  productTableBody.innerHTML = filtered.map(p => `
    <tr>
      <td>
        ${p.image
          ? `<img class="table-thumb" src="${escA(p.image)}" alt="${escA(p.name)}" onerror="this.style.display='none';this.nextSibling.style.display='flex'" /><div class="table-thumb-placeholder" style="display:none">📦</div>`
          : `<div class="table-thumb-placeholder">📦</div>`
        }
      </td>
      <td>
        <div class="table-product-name">${escH(p.name)}</div>
        <div class="table-product-info">${escH(p.shortInfo)}</div>
      </td>
      <td><span class="cat-badge ${catBadgeClass(p.category)}">${escH(p.category)}</span></td>
      <td>
        ${p.price === 0
          ? `<span class="price-enquire">Contact</span>`
          : `<span class="price-cell">$${Number(p.price).toFixed(2)}</span>`
        }
      </td>
      <td>
        <div class="action-btns">
          <button class="btn-edit" onclick="startEdit(${p.id})">✏️ Edit</button>
          <button class="btn-del"  onclick="startDelete(${p.id})">🗑️ Del</button>
        </div>
      </td>
    </tr>
  `).join("");
}

adminSearch.addEventListener("input", renderProductsTable);
adminCatFilter.addEventListener("change", renderProductsTable);

// ════════════════════════════════════════════════════════════════
//  ADD / EDIT FORM
// ════════════════════════════════════════════════════════════════
function resetForm() {
  editingId = null;
  editProductId.value = "";
  formTitle.textContent    = "Add New Product";
  formSubtitle.textContent = "Fill in all fields below and click Save.";
  fName.value        = "";
  fCategory.value    = "";
  fUnit.value        = "per door";
  fPrice.value       = "0";
  fShortInfo.value   = "";
  fDescription.value = "";
  shortInfoCount.textContent = "0";
  clearImageSelection();
  formError.textContent   = "";
  formSuccess.textContent = "";
}

function startEdit(id) {
  const p = adminProducts.find(x => x.id === id);
  if (!p) return;

  editingId = id;
  editProductId.value = id;
  formTitle.textContent    = "Edit Product";
  formSubtitle.textContent = `Editing: ${p.name}`;

  fName.value        = p.name;
  fCategory.value    = p.category;
  fUnit.value        = p.unit;
  fPrice.value       = p.price;
  fShortInfo.value   = p.shortInfo;
  fDescription.value = p.description || "";
  shortInfoCount.textContent = p.shortInfo.length;

  setImageValue(p.image, isDataUrl(p.image) ? "Saved uploaded image" : "Current product photo");

  formError.textContent   = "";
  formSuccess.textContent = "";

  showView("add");
  topbarTitle.textContent = "Edit Product";
}

function saveProduct() {
  formError.textContent   = "";
  formSuccess.textContent = "";

  // Validate
  const name      = fName.value.trim();
  const category  = fCategory.value;
  const unit      = fUnit.value;
  const price     = parseFloat(fPrice.value) || 0;
  const image     = currentImageValue;
  const shortInfo = fShortInfo.value.trim();
  const description = fDescription.value.trim();

  if (!name)      { formError.textContent = "❌ Product name is required."; return; }
  if (!category)  { formError.textContent = "❌ Please select a category."; return; }
  if (!image)     { formError.textContent = "❌ Please choose a product photo."; return; }
  if (!shortInfo) { formError.textContent = "❌ Short info is required."; return; }

  if (editingId !== null) {
    // UPDATE existing
    const idx = adminProducts.findIndex(p => p.id === editingId);
    if (idx !== -1) {
      adminProducts[idx] = { ...adminProducts[idx], name, category, unit, price, image, shortInfo, description };
      saveProducts();
      renderDashboard();
      formSuccess.textContent = "✅ Product updated successfully!";
      setTimeout(() => {
        showView("products");
        editingId = null;
      }, 900);
    }
  } else {
    // ADD new
    const newProduct = {
      id: getNextId(),
      name, category, unit, price, image, shortInfo, description
    };
    adminProducts.push(newProduct);
    saveProducts();
    renderDashboard();
    formSuccess.textContent = "✅ Product added successfully!";
    setTimeout(() => {
      resetForm();
    }, 900);
  }
}

cancelFormBtn.addEventListener("click", () => {
  editingId = null;
  showView("products");
});

saveProductBtn.addEventListener("click", saveProduct);

// Image upload / preview
chooseImageBtn.addEventListener("click", () => fImageFile.click());
removeImageBtn.addEventListener("click", () => clearImageSelection());

fImageFile.addEventListener("change", async () => {
  const file = fImageFile.files && fImageFile.files[0];
  if (!file) return;

  formError.textContent = "";
  formSuccess.textContent = "";
  imageFileName.textContent = file.name;

  try {
    const dataUrl = await optimizeImage(file);
    setImageValue(dataUrl, file.name);
  } catch (err) {
    console.error(err);
    clearImageSelection(false);
    formError.textContent = "❌ Could not read that image. Please choose another file.";
  }
});

// Short info char count
fShortInfo.addEventListener("input", () => {
  shortInfoCount.textContent = fShortInfo.value.length;
});

function setImageValue(src, label = "Photo selected") {
  currentImageValue = src || "";
  imagePreview.onerror = () => {
    imagePreview.style.display = "none";
    imagePlaceholder.style.display = "flex";
    imagePlaceholder.textContent = "Cannot load";
  };

  if (currentImageValue) {
    imagePreview.src = currentImageValue;
    imagePreview.style.display = "block";
    imagePlaceholder.style.display = "none";
    imageFileName.textContent = label;
  } else {
    imagePreview.removeAttribute("src");
    imagePreview.style.display = "none";
    imagePlaceholder.style.display = "flex";
    imagePlaceholder.textContent = "No photo selected";
    imageFileName.textContent = "No file selected";
  }
}

function clearImageSelection(resetInput = true) {
  currentImageValue = "";
  if (resetInput) fImageFile.value = "";
  setImageValue("", "No file selected");
}

function isDataUrl(value) {
  return typeof value === "string" && value.startsWith("data:image/");
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function optimizeImage(file) {
  if (file.type === "image/svg+xml") {
    return readFileAsDataUrl(file);
  }

  const original = await readFileAsDataUrl(file);
  const img = await loadImage(original);

  const maxWidth = 1400;
  const maxHeight = 1400;
  let { width, height } = img;
  const ratio = Math.min(maxWidth / width, maxHeight / height, 1);
  width = Math.round(width * ratio);
  height = Math.round(height * ratio);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, width, height);

  return canvas.toDataURL("image/jpeg", 0.85);
}

// ════════════════════════════════════════════════════════════════
//  DELETE
// ════════════════════════════════════════════════════════════════
function startDelete(id) {
  const p = adminProducts.find(x => x.id === id);
  if (!p) return;
  deleteTargetId = id;
  delProductName.textContent = p.name;
  delOverlay.hidden = false;
}

function confirmDelete() {
  if (deleteTargetId === null) return;
  adminProducts = adminProducts.filter(p => p.id !== deleteTargetId);
  saveProducts();
  renderDashboard();
  renderProductsTable();
  deleteTargetId = null;
  delOverlay.hidden = true;
  showToastAdmin("🗑️ Product deleted.");
}

function cancelDelete() {
  deleteTargetId = null;
  delOverlay.hidden = true;
}

confirmDeleteBtn.addEventListener("click", confirmDelete);
cancelDeleteBtn.addEventListener("click",  cancelDelete);
delOverlay.addEventListener("click", (e) => {
  if (e.target === delOverlay) cancelDelete();
});

// ════════════════════════════════════════════════════════════════
//  TOAST (admin version)
// ════════════════════════════════════════════════════════════════
function showToastAdmin(msg) {
  const t = document.createElement("div");
  t.style.cssText = `
    position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%);
    background:#141a14;color:#fff;padding:.6rem 1.4rem;border-radius:999px;
    font-size:.82rem;font-weight:600;box-shadow:0 4px 20px rgba(0,0,0,.25);
    z-index:9999;border-left:3px solid #c8a84b;white-space:nowrap;
    animation:fadeIn .3s ease;
  `;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2000);
}

// ════════════════════════════════════════════════════════════════
//  UTILITY
// ════════════════════════════════════════════════════════════════
function escH(str) {
  const d = document.createElement("div");
  d.appendChild(document.createTextNode(String(str || "")));
  return d.innerHTML;
}
function escA(str) {
  return String(str || "").replace(/"/g, "&quot;");
}

// Keyboard shortcut — Escape closes delete modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cancelDelete();
});

// ════════════════════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════════════════════
checkLogin();
