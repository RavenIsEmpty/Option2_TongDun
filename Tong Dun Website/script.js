/* ================================================================
   TONG DUN — script.js
   All 36 real products with actual photo paths and product codes.
   ================================================================ */

/* ================================================================
   01. PRODUCT DATA  ← Edit names, prices, descriptions here
   ================================================================ */
const PRODUCTS = [

  /* ── SINGLE DOORS (7 products) ─────────────────────────────
     Photos: assets/single-door/photo_1.jpg … photo_7.jpg
     All aluminium bathroom/interior doors, Size: 1970×680 or 1970×780
  ──────────────────────────────────────────────────────────── */
  {
    id: 1,
    name: "Aluminium Single Door — TH 7025-01",
    category: "Single Door",
    price: 0,
    unit: "per door",
    image: "assets/single-door/photo_1.jpg",
    shortInfo: "Champagne aluminium frame, frosted glass panels. Size: 1970×680 / 1970×780 mm.",
    description: "Frosted glass bathroom door with champagne-finish aluminium frame and smart digital lock. Two-panel frosted glass design with diamond decorative bar. Available in two widths: 680 mm and 780 mm. Height: 1970 mm. Suitable for bathrooms, bedrooms, and interior partitions. Model: TH 7025-01.",
  },
  {
    id: 2,
    name: "Aluminium Single Door — OH-05",
    category: "Single Door",
    price: 0,
    unit: "per door",
    image: "assets/single-door/photo_2.jpg",
    shortInfo: "Silver aluminium, frosted glass with floral engraving. Size: 1970×680 / 1970×780 mm.",
    description: "Premium brushed-silver aluminium single door featuring frosted glass with an elegant floral scroll engraving across the mid-section. Slim lever handle included. Available in widths 680 mm and 780 mm. Height: 1970 mm. Ideal for bathrooms and private rooms. Model: OH-05.",
  },
  {
    id: 3,
    name: "Aluminium Single Door — OH-01",
    category: "Single Door",
    price: 0,
    unit: "per door",
    image: "assets/single-door/photo_3.jpg",
    shortInfo: "White aluminium, full frosted glass with floral stripe. Size: 1970×680 / 1970×780 mm.",
    description: "Clean white aluminium frame with a large frosted glass panel and a subtle floral stripe decoration. Lever handle on the right side. A bright, modern design that suits contemporary bathrooms and ensuites. Available in widths 680 mm and 780 mm. Height: 1970 mm. Model: OH-01.",
  },
  {
    id: 4,
    name: "Aluminium Single Door — 6818-01",
    category: "Single Door",
    price: 0,
    unit: "per door",
    image: "assets/single-door/photo_4.jpg",
    shortInfo: "White aluminium, grid glass (8-pane). Size: 1970×680 / 1970×780 mm.",
    description: "Contemporary white aluminium frame featuring an 8-pane grid glass panel for a classic, airy look. Matte black lever handle for contrast. Suitable for both bathrooms and interior dividers. Height: 1970 mm, available in 680 mm and 780 mm widths. Model: 6818-01.",
  },
  {
    id: 5,
    name: "Aluminium Single Door — 7025-02",
    category: "Single Door",
    price: 0,
    unit: "per door",
    image: "assets/single-door/photo_5.jpg",
    shortInfo: "Matte black aluminium, grid glass (8-pane). Size: 1970×680 / 1970×780 mm.",
    description: "Bold matte-black aluminium frame with an 8-pane grid glass panel — the same classic grid silhouette as 6818-01 but in a striking black finish. Matte black lever handle. Height: 1970 mm, widths 680 mm and 780 mm. Model: 7025-02.",
  },
  {
    id: 6,
    name: "Aluminium Single Door — 80PM-03",
    category: "Single Door",
    price: 0,
    unit: "per door",
    image: "assets/single-door/photo_6.jpg",
    shortInfo: "Dark grey aluminium, frosted glass, geometric lines. Size: 1970×680 / 1970×780 mm.",
    description: "Dark anthracite aluminium frame with frosted glass panels divided by clean geometric aluminium bars. Sophisticated and modern. Lever handle on the right. Height: 1970 mm, available in widths 680 mm and 780 mm. Model: 80PM-03.",
  },
  {
    id: 7,
    name: "Aluminium Single Door — 7025-04",
    category: "Single Door",
    price: 0,
    unit: "per door",
    image: "assets/single-door/photo_7.jpg",
    shortInfo: "Rose-gold aluminium, frosted glass, V-groove design. Size: 1970×680 / 1970×780 mm.",
    description: "Warm rose-gold aluminium frame with frosted glass panels featuring an elegant V-groove and gold accent line. A premium, luxurious option for master bathrooms. Includes digital smart lock. Height: 1970 mm, widths 680 mm and 780 mm. Model: 7025-04.",
  },

  /* ── TWIN DOORS (10 products) ──────────────────────────────
     Photos: assets/twin-door/photo_1.jpg … photo_10.jpg
     Grand steel entry double doors
  ──────────────────────────────────────────────────────────── */
  {
    id: 8,
    name: "Steel Twin Entry Door — 1066",
    category: "Twin Door",
    price: 0,
    unit: "per set",
    image: "assets/twin-door/photo_1.jpg",
    shortInfo: "Hand-carved mahogany-red steel, floral medallion panels. Size: 1600/1800×2200×220 mm.",
    description: "Grand hand-carved entry door set in deep mahogany-red finish. Features ornate floral medallion panels and classic column pilasters. Solid brass lever handles and multi-point locking system included. Available in widths 1600 mm and 1800 mm. Height: 2200 mm, wall thickness: 220 mm. Model: 1066.",
  },
  {
    id: 9,
    name: "Steel Twin Entry Door — 9078",
    category: "Twin Door",
    price: 0,
    unit: "per set",
    image: "assets/twin-door/photo_2.jpg",
    shortInfo: "Dark bronze steel, basket-weave texture with floral crest. Size: 1600×2380×220 mm.",
    description: "Impressive twin entry door in dark-bronze steel with an intricate basket-weave surface texture and ornate floral crest cornice. Shell crest header panel. Brass-finish lever and security locks. Width: 1600 mm, height: 2380 mm, wall thickness: 220 mm. Model: 9078.",
  },
  {
    id: 10,
    name: "Steel Twin Entry Door — 9028",
    category: "Twin Door",
    price: 0,
    unit: "per set",
    image: "assets/twin-door/photo_3.jpg",
    shortInfo: "Charcoal steel, ribbed vertical panels with shell crest. Size: 1800×2390×200 mm.",
    description: "Contemporary charcoal-finish twin door with clean vertical ribbed panels and a decorative shell crest header. Antique-copper lever handles. Opens inward or outward. Width: 1800 mm, height: 2390 mm, wall thickness: 200 mm. Model: 9028.",
  },
  {
    id: 11,
    name: "Steel Twin Entry Door — 988",
    category: "Twin Door",
    price: 0,
    unit: "per set",
    image: "assets/twin-door/photo_4.jpg",
    shortInfo: "Black steel, basket-weave with swan crest & lattice fanlight. Size: 1800×2380×220 mm.",
    description: "Dramatic black steel twin door featuring a fine basket-weave body texture with twin-swan crest ornamentation, topped by a diamond lattice fanlight panel. Brass security bar. Width: 1800 mm, height: 2380 mm, wall thickness: 220 mm. Model: 988.",
  },
  {
    id: 12,
    name: "Steel Twin Entry Door — 9023",
    category: "Twin Door",
    price: 0,
    unit: "per set",
    image: "assets/twin-door/photo_5.jpg",
    shortInfo: "Dark bronze steel, basket-weave with floral panels. Size: 1600/1800×2380×200 mm.",
    description: "Dark-bronze twin door with a rich basket-weave texture and prominent raised floral panel medallions. Ornate shell crest header. Brass security bar with lever handles. Available in widths 1600 mm and 1800 mm. Height: 2380 mm, wall thickness: 200 mm. Model: 9023.",
  },
  {
    id: 13,
    name: "Steel Twin Entry Door — 908 (A)",
    category: "Twin Door",
    price: 0,
    unit: "per set",
    image: "assets/twin-door/photo_6.jpg",
    shortInfo: "Black bronze, heavy ornate embossed panels with glass fanlight. Size: 1800×2390×220 mm.",
    description: "Stately twin entry door in black-bronze finish with heavily embossed ornamental panels featuring sunburst medallions and foliate motifs. Glass fanlight with diamond lattice. Width: 1800 mm, height: 2390 mm, wall thickness: 220 mm. Model: 908.",
  },
  {
    id: 14,
    name: "Steel Twin Entry Door — 908 (B)",
    category: "Twin Door",
    price: 0,
    unit: "per set",
    image: "assets/twin-door/photo_7.jpg",
    shortInfo: "Dark steel, 3-panel medallion design, no fanlight. Size: 1800×2200×200 mm.",
    description: "Dark steel twin door with a clean 3-row panel layout: decorative top panel, central sunburst medallion and lower panel accent. No overhead fanlight — suits lower ceiling heights. Width: 1800 mm, height: 2200 mm, wall thickness: 200 mm. Model: 908-B.",
  },
  {
    id: 15,
    name: "Steel Twin Entry Door — 926",
    category: "Twin Door",
    price: 0,
    unit: "per set",
    image: "assets/twin-door/photo_8.jpg",
    shortInfo: "Copper-tone steel, ribbed with lion-medallion emboss. Size: 1800×2200×200 mm.",
    description: "Striking copper-rose twin door with horizontal ribbed panels and a circular lion-crest medallion embossed at center. Tall antique-brass bar handles complete the look. Width: 1800 mm, height: 2200 mm, wall thickness: 200 mm. Model: 926.",
  },
  {
    id: 16,
    name: "Steel Twin Entry Door — 922",
    category: "Twin Door",
    price: 0,
    unit: "per set",
    image: "assets/twin-door/photo_9.jpg",
    shortInfo: "Copper-rose steel, abstract wave relief texture. Size: 1800×2200×200 mm.",
    description: "Unique twin door featuring a bold abstract wave-relief texture across the full door face in a warm copper-rose finish. Simple brass bar handles keep the focus on the dramatic surface. Width: 1800 mm, height: 2200 mm, wall thickness: 200 mm. Model: 922.",
  },
  {
    id: 17,
    name: "Steel Twin Entry Door — 921",
    category: "Twin Door",
    price: 0,
    unit: "per set",
    image: "assets/twin-door/photo_10.jpg",
    shortInfo: "Slate-grey steel, vertical ribbed with copper accent strips. Size: 1800×2200×200 mm.",
    description: "Modern slate-grey twin door with clean vertical ribbed panels accented by warm copper inlay strips at top and bottom. Copper-tone bar handles. A refined contemporary entry statement. Width: 1800 mm, height: 2200 mm, wall thickness: 200 mm. Model: 921.",
  },

  /* ── DOOR HANDLES / SMART LOCKS (10 products) ──────────────
     Photos: assets/door-handle/photo_1.jpg … photo_10.jpg
     Smart fingerprint locks and traditional handle sets
  ──────────────────────────────────────────────────────────── */
  {
    id: 18,
    name: "Smart Lock — Fingerprint & Camera (Type A)",
    category: "Door Handle",
    price: 0,
    unit: "per unit",
    image: "assets/door-handle/photo_1.jpg",
    shortInfo: "Fingerprint + face camera + PIN + card. Tong Dun smart lock with screen display.",
    description: "Tong Dun intelligent door lock featuring a built-in wide-angle camera, fingerprint scanner, PIN keypad, NFC card reader, and colour screen display. Multiple unlock methods: face, fingerprint, code, card, key, remote, and APP. Matte dark-grey finish. Door thickness: 40–120 mm.",
  },
  {
    id: 19,
    name: "Smart Lock — Face Recognition & Keypad (Type B)",
    category: "Door Handle",
    price: 0,
    unit: "per unit",
    image: "assets/door-handle/photo_2.jpg",
    shortInfo: "3D face recognition + fingerprint + PIN + NFC. Tong Dun smart lock.",
    description: "Advanced Tong Dun smart lock with 3D face recognition camera, fingerprint reader, illuminated keypad, and NFC card access. Built-in screen and dual-camera system. Supports cloud and card storage for access logs. TTLink & Tuya APP compatible. Door thickness: 40–120 mm.",
  },
  {
    id: 20,
    name: "Tong Dun Smart Lock Display — Showroom Unit",
    category: "Door Handle",
    price: 0,
    unit: "per unit",
    image: "assets/door-handle/photo_3.jpg",
    shortInfo: "Copper Dun 铜盾 intelligent lock. Fingerprint, card, code, APP, wireless remote.",
    description: "Tong Dun (铜盾) flagship smart lock display unit. Features fingerprint recognition, card swipe, PIN code, wireless remote, APP unlock, low-battery alert, activity logging, super-grade core, and anti-theft code protection. OLED digital display. Suitable for residential and commercial doors.",
  },
  {
    id: 21,
    name: "Smart Lock — Slim Keypad & Fingerprint",
    category: "Door Handle",
    price: 0,
    unit: "per unit",
    image: "assets/door-handle/photo_4.jpg",
    shortInfo: "Fingerprint + PIN + card + key. 240 mm body. Cold-rolled steel. Fits door 40–120 mm.",
    description: "Compact slim-profile smart lock with semiconductor fingerprint scanner, PIN keypad, NFC card, and mechanical key backup. Body dimensions: 240×60 mm. Material: cold-rolled steel. Fingerprint capacity: 50 prints. Battery: 4×AA. TYPE-C emergency charging. Unlock: fingerprint / PIN / card / key / WeChat mini-app / APP optional. Fits wood and room doors.",
  },
  {
    id: 22,
    name: "Smart Lock — M13 CNC 3D Face Recognition",
    category: "Door Handle",
    price: 0,
    unit: "per unit",
    image: "assets/door-handle/photo_5.jpg",
    shortInfo: "3D face + fingerprint + PIN + card + key + remote. Video call intercom. Model M13.",
    description: "M13 CNC precision-crafted intelligent lock. Unlock via 3D face recognition (adaptive lighting), fingerprint, PIN code, NFC card, physical key, or remote. Built-in two-way video intercom — visitors can call your phone and you can see and speak to them even when away. Wide-angle peephole camera. Dual cloud and card storage. Tuya / TTLink compatible. Custom options: dual camera, palm vein, NFC.",
  },
  {
    id: 23,
    name: "Smart Lock — 3D Face Recognition with Video Screen",
    category: "Door Handle",
    price: 0,
    unit: "per unit",
    image: "assets/door-handle/photo_6.jpg",
    shortInfo: "3D face ID + fingerprint + PIN + card. Large colour screen display. APP unlock.",
    description: "Premium smart lock with a large colour display screen showing live camera feed. 3D face recognition, fingerprint, code, card, APP, and remote unlock. Door status indicator, bell alert, and anti-peeping code mode. Matte gunmetal finish with side-grip design. Smart home integration capable.",
  },
  {
    id: 24,
    name: "Mortice Handle Lock — Matte Black",
    category: "Door Handle",
    price: 0,
    unit: "per set",
    image: "assets/door-handle/photo_7.jpg",
    shortInfo: "Matte black square backplate lever handle with mortice lock body and 3 keys.",
    description: "Traditional mortice lever handle set with a flat square backplate in matte black powder-coat finish. Includes full mortice lock body with 3 mechanical keys. Suitable for timber interior and exterior doors. Anti-corrosion coating. Supplied as a complete set ready to install.",
  },
  {
    id: 25,
    name: "Mortice Handle Lock — Stainless Silver",
    category: "Door Handle",
    price: 0,
    unit: "per set",
    image: "assets/door-handle/photo_8.jpg",
    shortInfo: "Stainless silver lever handle with full mortice lock body. Heavy-duty.",
    description: "Robust stainless-silver lever handle on a rectangular backplate, complete with a heavy-duty mortice lock body. Anti-corrosion stainless finish. Includes all mounting hardware. Suitable for both residential interior doors and light-commercial applications.",
  },
  {
    id: 26,
    name: "Round-Rose Lever Handle Set — Matte Black",
    category: "Door Handle",
    price: 0,
    unit: "per pair",
    image: "assets/door-handle/photo_9.jpg",
    shortInfo: "Matte black lever on round rose, complete with mortice lock body. Pair + hardware.",
    description: "Contemporary matte-black lever handle mounted on a circular round rose, supplied as a pair with full mortice lock body and all fixings. Minimalist design suited to modern interiors. The round rose profile gives a cleaner look compared to rectangular backplate styles.",
  },
  {
    id: 27,
    name: "Smart Lock — Fingerprint + Keypad + Video Intercom",
    category: "Door Handle",
    price: 0,
    unit: "per unit",
    image: "assets/door-handle/photo_10.jpg",
    shortInfo: "Fingerprint + PIN + WeChat + card + key + video intercom. Copper Dun brand.",
    description: "Tong Dun smart lock with built-in video intercom, fingerprint scanner, PIN keypad, NFC card, WeChat mini-program, and key backup. Features dual-security locking system, remote indoor unlock, voice prompts, and face recognition option. Silver and black premium finish. Displayed on showroom stand.",
  },

  /* ── TILES (9 products) ────────────────────────────────────
     Photos: assets/tiles/photo_1.jpg … photo_9.jpg
     All 600×600 mm polished / matte porcelain floor tiles
  ──────────────────────────────────────────────────────────── */
  {
    id: 28,
    name: "Porcelain Floor Tile — TH6701",
    category: "Tiles",
    price: 0,
    unit: "per m²",
    image: "assets/tiles/photo_1.jpg",
    shortInfo: "Light grey marble-effect polished porcelain. Size: 600×600 mm.",
    description: "Polished light-grey porcelain tile with a soft marble-vein effect. Large format 600×600 mm makes rooms feel more spacious. Suitable for living rooms, hallways, and commercial lobbies. Easy to clean polished surface. Sold per m² — order 10% extra for cuts. Model: TH6701.",
  },
  {
    id: 29,
    name: "Porcelain Floor Tile — TH6702",
    category: "Tiles",
    price: 0,
    unit: "per m²",
    image: "assets/tiles/photo_2.jpg",
    shortInfo: "White-grey marble-effect polished porcelain. Size: 600×600 mm.",
    description: "Bright white porcelain with delicate grey marble veining throughout. High-polish surface reflects light beautifully in open-plan spaces. 600×600 mm format, 10 mm thickness. Suitable for floors and walls. Rectified edges for tight-joint laying. Model: TH6702.",
  },
  {
    id: 30,
    name: "Porcelain Floor Tile — TH6703",
    category: "Tiles",
    price: 0,
    unit: "per m²",
    image: "assets/tiles/photo_3.jpg",
    shortInfo: "Medium grey marble-effect polished porcelain. Size: 600×600 mm.",
    description: "Medium grey polished porcelain with a bold marble-vein pattern. Timeless and versatile — complements both modern and traditional interiors. 600×600 mm, 10 mm thickness. Suitable for residential and commercial floor use. Model: TH6703.",
  },
  {
    id: 31,
    name: "Porcelain Floor Tile — TH6705",
    category: "Tiles",
    price: 0,
    unit: "per m²",
    image: "assets/tiles/photo_4.jpg",
    shortInfo: "Dark grey dramatic veined polished porcelain. Size: 600×600 mm.",
    description: "Bold dark-grey polished porcelain with dramatic flowing white veins. A striking choice for statement floors and accent areas. 600×600 mm large format with rectified edges. Suitable for high-traffic areas. Model: TH6705.",
  },
  {
    id: 32,
    name: "Porcelain Floor Tile — TH6707",
    category: "Tiles",
    price: 0,
    unit: "per m²",
    image: "assets/tiles/photo_5.jpg",
    shortInfo: "Light grey sandstone-effect matte porcelain. Size: 600×600 mm.",
    description: "Soft light-grey porcelain with a brushed sandstone texture in a matte finish. Understated and elegant — suits minimalist interiors. Matte surface provides better grip underfoot. 600×600 mm, 10 mm thickness. Model: TH6707.",
  },
  {
    id: 33,
    name: "Porcelain Floor Tile — TH6708",
    category: "Tiles",
    price: 0,
    unit: "per m²",
    image: "assets/tiles/photo_6.jpg",
    shortInfo: "Charcoal grey stone-texture matte porcelain. Size: 600×600 mm.",
    description: "Dark charcoal-grey matte porcelain with a natural stone micro-texture. Provides excellent slip resistance for bathrooms and wet areas. Dense, non-porous body. 600×600 mm, 10 mm thickness. Suitable for floors and feature walls. Model: TH6708.",
  },
  {
    id: 34,
    name: "Porcelain Floor Tile — TH6709",
    category: "Tiles",
    price: 0,
    unit: "per m²",
    image: "assets/tiles/photo_7.jpg",
    shortInfo: "Pearl white cloudy-veined polished porcelain. Size: 600×600 mm.",
    description: "Luminous pearl-white polished porcelain with soft, cloudy grey veining. Creates a bright and luxurious atmosphere. Highly polished surface. 600×600 mm large format, rectified edges. Ideal for living rooms, master bedrooms, and entrance halls. Model: TH6709.",
  },
  {
    id: 35,
    name: "Porcelain Floor Tile — TH67010",
    category: "Tiles",
    price: 0,
    unit: "per m²",
    image: "assets/tiles/photo_8.jpg",
    shortInfo: "Cool grey feather-veined polished porcelain. Size: 600×600 mm.",
    description: "Cool grey polished porcelain with fine feather-like veining across the surface. A sophisticated and contemporary finish. 600×600 mm, 10 mm thickness with rectified edges. Suitable for both residential and commercial floor installations. Model: TH67010.",
  },
  {
    id: 36,
    name: "Porcelain Floor Tile — TH67011",
    category: "Tiles",
    price: 0,
    unit: "per m²",
    image: "assets/tiles/photo_9.jpg",
    shortInfo: "Natural oak wood-grain effect porcelain. Size: 600×600 mm.",
    description: "Warm natural oak wood-grain porcelain tile — all the warmth and beauty of timber with the durability and ease of porcelain. Perfect for living rooms, bedrooms, and commercial spaces where a natural feel is desired. Matte surface. 600×600 mm. Model: TH67011.",
  },
];


/* ================================================================
   01b. ADMIN PRODUCT OVERRIDE
   Admin panel saves edited products to localStorage key: "tongdun_products"
   If that key exists, use those products instead of the hardcoded list.
   ================================================================ */
function getProducts() {
  try {
    const saved = localStorage.getItem("tongdun_products");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (_) {}
  return PRODUCTS;
}

/* ================================================================
   02. APP STATE
   ================================================================ */
let cart          = [];
let activeCategory = "all";
let searchQuery   = "";
let sortMode      = "default";


/* ================================================================
   03. DOM REFERENCES
   ================================================================ */
const DOM = {
  productGrid:    document.getElementById("productGrid"),
  emptyState:     document.getElementById("emptyState"),
  resultCount:    document.getElementById("resultCount"),
  resetFiltersBtn:document.getElementById("resetFiltersBtn"),
  searchInput:    document.getElementById("searchInput"),
  clearSearch:    document.getElementById("clearSearch"),
  filterButtons:  document.getElementById("filterButtons"),
  sortSelect:     document.getElementById("sortSelect"),
  cartToggleBtn:  document.getElementById("cartToggleBtn"),
  cartBadge:      document.getElementById("cartBadge"),
  cartSidebar:    document.getElementById("cartSidebar"),
  cartOverlay:    document.getElementById("cartOverlay"),
  cartCloseBtn:   document.getElementById("cartCloseBtn"),
  cartItemsWrap:  document.getElementById("cartItemsWrap"),
  cartFooter:     document.getElementById("cartFooter"),
  modalOverlay:   document.getElementById("modalOverlay"),
  modalClose:     document.getElementById("modalClose"),
  modalBody:      document.getElementById("modalBody"),
  receiptOverlay: document.getElementById("receiptOverlay"),
  receiptPaper:   document.getElementById("receiptPaper"),
  printReceiptBtn:document.getElementById("printReceiptBtn"),
  receiptCloseBtn:document.getElementById("receiptCloseBtn"),
  navToggle:      document.getElementById("navToggle"),
  mainNav:        document.getElementById("mainNav"),
  toastContainer: document.getElementById("toastContainer"),
};


/* ================================================================
   04. CART LOGIC
   ================================================================ */
function loadCart() {
  try {
    const saved = localStorage.getItem("tongdun_cart");
    if (saved) cart = JSON.parse(saved);
  } catch (_) { cart = []; }
}

function saveCart() {
  localStorage.setItem("tongdun_cart", JSON.stringify(cart));
}

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.productId === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      productId: product.id,
      name:      product.name,
      category:  product.category,
      price:     product.price,
      unit:      product.unit,
      image:     product.image,
      qty,
    });
  }
  saveCart();
  updateCartBadge();
  renderCart();
  showToast(`✓ ${product.name.split("—")[0].trim()} added to cart`);
  DOM.cartBadge.classList.remove("bump");
  requestAnimationFrame(() => DOM.cartBadge.classList.add("bump"));
  DOM.cartBadge.addEventListener("animationend", () => DOM.cartBadge.classList.remove("bump"), { once: true });
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.productId !== productId);
  saveCart(); updateCartBadge(); renderCart();
}

function changeCartQty(productId, delta) {
  const item = cart.find(i => i.productId === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(productId); return; }
  saveCart(); renderCart();
}

function clearCart() {
  if (!confirm("Remove all items from your cart?")) return;
  cart = [];
  saveCart(); updateCartBadge(); renderCart();
}

function cartTotals() {
  const subtotal  = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax       = subtotal * 0.10;
  const total     = subtotal + tax;
  const itemCount = cart.reduce((s, i) => s + i.qty, 0);
  return { subtotal, tax, total, itemCount };
}

function updateCartBadge() {
  DOM.cartBadge.textContent = cartTotals().itemCount;
}

function openCart()  {
  DOM.cartSidebar.classList.add("open");
  DOM.cartOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  DOM.cartSidebar.classList.remove("open");
  DOM.cartOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

/* Format price — shows "Contact for price" when price = 0 */
function formatPrice(amount) {
  if (amount === 0) return "Contact for Price";
  return new Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD", minimumFractionDigits: 2,
  }).format(amount);
}

/* Price for receipt line — shows $0.00 or actual price */
function formatPriceReceipt(amount) {
  if (amount === 0) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD", minimumFractionDigits: 2,
  }).format(amount);
}


/* ================================================================
   05. RENDER FUNCTIONS
   ================================================================ */
function renderProducts() {
  let results = [...getProducts()];

  if (activeCategory !== "all") {
    results = results.filter(p => p.category === activeCategory);
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    results = results.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.shortInfo.toLowerCase().includes(q)
    );
  }

  if (sortMode === "name-asc")   results.sort((a,b) => a.name.localeCompare(b.name));
  if (sortMode === "name-desc")  results.sort((a,b) => b.name.localeCompare(a.name));
  if (sortMode === "price-asc")  results.sort((a,b) => a.price - b.price);
  if (sortMode === "price-desc") results.sort((a,b) => b.price - a.price);

  DOM.resultCount.textContent = results.length
    ? `Showing ${results.length} product${results.length !== 1 ? "s" : ""}`
    : "";

  DOM.emptyState.hidden        = results.length > 0;
  DOM.productGrid.style.display = results.length > 0 ? "" : "none";

  DOM.productGrid.innerHTML = results.map((p, idx) => `
    <article class="product-card" style="animation-delay:${idx * 0.04}s">
      <div class="card-img-wrap" data-id="${p.id}" role="button" tabindex="0" aria-label="View details: ${escHtml(p.name)}">
        <img src="${p.image}" alt="${escHtml(p.name)}" loading="lazy"
             onerror="this.src='https://placehold.co/600x400/e8e4dc/888?text=No+Image'" />
        <span class="card-cat-badge">${escHtml(p.category)}</span>
        <div class="card-view-overlay">
          <button class="card-view-btn" data-id="${p.id}">View Details</button>
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">${escHtml(p.category)}</p>
        <h3 class="card-title">${escHtml(p.name)}</h3>
        <p class="card-info">${escHtml(p.shortInfo)}</p>
        <div class="card-price-row">
          <span class="card-price${p.price === 0 ? " price-enquire" : ""}">
            ${p.price === 0
              ? '<span style="font-size:.85rem;font-family:var(--font-body);color:var(--c-accent);font-weight:600;">Contact for Price</span>'
              : formatPrice(p.price) + '<span class="price-unit"> / ' + escHtml(p.unit) + '</span>'
            }
          </span>
        </div>
        <div class="card-actions">
          <div class="qty-control">
            <button class="qty-btn" data-action="dec" data-card="${p.id}" aria-label="Decrease">−</button>
            <input  class="qty-input" type="number" id="qty_${p.id}" value="1" min="1" max="999" aria-label="Quantity" data-id="${p.id}" />
            <button class="qty-btn" data-action="inc" data-card="${p.id}" aria-label="Increase">+</button>
          </div>
          <button class="add-to-cart-btn" data-id="${p.id}" aria-label="Add ${escHtml(p.name)} to cart">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  `).join("");

  attachCardEvents();
}

function renderCart() {
  if (cart.length === 0) {
    DOM.cartItemsWrap.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Browse the catalog and add products.</p>
      </div>`;
    DOM.cartFooter.innerHTML = "";
    return;
  }

  DOM.cartItemsWrap.innerHTML = cart.map(item => `
    <div class="cart-item" data-pid="${item.productId}">
      <img class="cart-item-img" src="${item.image}" alt="${escHtml(item.name)}"
           onerror="this.src='https://placehold.co/64x64/e8e4dc/888?text=?'" />
      <div class="cart-item-info">
        <p class="cart-item-name">${escHtml(item.name.split("—")[0].trim())}</p>
        <p class="cart-item-cat">${escHtml(item.category)}</p>
        <p class="cart-item-price-line">${item.price === 0 ? "Contact for Price" : formatPrice(item.price) + " / " + escHtml(item.unit)}</p>
      </div>
      <div class="cart-item-controls">
        <span class="cart-item-subtotal">${item.price === 0 ? "—" : formatPrice(item.price * item.qty)}</span>
        <div class="cart-qty-control">
          <button class="cqty-btn" data-pid="${item.productId}" data-action="dec" aria-label="Decrease">−</button>
          <span class="cqty-val">${item.qty}</span>
          <button class="cqty-btn" data-pid="${item.productId}" data-action="inc" aria-label="Increase">+</button>
        </div>
        <button class="cart-item-remove" data-pid="${item.productId}" aria-label="Remove">✕ Remove</button>
      </div>
    </div>
  `).join("");

  const { subtotal, tax, total } = cartTotals();
  const hasPrice = cart.some(i => i.price > 0);

  DOM.cartFooter.innerHTML = `
    <div class="cart-totals">
      <table>
        ${hasPrice ? `
        <tr><td>Subtotal</td><td>${formatPrice(subtotal)}</td></tr>
        <tr><td>Tax (10%)</td><td>${formatPrice(tax)}</td></tr>
        <tr class="total-row"><td>Total</td><td>${formatPrice(total)}</td></tr>
        ` : `
        <tr><td colspan="2" style="text-align:center;color:var(--c-text-3);font-size:.82rem;padding:.5rem 0">
          Contact us for pricing on selected items.
        </td></tr>`}
      </table>
    </div>
    <div class="cart-footer-actions">
      <button class="btn btn-primary" id="viewReceiptBtn">📄 View / Print Receipt</button>
      <button class="cart-clear-link" id="clearCartBtn">Remove all items</button>
    </div>
  `;

  document.getElementById("viewReceiptBtn").addEventListener("click", openReceipt);
  document.getElementById("clearCartBtn").addEventListener("click", clearCart);

  DOM.cartItemsWrap.querySelectorAll(".cqty-btn").forEach(btn => {
    btn.addEventListener("click", () => changeCartQty(parseInt(btn.dataset.pid, 10), btn.dataset.action === "inc" ? 1 : -1));
  });
  DOM.cartItemsWrap.querySelectorAll(".cart-item-remove").forEach(btn => {
    btn.addEventListener("click", () => removeFromCart(parseInt(btn.dataset.pid, 10)));
  });
}


/* ================================================================
   06. PRODUCT DETAIL MODAL
   ================================================================ */
function openProductModal(productId) {
  const p = getProducts().find(pr => pr.id === productId);
  if (!p) return;

  DOM.modalBody.innerHTML = `
    <img class="modal-img" src="${p.image}" alt="${escHtml(p.name)}"
         onerror="this.src='https://placehold.co/700x400/e8e4dc/888?text=No+Image'" />
    <p class="modal-cat">${escHtml(p.category)}</p>
    <h2 id="modalTitle">${escHtml(p.name)}</h2>
    <p class="modal-price">
      ${p.price === 0
        ? `<span style="font-size:1.1rem;font-family:var(--font-body);color:var(--c-accent);font-weight:600;">Contact for Price — Call: <a href="tel:070296016" style="color:var(--c-accent)">070 296 016</a></span>`
        : `${formatPrice(p.price)} <span class="price-unit">/ ${escHtml(p.unit)}</span>`
      }
    </p>
    <p class="modal-desc">${escHtml(p.description)}</p>
    <div class="modal-actions">
      <div class="modal-qty-wrap">
        <label class="modal-qty-label" for="modal_qty_${p.id}">Qty:</label>
        <div class="qty-control">
          <button class="qty-btn" id="modal_dec_${p.id}" aria-label="Decrease">−</button>
          <input  class="qty-input" type="number" id="modal_qty_${p.id}" value="1" min="1" max="999" aria-label="Quantity" />
          <button class="qty-btn" id="modal_inc_${p.id}" aria-label="Increase">+</button>
        </div>
      </div>
      <button class="btn btn-primary" id="modal_atc_${p.id}">Add to Cart</button>
    </div>
  `;

  const qtyInput = document.getElementById(`modal_qty_${p.id}`);
  document.getElementById(`modal_dec_${p.id}`).addEventListener("click", () => {
    if (qtyInput.value > 1) qtyInput.value = parseInt(qtyInput.value) - 1;
  });
  document.getElementById(`modal_inc_${p.id}`).addEventListener("click", () => {
    qtyInput.value = parseInt(qtyInput.value) + 1;
  });
  document.getElementById(`modal_atc_${p.id}`).addEventListener("click", () => {
    addToCart(p.id, parseInt(qtyInput.value, 10) || 1);
    closeProductModal();
    openCart();
  });

  DOM.modalOverlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  DOM.modalOverlay.hidden = true;
  document.body.style.overflow = "";
}


/* ================================================================
   07. RECEIPT MODAL
   ================================================================ */
function openReceipt() {
  if (cart.length === 0) { showToast("Your cart is empty.", "error"); return; }

  const { subtotal, tax, total } = cartTotals();
  const now      = new Date();
  const dateStr  = now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const timeStr  = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  const orderNum = "TD-" + now.getFullYear() + "-" + String(Math.floor(Math.random() * 90000) + 10000);
  const hasPrice = cart.some(i => i.price > 0);

  const itemRows = cart.map(item => `
    <tr>
      <td>${escHtml(item.name.split("—")[0].trim())}</td>
      <td style="text-align:center">${item.qty}</td>
      <td style="text-align:right">${formatPriceReceipt(item.price)}</td>
      <td style="text-align:right">${item.price === 0 ? "—" : formatPriceReceipt(item.price * item.qty)}</td>
    </tr>
  `).join("");

  DOM.receiptPaper.innerHTML = `
    <div class="rcpt-header">
      <div class="rcpt-logo-wrap">
        <img src="logo/TongDun.png" alt="Tong Dun Logo" />
      </div>
      <div class="rcpt-company">Tong Dun</div>
      <div class="rcpt-tagline">Doors · Smart Locks · Tiles</div>
      <div class="rcpt-contact">
        Sales: CHIN MANITH &nbsp;|&nbsp; H/P: 070 296 016<br>
        Email: charmcoal@gmail.com
      </div>
    </div>

    <div class="rcpt-meta">Order No: <span>${orderNum}</span></div>
    <div class="rcpt-meta">Date: <span>${dateStr}</span></div>
    <div class="rcpt-meta">Time: <span>${timeStr}</span></div>

    <hr class="rcpt-divider" />
    <p class="rcpt-section-title">Order Summary</p>

    <table class="rcpt-table">
      <thead>
        <tr>
          <th>Item</th>
          <th style="text-align:center">Qty</th>
          <th style="text-align:right">Unit Price</th>
          <th style="text-align:right">Subtotal</th>
        </tr>
      </thead>
      <tbody>${itemRows}</tbody>
    </table>

    <hr class="rcpt-divider" />

    ${hasPrice ? `
    <div class="rcpt-totals">
      <table>
        <tr><td>Subtotal</td><td>${formatPriceReceipt(subtotal)}</td></tr>
        <tr><td>Tax (10%)</td><td>${formatPriceReceipt(tax)}</td></tr>
        <tr class="rcpt-grand-total">
          <td><strong>TOTAL</strong></td>
          <td><strong>${formatPriceReceipt(total)}</strong></td>
        </tr>
      </table>
    </div>
    ` : `<p style="font-size:.78rem;color:#666;text-align:center;margin:.5rem 0">
      * Prices subject to confirmation — please contact us for a formal quotation.
    </p>`}

    <div class="rcpt-footer">
      <strong>Thank you for your interest in Tong Dun!</strong><br>
      Please bring this receipt to our showroom or contact us to confirm your order.<br>
      Receipt valid for 7 days from the date above.<br><br>
      <em>"Customer first, integrity first."</em>
    </div>
  `;

  DOM.receiptOverlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeReceipt() {
  DOM.receiptOverlay.hidden = true;
  document.body.style.overflow = "";
}


/* ================================================================
   08. TOAST
   ================================================================ */
function showToast(message, type = "default") {
  const toast = document.createElement("div");
  toast.className = "toast" + (type !== "default" ? " " + type : "");
  toast.textContent = message;
  DOM.toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 1000);
}


/* ================================================================
   09. SEARCH / FILTER / SORT
   ================================================================ */
function setActiveCategory(category) {
  activeCategory = category;
  DOM.filterButtons.querySelectorAll(".filter-pill").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });
  renderProducts();
}

function resetFilters() {
  activeCategory = "all"; searchQuery = ""; sortMode = "default";
  DOM.searchInput.value = "";
  DOM.clearSearch.classList.remove("visible");
  DOM.sortSelect.value = "default";
  DOM.filterButtons.querySelectorAll(".filter-pill").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === "all");
  });
  renderProducts();
}


/* ================================================================
   10. EVENT LISTENERS
   ================================================================ */
function attachCardEvents() {
  DOM.productGrid.querySelectorAll(".card-img-wrap, .card-view-btn").forEach(el => {
    el.addEventListener("click", (e) => {
      if (e.target === el || e.target.classList.contains("card-view-btn")) {
        openProductModal(parseInt(el.dataset.id, 10));
      }
    });
    el.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProductModal(parseInt(el.dataset.id, 10));
      }
    });
  });

  DOM.productGrid.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(`qty_${btn.dataset.card}`);
      let val = parseInt(input.value, 10) || 1;
      if (btn.dataset.action === "inc") val++;
      else if (btn.dataset.action === "dec" && val > 1) val--;
      input.value = val;
    });
  });

  DOM.productGrid.querySelectorAll(".qty-input").forEach(input => {
    input.addEventListener("change", () => {
      let val = parseInt(input.value, 10);
      if (isNaN(val) || val < 1) val = 1;
      input.value = val;
    });
  });

  DOM.productGrid.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id    = parseInt(btn.dataset.id, 10);
      const input = document.getElementById(`qty_${id}`);
      const qty   = Math.max(1, parseInt(input?.value, 10) || 1);
      addToCart(id, qty);
      if (input) input.value = 1;
    });
  });
}

function setupEvents() {
  // Header scroll shadow
  window.addEventListener("scroll", () => {
    document.querySelector(".site-header").classList.toggle("scrolled", window.scrollY > 10);
  });

  // Mobile nav
  DOM.navToggle.addEventListener("click", () => {
    DOM.navToggle.classList.toggle("open");
    DOM.mainNav.classList.toggle("open");
  });
  DOM.mainNav.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      DOM.navToggle.classList.remove("open");
      DOM.mainNav.classList.remove("open");
    });
  });

  // Cart
  DOM.cartToggleBtn.addEventListener("click", openCart);
  DOM.cartCloseBtn.addEventListener("click",  closeCart);
  DOM.cartOverlay.addEventListener("click",   closeCart);

  // Search
  DOM.searchInput.addEventListener("input", () => {
    searchQuery = DOM.searchInput.value;
    DOM.clearSearch.classList.toggle("visible", searchQuery.length > 0);
    renderProducts();
  });
  DOM.clearSearch.addEventListener("click", () => {
    searchQuery = ""; DOM.searchInput.value = "";
    DOM.clearSearch.classList.remove("visible");
    renderProducts(); DOM.searchInput.focus();
  });

  // Filters
  DOM.filterButtons.addEventListener("click", e => {
    const btn = e.target.closest(".filter-pill");
    if (btn) setActiveCategory(btn.dataset.category);
  });

  // Sort
  DOM.sortSelect.addEventListener("change", () => { sortMode = DOM.sortSelect.value; renderProducts(); });

  // Reset
  DOM.resetFiltersBtn.addEventListener("click", resetFilters);

  // Product modal
  DOM.modalClose.addEventListener("click", closeProductModal);
  DOM.modalOverlay.addEventListener("click", e => { if (e.target === DOM.modalOverlay) closeProductModal(); });

  // Receipt
  DOM.printReceiptBtn.addEventListener("click", () => {
    // Remove 'hidden' so the overlay is in the normal DOM flow during print
    DOM.receiptOverlay.removeAttribute("hidden");
    setTimeout(() => {
      window.print();
      // Restore hidden after print dialog closes
      DOM.receiptOverlay.setAttribute("hidden", "");
    }, 100);
  });
  DOM.receiptCloseBtn.addEventListener("click", closeReceipt);
  DOM.receiptOverlay.addEventListener("click",  e => { if (e.target === DOM.receiptOverlay) closeReceipt(); });

  // Escape key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeProductModal(); closeReceipt(); closeCart(); DOM.navToggle.classList.remove("open"); DOM.mainNav.classList.remove("open"); }
  });

  // Footer category links
  document.querySelectorAll("[data-cat]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      setActiveCategory(link.dataset.cat);
      document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
    });
  });
}

/* ================================================================
   UTILITY
   ================================================================ */
function escHtml(str) {
  const d = document.createElement("div");
  d.appendChild(document.createTextNode(String(str)));
  return d.innerHTML;
}

/* ================================================================
   11. INIT
   ================================================================ */
function init() {
  loadCart();
  updateCartBadge();
  renderCart();
  renderProducts();
  setupEvents();

  // Scroll-in animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".feat-card, .about-info, .hero-stat").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity .5s ease, transform .5s ease";
    observer.observe(el);
  });
}

document.addEventListener("DOMContentLoaded", init);
