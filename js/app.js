/* =========================================
   EL SANDWICHAZO - app.js (COMPLETO)
   - Categorías + Carrito + WhatsApp + Modal Img
   - Festín: centrado perfecto + auto + click + EXPLOSIÓN SUAVE (grande/lenta)
   - Botón WhatsApp: vibra/incita al click
========================================= */

/* ========= CONFIG ========= */
const CONFIG = {
    BUSINESS_NAME: "El Sandwishazo",
    CITY: "Antofagasta",
    PHONE_E164: "+56961589674",
    FALLBACK_IMG: "assets/placeholder.png",
    DELIVERY_FEE: 2000,
};

/* ========= PRODUCTS ========= */
const PRODUCTS = [
    // ===== SANDWICH =====
    {
        id: "sandwich-buurguer",
        title: "Sandwichazo Burguer ⭐",
        tag: "Más vendido",
        category: "sandwich",
        price: 3500,
        desc: "Sándwichazo cargado con carne de res desmechada, jamón sandwich, queso mozzarella fundido, lechuga fresca, tomate, y salsa secreta Sandwishazo.",
        img: "assets/sandwish/burguer.png"
    },
    {
        id: "sandwichazo-especial",
        title: "Sandwichazo Especial",
        tag: "Clásico",
        category: "sandwich",
        price: 3000,
        desc: "Jamón pierna de cerdo, jamón de ave, jamonada suave, queso mozzarella, lechuga, tomate y salsa especial Sandwishazo.",
        img: "assets/sandwish/especial.png"
    },
    {
        id: "sandwichazo-superespecial",
        title: "Sandwichazo super especial",
        tag: "Más vendido",
        category: "sandwich",
        price: 3500,
        desc: "Jamón pierna ahumado, jamón acaramelado, jamonada premium, doble queso mozzarella, palta, maicitos gratinados y salsa secreta Sandwishazo.",
        img: "assets/sandwish/superespecial.png"
    },
    {
        id: "sandwichazo-pavo",
        title: "Sandwichazo Pavo",
        tag: "Clásico",
        category: "sandwich",
        price: 3000,
        desc: "Jamón pechuga de pavo, panceta, queso mozarella, lechuga, miel mostaza y salsa secreta Sandwishazo.",
        img: "assets/sandwish/pavo.png"
    },
    {
        id: "sandwichazo-ropavieja",
        title: "Sandwichazo Ropa Vieja",
        tag: "Más vendido",
        category: "sandwich",
        price: 3500,
        desc: "Carne de res desmechada, jamón sandwich, queso mozzarella fundido, lechuga, tomate y salsa secreta Sandwishazo.",
        img: "assets/sandwish/ropavieja.png"
    },
    {
        id: "sandwichazo-pollo",
        title: "Sandwichazo Pollo",
        tag: "Clásico",
        category: "sandwich",
        price: 3000,
        desc: "Pechuga de pollo desmechada, jamón sandwich, tomate, queso mozzarella, lechuga y salsa secreta Sandwishazo.",
        img: "assets/sandwish/pollo.png"
    },
    {
        id: "sandwichazo-hawaiano",
        title: "Sandwichazo Hawaiano",
        tag: "Clásico",
        category: "sandwich",
        price: 3000,
        desc: "Jamón pierna de cerdo, jamón pechuga de pollo, piña caramelizada, queso mozzarella y salsa secreta Sandwishazo.",
        img: "assets/sandwish/hawaiano.png"
    },
    {
        id: "sandwichazo-crunch",
        title: "Sandwichazo Crunch",
        tag: "Clásico",
        category: "sandwich",
        price: 3000,
        desc: "Pechuga de pollo apanado, miel mostaza, tomate, lechuga, queso mozzarella y salsa secreta Sandwishazo.",
        img: "assets/sandwish/crunch.png"
    },

    // ===== COMBOS =====
    {
        id: "combo-buurguer",
        title: "Combo Sandwichazo Burguer ⭐",
        tag: "Más vendido",
        category: "combos",
        price: 3500,
        desc: "Sandwichazo Burguer + papas naturales + bebida personal.",
        img: "assets/combos/comboburguer.png"
    },
    {
        id: "combo-especial",
        title: "Combo Sandwichazo Especial",
        tag: "Clásico",
        category: "combos",
        price: 3000,
        desc: "Sandwichazo Especial + papas naturales + bebida personal.",
        img: "assets/combos/especial.png"
    },
    {
        id: "combo-superespecial",
        title: "Combo Sandwichazo super especial",
        tag: "Más vendido",
        category: "combos",
        price: 3500,
        desc: "Sandwichazo super especial + papas naturales + bebida personal.",
        img: "assets/combos/superespecial.png"
    },
    {
        id: "combo-pavo",
        title: "Combo Sandwichazo Pavo",
        tag: "Clásico",
        category: "combos",
        price: 3000,
        desc: "Sandwichazo Pavo + papas naturales + bebida personal.",
        img: "assets/combos/pavo.png"
    },
    {
        id: "combo-ropavieja",
        title: "Combo Sandwichazo Ropa Vieja",
        tag: "Más vendido",
        category: "combos",
        price: 3500,
        desc: "Sandwichazo Ropa Vieja + papas naturales + bebida personal.",
        img: "assets/combos/ropavieja.png"
    },
    {
        id: "combo-pollo",
        title: "Combo Sandwichazo Pollo",
        tag: "Clásico",
        category: "combos",
        price: 3000,
        desc: "Sandwichazo Pollo + papas naturales + bebida personal.",
        img: "assets/combos/pollo.png"
    },
    {
        id: "combo-hawaiano",
        title: "Combo Sandwichazo Hawaiano",
        tag: "Clásico",
        category: "combos",
        price: 3000,
        desc: "Sandwichazo Hawaiano + papas naturales + bebida personal.",
        img: "assets/combos/hawaiano.png"
    },
    {
        id: "combo-crunch",
        title: "Combo Sandwichazo Crunch",
        tag: "Clásico",
        category: "combos",
        price: 3000,
        desc: "Sandwichazo Crunch + papas naturales + bebida personal.",
        img: "assets/combos/crunch.png"
    },
];

/* ========= HELPERS ========= */
const seleccionar = (selector) => document.querySelector(selector);

function formatearCLP(monto) {
    return Number(monto || 0).toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0,
    });
}

function obtenerProducto(id) {
    return PRODUCTS.find((p) => p.id === id);
}

function obtenerImagenSegura(producto) {
    return producto?.img || CONFIG.FALLBACK_IMG;
}

function limpiarTelefonoE164(valor) {
    return String(valor || "").replace(/[^\d]/g, "");
}

function escaparHTML(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

/* ========= STATE ========= */
const carrito = new Map(); // key = `${id}__${size}`
let categoriaActual = "all";

/* ========= DATOS DEL PEDIDO ========= */
const datosPedido = {
    deliveryType: "retiro",
    name: "",
    phone: "",
    address: "",
    receiver: "",
    notes: "",
};

function resetearDatosPedido() {
    datosPedido.deliveryType = "retiro";
    datosPedido.name = "";
    datosPedido.phone = "";
    datosPedido.address = "";
    datosPedido.receiver = "";
    datosPedido.notes = "";
}

function limpiarTodoDespuesDeEnviar() {
    carrito.clear();
    resetearDatosPedido();
    renderCart();
}

/* ========= TAMAÑOS ========= */
function etiquetaTamano(size) {
    return size === "grande" ? "Grande (35 cm)" : "Personal (21 cm)";
}

function llaveItem(id, size) {
    return `${id}__${size}`;
}

/* ========= TOTALES ========= */
function subtotalCarrito() {
    let total = 0;
    for (const item of carrito.values()) {
        const producto = obtenerProducto(item.id);
        if (producto) total += producto.price * item.qty;
    }
    return total;
}

function costoDespacho() {
    return datosPedido.deliveryType === "delivery" ? CONFIG.DELIVERY_FEE : 0;
}

function totalCarrito() {
    return subtotalCarrito() + costoDespacho();
}

/* ========= CATEGORÍAS ========= */
function etiquetaCategoria(cat) {
    const mapa = {
        all: "Todo",
        sandwich: "Sandwich",
        combos: "Combos",
        bebidas: "Bebidas"
    };
    return mapa[cat] ?? "Todo";
}

function actualizarUIcategoria(cat) {
    const sub = seleccionar("#menuSubtitle");
    if (sub) sub.textContent = `Mostrando: ${etiquetaCategoria(cat)}`;
}

function productosFiltrados() {
    if (categoriaActual === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === categoriaActual);
}

/* ========= RENDER MENU ========= */
function renderMenu() {
    const grid = seleccionar("#menuGrid");
    if (!grid) return;

    const lista = productosFiltrados();

    grid.innerHTML = lista.map((p, i) => `
      <div data-aos="fade-up" data-aos-delay="${Math.min(i * 60, 360)}">
        <div class="card h-100 shadow-sm">
          <img
            src="${obtenerImagenSegura(p)}"
            class="card-img-top product-img"
            alt="${escaparHTML(p.title)}"
            loading="lazy"
            data-title="${escaparHTML(p.title)}"
            data-img="${obtenerImagenSegura(p)}"
            onerror="this.onerror=null;this.src='${CONFIG.FALLBACK_IMG}';"
          />
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-start gap-2 mb-1">
              <h5 class="card-title mb-0">${escaparHTML(p.title)}</h5>
              ${p.tag ? `<span class="badge bg-warning text-dark">${escaparHTML(p.tag)}</span>` : ""}
            </div>
            <p class="card-text small text-muted mb-2">${escaparHTML(p.desc)}</p>
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <span class="fw-bold">${formatearCLP(p.price)}</span>
              <button class="btn btn-warning btn-sm fw-semibold" data-add="${p.id}">
                <i class="bi bi-cart-plus"></i> Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join("");

    grid.onclick = async (e) => {
        const btn = e.target.closest("[data-add]");
        if (!btn) return;

        const idProducto = btn.getAttribute("data-add");
        const size = await pedirTamanoPorItem(idProducto);
        if (!size) return;

        addToCart(idProducto, size);
    };

    if (window.AOS && typeof AOS.refreshHard === "function") AOS.refreshHard();
}

/* ========= MODAL TAMAÑO ========= */
async function pedirTamanoPorItem(productId) {
    const producto = obtenerProducto(productId);
    if (!producto) return null;

    const res = await Swal.fire({
        title: "Elige el tamaño",
        html: `
        <div class="text-start">
          <div class="fw-semibold mb-2">${escaparHTML(producto.title)}</div>
          <div class="d-flex flex-column gap-2">
            <label class="form-check">
              <input class="form-check-input" type="radio" name="sz" value="personal" checked>
              <span class="form-check-label">Personal (21 cm)</span>
            </label>
            <label class="form-check">
              <input class="form-check-input" type="radio" name="sz" value="grande">
              <span class="form-check-label">Grande (35 cm)</span>
            </label>
          </div>
        </div>
      `,
        showCancelButton: true,
        confirmButtonText: "Agregar",
        cancelButtonText: "Cancelar",
        focusConfirm: false,
        preConfirm: () => document.querySelector('input[name="sz"]:checked')?.value || "personal",
    });

    if (!res.isConfirmed) return null;
    return res.value;
}

/* ========= CARRITO ========= */
function addToCart(id, size) {
    const key = llaveItem(id, size);
    const actual = carrito.get(key);

    if (!actual) carrito.set(key, {
        id,
        size,
        qty: 1
    });
    else actual.qty += 1;

    renderCart();

    Swal.fire({
        icon: "success",
        title: "Agregado ✅",
        text: `${obtenerProducto(id)?.title ?? "Producto"} • ${etiquetaTamano(size)}`,
        timer: 900,
        showConfirmButton: false,
    });
}

function removeOne(key) {
    const item = carrito.get(key);
    if (!item) return;
    if (item.qty <= 1) carrito.delete(key);
    else item.qty -= 1;
    renderCart();
}

function renderCart() {
    const list = seleccionar("#cartList");
    const totalEl = seleccionar("#cartTotal");
    const subEl = seleccionar("#cartSubtotal");
    const feeEl = seleccionar("#deliveryFee");
    const btnSend = seleccionar("#btnSendOrder");
    const btnClear = seleccionar("#btnClearCart");

    if (!list || !totalEl) return;

    if (subEl) subEl.textContent = formatearCLP(subtotalCarrito());
    if (feeEl) feeEl.textContent = formatearCLP(costoDespacho());
    totalEl.textContent = formatearCLP(totalCarrito());

    if (carrito.size === 0) {
        list.innerHTML = `<li class="list-group-item text-muted" style="margin-bottom:0;">Aún no agregas nada</li>`;
        if (btnSend) btnSend.disabled = true;
        if (btnClear) btnClear.disabled = true;
        return;
    }

    if (btnSend) btnSend.disabled = false;
    if (btnClear) btnClear.disabled = false;

    const itemsHTML = [];
    for (const [key, item] of carrito.entries()) {
        const producto = obtenerProducto(item.id);
        if (!producto) continue;

        itemsHTML.push(`
        <li class="list-group-item">
          <div class="d-flex align-items-start gap-3">
            <img class="cart-thumb"
              src="${obtenerImagenSegura(producto)}"
              alt="${escaparHTML(producto.title)}"
              loading="lazy"
              onerror="this.onerror=null;this.src='${CONFIG.FALLBACK_IMG}';"
            />
            <div class="flex-grow-1">
              <div class="fw-semibold">${escaparHTML(producto.title)}</div>
              <div class="text-muted small">Tamaño: <strong>${etiquetaTamano(item.size)}</strong></div>
              <div class="text-muted small">Cantidad: ${item.qty}</div>
              <div class="small fw-bold">${formatearCLP(producto.price * item.qty)}</div>
            </div>
            <div class="d-flex flex-column gap-2">
              <button class="btn btn-outline-light btn-sm" data-plus="${key}" title="Agregar uno"><i class="bi bi-plus"></i></button>
              <button class="btn btn-outline-secondary btn-sm" data-minus="${key}" title="Quitar uno"><i class="bi bi-dash"></i></button>
            </div>
          </div>
        </li>
      `);
    }

    list.innerHTML = itemsHTML.join("");

    list.onclick = (e) => {
        const plus = e.target.closest("[data-plus]");
        if (plus) {
            const k = plus.getAttribute("data-plus");
            const item = carrito.get(k);
            if (!item) return;
            addToCart(item.id, item.size);
            return;
        }
        const minus = e.target.closest("[data-minus]");
        if (minus) removeOne(minus.getAttribute("data-minus"));
    };
}

/* ========= FORMULARIO PEDIDO ========= */
function htmlFormularioPedido() {
    return `
      <div class="text-start">
        <div class="mb-3">
          <label class="form-label fw-semibold">Tipo de entrega</label>
          <div class="d-flex flex-column gap-2">
            <label class="form-check">
              <input class="form-check-input" type="radio" name="deliveryType" value="retiro" ${datosPedido.deliveryType === "retiro" ? "checked" : ""}>
              <span class="form-check-label">Retiro en tienda</span>
            </label>
            <label class="form-check">
              <input class="form-check-input" type="radio" name="deliveryType" value="delivery" ${datosPedido.deliveryType === "delivery" ? "checked" : ""}>
              <span class="form-check-label">Delivery a domicilio (+ ${formatearCLP(CONFIG.DELIVERY_FEE)})</span>
            </label>
          </div>
          <div class="small text-muted mt-1">El total se recalcula automáticamente.</div>
        </div>
  
        <div class="mb-3">
          <label class="form-label fw-semibold">Datos del cliente</label>
          <input id="od_name" class="form-control mb-2" placeholder="Tu nombre" value="${escaparHTML(datosPedido.name)}">
          <input id="od_phone" class="form-control" placeholder="Teléfono de contacto" value="${escaparHTML(datosPedido.phone)}">
        </div>
  
        <div id="deliveryFields" class="mb-3" style="${datosPedido.deliveryType === "delivery" ? "" : "display:none;"}">
          <label class="form-label fw-semibold">Datos delivery</label>
          <input id="od_receiver" class="form-control mb-2" placeholder="Nombre de quien recibe" value="${escaparHTML(datosPedido.receiver)}">
          <input id="od_address" class="form-control" placeholder="Dirección de entrega" value="${escaparHTML(datosPedido.address)}">
        </div>
  
        <div class="mb-3">
          <label class="form-label fw-semibold">Notas (opcional)</label>
          <textarea id="od_notes" class="form-control" rows="3" placeholder="Ej: sin tomate / más salsa / etc.">${escaparHTML(datosPedido.notes)}</textarea>
        </div>
  
        <div class="p-3 rounded-3 bg-light border">
          <div class="d-flex justify-content-between">
            <span class="text-muted">Subtotal:</span>
            <strong id="od_subtotal">${formatearCLP(subtotalCarrito())}</strong>
          </div>
          <div class="d-flex justify-content-between">
            <span class="text-muted">Despacho:</span>
            <strong id="od_fee">${formatearCLP(costoDespacho())}</strong>
          </div>
          <div class="d-flex justify-content-between mt-1">
            <span class="fw-semibold">Total:</span>
            <strong id="od_total">${formatearCLP(totalCarrito())}</strong>
          </div>
        </div>
      </div>
    `;
}

function actualizarTotalesDelModal() {
    const s = document.getElementById("od_subtotal");
    const f = document.getElementById("od_fee");
    const t = document.getElementById("od_total");
    if (s) s.textContent = formatearCLP(subtotalCarrito());
    if (f) f.textContent = formatearCLP(costoDespacho());
    if (t) t.textContent = formatearCLP(totalCarrito());
}

async function openOrderForm() {
    const res = await Swal.fire({
        title: "Datos del pedido",
        html: htmlFormularioPedido(),
        showCancelButton: true,
        confirmButtonText: "Enviar por WhatsApp",
        cancelButtonText: "Cancelar",
        focusConfirm: false,
        didOpen: () => {
            document.querySelectorAll('input[name="deliveryType"]').forEach((r) => {
                r.addEventListener("change", () => {
                    const v = document.querySelector('input[name="deliveryType"]:checked')?.value || "retiro";
                    datosPedido.deliveryType = v === "delivery" ? "delivery" : "retiro";

                    const df = document.getElementById("deliveryFields");
                    if (df) df.style.display = datosPedido.deliveryType === "delivery" ? "" : "none";

                    actualizarTotalesDelModal();
                    renderCart();
                });
            });
        },
        preConfirm: () => {
            datosPedido.name = document.getElementById("od_name")?.value?.trim() || "";
            datosPedido.phone = document.getElementById("od_phone")?.value?.trim() || "";
            datosPedido.receiver = document.getElementById("od_receiver")?.value?.trim() || "";
            datosPedido.address = document.getElementById("od_address")?.value?.trim() || "";
            datosPedido.notes = document.getElementById("od_notes")?.value?.trim() || "";

            if (!datosPedido.name) {
                Swal.showValidationMessage("Escribe tu nombre.");
                return false;
            }
            if (!datosPedido.phone) {
                Swal.showValidationMessage("Escribe tu teléfono.");
                return false;
            }

            if (datosPedido.deliveryType === "delivery") {
                if (!datosPedido.receiver) {
                    Swal.showValidationMessage("Escribe el nombre de quien recibe.");
                    return false;
                }
                if (!datosPedido.address) {
                    Swal.showValidationMessage("Escribe la dirección de entrega.");
                    return false;
                }
            }
            return true;
        },
    });

    if (!res.isConfirmed) return;

    openWhatsApp(true);
    limpiarTodoDespuesDeEnviar();

    setTimeout(() => {
        Swal.fire({
            icon: "success",
            title: "¡Gracias por tu compra! 🥪❤️",
            text: "Tu pedido fue preparado para enviarse por WhatsApp. ¡Te responderemos enseguida!",
            confirmButtonText: "Listo",
        });
    }, 300);
}

/* ========= WHATSAPP ========= */
function buildWhatsAppMessage() {
    const lines = [];
    lines.push(`Hola! Quiero pedir en ${CONFIG.BUSINESS_NAME}`);
    lines.push(`Ciudad: ${CONFIG.CITY}`);
    lines.push("");
    lines.push(`Entrega: ${datosPedido.deliveryType === "delivery" ? "Delivery a domicilio" : "Retiro en tienda"}`);
    lines.push(`Nombre: ${datosPedido.name}`);
    lines.push(`Contacto: ${datosPedido.phone}`);

    if (datosPedido.deliveryType === "delivery") {
        lines.push(`Recibe: ${datosPedido.receiver}`);
        lines.push(`Dirección: ${datosPedido.address}`);
    }
    if (datosPedido.notes) lines.push(`Notas: ${datosPedido.notes}`);

    lines.push("");
    lines.push("Pedido:");
    for (const item of carrito.values()) {
        const producto = obtenerProducto(item.id);
        if (!producto) continue;
        lines.push(`- ${item.qty} x ${producto.title} • ${etiquetaTamano(item.size)} (${formatearCLP(producto.price)})`);
    }

    lines.push("");
    lines.push(`Subtotal: ${formatearCLP(subtotalCarrito())}`);
    if (costoDespacho() > 0) lines.push(`Despacho: ${formatearCLP(costoDespacho())}`);
    lines.push(`Total aprox: ${formatearCLP(totalCarrito())}`);

    return encodeURIComponent(lines.join("\n"));
}

function openWhatsApp(withCart) {
    const phone = limpiarTelefonoE164(CONFIG.PHONE_E164);
    if (!phone) {
        Swal.fire({
            icon: "warning",
            title: "Falta tu WhatsApp",
            text: "Edita CONFIG.PHONE_E164 en js/app.js (ej: +56912345678).",
        });
        return;
    }

    const msg =
        withCart && carrito.size > 0 ?
        buildWhatsAppMessage() :
        encodeURIComponent(`Hola! Quiero pedir en ${CONFIG.BUSINESS_NAME} 🥪`);

    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
}

/* ========= BOTONES ========= */
function wireButtons() {
    const top = seleccionar("#btnWhatsappTop");
    const send = seleccionar("#btnSendOrder");
    const clear = seleccionar("#btnClearCart");

    if (top) {
        top.addEventListener("click", async (e) => {
            e.preventDefault();
            if (carrito.size > 0) return openOrderForm();
            openWhatsApp(false);
        });
    }

    if (send) {
        send.addEventListener("click", async () => {
            if (carrito.size === 0) {
                Swal.fire({
                    icon: "info",
                    title: "Carrito vacío",
                    text: "Agrega un producto primero."
                });
                return;
            }
            await openOrderForm();
        });
    }

    if (clear) {
        clear.addEventListener("click", async () => {
            if (carrito.size === 0) return;

            const res = await Swal.fire({
                icon: "warning",
                title: "¿Vaciar carrito?",
                text: "Se eliminarán todos los productos.",
                showCancelButton: true,
                confirmButtonText: "Sí, vaciar",
                cancelButtonText: "Cancelar",
                confirmButtonColor: "#dc3545",
            });

            if (res.isConfirmed) {
                carrito.clear();
                renderCart();
                Swal.fire({
                    icon: "success",
                    title: "Listo",
                    text: "Carrito vaciado.",
                    timer: 750,
                    showConfirmButton: false
                });
            }
        });
    }
}

/* ========= MODAL IMAGEN ========= */
function wireImageModal() {
    const modalEl = document.getElementById("imageModal");
    if (!modalEl || typeof bootstrap === "undefined") return;

    const modal = new bootstrap.Modal(modalEl);

    document.addEventListener("click", (e) => {
        const img = e.target.closest(".product-img");
        if (!img) return;

        const title = img.dataset.title || "";
        const src = img.dataset.img || "";

        const t = document.getElementById("imageModalTitle");
        const im = document.getElementById("imageModalImg");
        if (t) t.textContent = title;
        if (im) im.src = src;

        modal.show();
    });
}

/* ========= FILTROS ========= */
function applyCategory(cat, doScroll = false) {
    categoriaActual = cat;
    actualizarUIcategoria(cat);
    renderMenu();

    if (doScroll) {
        document.querySelector("#menu")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

function wireCategoryFilters() {
    document.querySelectorAll(".dropdown-item[data-category]").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const cat = item.dataset.category || "all";
            applyCategory(cat, true);
        });
    });

    actualizarUIcategoria(categoriaActual);
}

/* =====================================================
   FESTÍN (INTRO) + EXPLOSIÓN SUAVE GRANDE/LENTA
   ✅ Si no existe #siteContent, lo crea automáticamente
===================================================== */
function ensureSiteContentWrapper(festinEl) {
    let app = document.getElementById("siteContent");
    if (app) return app;

    // Crea wrapper y mueve todo lo que NO sea el festin dentro
    app = document.createElement("div");
    app.id = "siteContent";

    const children = Array.from(document.body.children);
    children.forEach((node) => {
        if (node === festinEl) return;
        app.appendChild(node);
    });

    document.body.appendChild(app);
    return app;
}

function initFestin() {
    const festin = document.getElementById("festinHero");
    if (!festin) return;

    // inyecta capa de partículas si no existe
    if (!festin.querySelector(".festin-burst")) {
        const burst = document.createElement("div");
        burst.className = "festin-burst";
        festin.appendChild(burst);
    }

    const app = ensureSiteContentWrapper(festin);
    if (!app) return;

    // Estado inicial: solo festín
    document.body.classList.add("app-loading");
    app.style.visibility = "hidden";

    festin.style.display = "grid";
    festin.setAttribute("aria-hidden", "false");

    let closed = false;
    let autoTimer = null;

    const close = () => {
        if (closed) return;
        closed = true;

        if (autoTimer) clearTimeout(autoTimer);

        // 🔥 EXPLOSIÓN GRANDE + LENTA
        festin.classList.add("festin-explode");

        // después de la explosión, desaparece el overlay
        setTimeout(() => {
            festin.classList.add("festin-hide");
        }, 1350);

        // ocultar totalmente + mostrar sitio
        setTimeout(() => {
            festin.style.display = "none";
            festin.setAttribute("aria-hidden", "true");

            document.body.classList.remove("app-loading");
            app.style.visibility = "visible";

            document.body.classList.add("festin-flash");
            setTimeout(() => document.body.classList.remove("festin-flash"), 650);
        }, 2050);
    };

    // Tap/click para entrar (sin botón)
    festin.addEventListener("click", close, {
        once: true
    });

    // Auto-entrar (27s)
    autoTimer = setTimeout(close, 27000);
}

/* ========= WHATSAPP ATTENTION ========= */
function initWhatsAppAttention() {
    const wa = document.getElementById("btnWhatsappTop");
    if (!wa) return;

    // arranca después de un toque de tiempo
    setTimeout(() => {
        wa.classList.add("wa-attention");
    }, 900);
}

/* ========= INIT ========= */
document.addEventListener("DOMContentLoaded", () => {
    initFestin();
    initWhatsAppAttention();

    renderMenu();
    renderCart();
    wireButtons();
    wireImageModal();
    wireCategoryFilters();
});