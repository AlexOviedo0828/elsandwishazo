/* =========================================
   EL SANDWICHAZO - app.js (ACTUALIZADO)
   ✅ Precios por tamaño (21 cm / 35 cm) por cada sándwich
   ✅ Combos/Bebidas con precio fijo
   ✅ Totales correctos según tamaño
   ✅ Modal tamaño muestra precio real
   ✅ Badge contador
   ✅ Festín + explosión
========================================= */

const CONFIG = {
    BUSINESS_NAME: "El Sandwishazo",
    CITY: "Antofagasta",
    PHONE_E164: "+56961589674",
    FALLBACK_IMG: "assets/placeholder.png",
    DELIVERY_FEE: 2000,
};

/* =========================================================
   ✅ PRODUCTOS
   - Para sándwich: usa "sizes" con precios distintos
   - Para combos/bebidas: usa "price" fijo
   👇 EDITA AQUÍ los precios según tu carta real
========================================================= */
const PRODUCTS = [
    // SANDWICHES (con tamaños)
    {
        id: "sandwich-buurguer",
        title: "Sandwichazo Burguer ⭐",
        tag: "Más vendido",
        category: "sandwich",
        sizes: {
            personal: 3500,
            grande: 5000
        }, // ✅ ejemplo
        desc: "Sándwichazo cargado con carne de res desmechada, jamón sandwich, queso mozzarella fundido, lechuga fresca, tomate, y salsa secreta Sandwishazo.",
        img: "assets/sandwish/burguer.png",
    },
    {
        id: "sandwichazo-especial",
        title: "Sandwichazo Especial",
        tag: "Clásico",
        category: "sandwich",
        sizes: {
            personal: 3000,
            grande: 4500
        },
        desc: "Jamón pierna de cerdo, jamón de ave, jamonada suave, queso mozzarella, lechuga, tomate y salsa especial Sandwishazo.",
        img: "assets/sandwish/especial.png",
    },
    {
        id: "sandwichazo-superespecial",
        title: "Sandwichazo super especial",
        tag: "Más vendido",
        category: "sandwich",
        sizes: {
            personal: 3500,
            grande: 5500
        },
        desc: "Jamón pierna ahumado, jamón acaramelado, jamonada premium, doble queso mozzarella, palta, maicitos gratinados y salsa secreta Sandwishazo.",
        img: "assets/sandwish/superespecial.png",
    },
    {
        id: "sandwichazo-pavo",
        title: "Sandwichazo Pavo",
        tag: "Clásico",
        category: "sandwich",
        sizes: {
            personal: 3000,
            grande: 4500
        },
        desc: "Jamón pechuga de pavo, panceta, queso mozarella, lechuga, miel mostaza y salsa secreta Sandwishazo.",
        img: "assets/sandwish/pavo.png",
    },
    {
        id: "sandwichazo-ropavieja",
        title: "Sandwichazo Ropa Vieja",
        tag: "Más vendido",
        category: "sandwich",
        sizes: {
            personal: 3500,
            grande: 5200
        },
        desc: "Carne de res desmechada, jamón sandwich, queso mozzarella fundido, lechuga, tomate y salsa secreta Sandwishazo.",
        img: "assets/sandwish/ropavieja.png",
    },
    {
        id: "sandwichazo-pollo",
        title: "Sandwichazo Pollo",
        tag: "Clásico",
        category: "sandwich",
        sizes: {
            personal: 3000,
            grande: 4500
        },
        desc: "Pechuga de pollo desmechada, jamón sandwich, tomate, queso mozzarella, lechuga y salsa secreta Sandwishazo.",
        img: "assets/sandwish/pollo.png",
    },
    {
        id: "sandwichazo-hawaiano",
        title: "Sandwichazo Hawaiano",
        tag: "Clásico",
        category: "sandwich",
        sizes: {
            personal: 3000,
            grande: 4600
        },
        desc: "Jamón pierna de cerdo, jamón pechuga de pollo, piña caramelizada, queso mozzarella y salsa secreta Sandwishazo.",
        img: "assets/sandwish/hawaiano.png",
    },
    {
        id: "sandwichazo-crunch",
        title: "Sandwichazo Crunch",
        tag: "Clásico",
        category: "sandwich",
        sizes: {
            personal: 3000,
            grande: 4700
        },
        desc: "Pechuga de pollo apanado, miel mostaza, tomate, lechuga, queso mozzarella y salsa secreta Sandwishazo.",
        img: "assets/sandwish/crunch.png",
    },

    // COMBOS (precio fijo)
    {
        id: "combo-buurguer",
        title: "Combo Sandwichazo Burguer ⭐",
        tag: "Más vendido",
        category: "combos",
        sizes: {
            personal: 3000,
            grande: 4700
        },
        desc: "Sandwichazo Burguer + papas naturales + bebida personal.",
        img: "assets/combos/comboburguer.png",
    },
    {
        id: "combo-especial",
        title: "Combo Sandwichazo Especial",
        tag: "Clásico",
        category: "combos",
        sizes: {
            personal: 3000,
            grande: 4700
        },

        desc: "Sandwichazo Especial + papas naturales + bebida personal.",
        img: "assets/combos/especial.png",
    },
    {
        id: "combo-superespecial",
        title: "Combo Sandwichazo super especial",
        tag: "Más vendido",
        category: "combos",
        sizes: {
            personal: 3000,
            grande: 4700
        },

        desc: "Sandwichazo super especial + papas naturales + bebida personal.",
        img: "assets/combos/superespecial.png",
    },
    {
        id: "combo-pavo",
        title: "Combo Sandwichazo Pavo",
        tag: "Clásico",
        category: "combos",
        sizes: {
            personal: 3000,
            grande: 4700
        },

        desc: "Sandwichazo Pavo + papas naturales + bebida personal.",
        img: "assets/combos/pavo.png",
    },
    {
        id: "combo-ropavieja",
        title: "Combo Sandwichazo Ropa Vieja",
        tag: "Más vendido",
        category: "combos",
        sizes: {
            personal: 3000,
            grande: 4700
        },
        desc: "Sandwichazo Ropa Vieja + papas naturales + bebida personal.",
        img: "assets/combos/ropavieja.png",
    },
    {
        id: "combo-pollo",
        title: "Combo Sandwichazo Pollo",
        tag: "Clásico",
        category: "combos",
        sizes: {
            personal: 3000,
            grande: 4700
        },
        desc: "Sandwichazo Pollo + papas naturales + bebida personal.",
        img: "assets/combos/pollo.png",
    },
    {
        id: "combo-hawaiano",
        title: "Combo Sandwichazo Hawaiano",
        tag: "Clásico",
        category: "combos",
        sizes: {
            personal: 3000,
            grande: 4700
        },
        desc: "Sandwichazo Hawaiano + papas naturales + bebida personal.",
        img: "assets/combos/hawaiano.png",
    },
    {
        id: "combo-crunch",
        title: "Combo Sandwichazo Crunch",
        tag: "Clásico",
        category: "combos",
        sizes: {
            personal: 3000,
            grande: 4700
        },
        desc: "Sandwichazo Crunch + papas naturales + bebida personal.",
        img: "assets/combos/crunch.png",
    },

    // BEBIDAS (precio fijo)
    {
        id: "bebida-cocacola-500",
        title: "Bebida Coca-cola 500ml",
        tag: "Bebidas",
        category: "bebidas",
        price: 3000,
        desc: "Bebida coca-cola 500ml.",
        img: "assets/bebidas/cocacola500ml.png",
    },
    {
        id: "bebida-cocacola-15",
        title: "Bebida Coca-cola 1.5 lt",
        tag: "Bebidas",
        category: "bebidas",
        price: 3000,
        desc: "Bebida coca-cola 1.5 lt.",
        img: "assets/bebidas/bebidacocacola.png",
    },
];

/* HELPERS */
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

/* ✅ PRECIO SEGÚN TAMAÑO */
function precioPorSize(producto, size) {
    if (!producto) return 0;

    // Si tiene sizes (sándwich), usa eso
    if (producto.sizes && typeof producto.sizes === "object") {
        return Number(producto.sizes[size] ?? producto.sizes.personal ?? 0);
    }

    // Si no tiene sizes, usa price fijo
    return Number(producto.price ?? 0);
}

/* ✅ para mostrar en la UI “desde $X” */
function precioMinimo(producto) {
    if (!producto) return 0;
    if (producto.sizes) {
        const vals = Object.values(producto.sizes).map((n) => Number(n || 0));
        return vals.length ? Math.min(...vals) : 0;
    }
    return Number(producto.price ?? 0);
}

function tieneTamanos(producto) {
    return !!(producto?.sizes && typeof producto.sizes === "object");
}

/* STATE */
const carrito = new Map(); // key = `${id}__${size}`
let categoriaActual = "all";

/* DATOS PEDIDO */
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

/* TAMAÑOS */
function etiquetaTamano(size, producto) {
    // Para combos/bebidas (sin tamaños)
    if (producto && !tieneTamanos(producto)) return "Único";

    return size === "grande" ? "Grande (35 cm)" : "Personal (21 cm)";
}

function llaveItem(id, size) {
    return `${id}__${size}`;
}

/* TOTALES */
function subtotalCarrito() {
    let total = 0;
    for (const item of carrito.values()) {
        const producto = obtenerProducto(item.id);
        if (!producto) continue;
        total += precioPorSize(producto, item.size) * Number(item.qty || 0);
    }
    return total;
}

function costoDespacho() {
    return datosPedido.deliveryType === "delivery" ? CONFIG.DELIVERY_FEE : 0;
}

function totalCarrito() {
    return subtotalCarrito() + costoDespacho();
}

/* BADGE CONTEO */
function contarProductosEnCarrito() {
    let count = 0;
    for (const item of carrito.values()) count += Number(item.qty || 0);
    return count;
}

function updateCartBadge() {
    const badge = document.getElementById("cartCountBadge");
    if (!badge) return;

    const n = contarProductosEnCarrito();
    badge.textContent = String(n);
    badge.style.display = n > 0 ? "grid" : "none";
}

/* CATEGORÍAS */
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

    document.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.toggle("active", b.dataset.category === cat);
    });
}

function productosFiltrados() {
    if (categoriaActual === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === categoriaActual);
}

/* RENDER MENU */
function renderMenu() {
    const grid = seleccionar("#menuGrid");
    if (!grid) return;

    const lista = productosFiltrados();

    grid.innerHTML = lista
        .map(
            (p, i) => `
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
                <span class="fw-bold">
                  ${tieneTamanos(p) ? `Desde ${formatearCLP(precioMinimo(p))}` : formatearCLP(p.price)}
                </span>
                <button class="btn btn-warning btn-sm fw-semibold" data-add="${p.id}">
                  <i class="bi bi-cart-plus"></i> Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      `
        )
        .join("");

    grid.onclick = async (e) => {
        const btn = e.target.closest("[data-add]");
        if (!btn) return;

        const idProducto = btn.getAttribute("data-add");
        const producto = obtenerProducto(idProducto);
        if (!producto) return;

        // ✅ Si tiene tamaños -> pedir tamaño
        if (tieneTamanos(producto)) {
            const size = await pedirTamanoPorItem(idProducto);
            if (!size) return;
            addToCart(idProducto, size);
            return;
        }

        // ✅ Si NO tiene tamaños -> agrega “unico”
        addToCart(idProducto, "unico");
    };

    if (window.AOS && typeof AOS.refreshHard === "function") AOS.refreshHard();
}

/* MODAL TAMAÑO */
async function pedirTamanoPorItem(productId) {
    const producto = obtenerProducto(productId);
    if (!producto) return null;

    const pPersonal = precioPorSize(producto, "personal");
    const pGrande = precioPorSize(producto, "grande");

    const res = await Swal.fire({
        title: "Elige el tamaño",
        html: `
        <div class="text-start">
          <div class="fw-semibold mb-2">${escaparHTML(producto.title)}</div>
          <div class="d-flex flex-column gap-2">
            <label class="form-check">
              <input class="form-check-input" type="radio" name="sz" value="personal" checked>
              <span class="form-check-label">
                Personal (21 cm) • <strong>${formatearCLP(pPersonal)}</strong>
              </span>
            </label>
            <label class="form-check">
              <input class="form-check-input" type="radio" name="sz" value="grande">
              <span class="form-check-label">
                Grande (35 cm) • <strong>${formatearCLP(pGrande)}</strong>
              </span>
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

/* CARRITO */
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

    const producto = obtenerProducto(id);
    Swal.fire({
        icon: "success",
        title: "Agregado ✅",
        text: `${producto?.title ?? "Producto"} • ${etiquetaTamano(size, producto)} (${formatearCLP(
        precioPorSize(producto, size)
      )})`,
        timer: 950,
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

    updateCartBadge();

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

        const unit = precioPorSize(producto, item.size);
        const line = unit * Number(item.qty || 0);

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
              <div class="text-muted small">Tamaño: <strong>${etiquetaTamano(item.size, producto)}</strong></div>
              <div class="text-muted small">Unitario: <strong>${formatearCLP(unit)}</strong></div>
              <div class="text-muted small">Cantidad: ${item.qty}</div>
              <div class="small fw-bold">${formatearCLP(line)}</div>
            </div>
            <div class="d-flex flex-column gap-2">
              <button class="btn btn-outline-light btn-sm" data-plus="${key}" title="Agregar uno">
                <i class="bi bi-plus"></i>
              </button>
              <button class="btn btn-outline-secondary btn-sm" data-minus="${key}" title="Quitar uno">
                <i class="bi bi-dash"></i>
              </button>
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
            const it = carrito.get(k);
            if (!it) return;
            addToCart(it.id, it.size);
            return;
        }

        const minus = e.target.closest("[data-minus]");
        if (minus) removeOne(minus.getAttribute("data-minus"));
    };
}

/* FORM PEDIDO */
function htmlFormularioPedido() {
    return `
      <div class="text-start">
        <div class="mb-3">
          <label class="form-label fw-semibold">Tipo de entrega</label>
          <div class="d-flex flex-column gap-2">
            <label class="form-check">
              <input class="form-check-input" type="radio" name="deliveryType" value="retiro" ${
                datosPedido.deliveryType === "retiro" ? "checked" : ""
              }>
              <span class="form-check-label">Retiro en tienda</span>
            </label>
            <label class="form-check">
              <input class="form-check-input" type="radio" name="deliveryType" value="delivery" ${
                datosPedido.deliveryType === "delivery" ? "checked" : ""
              }>
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
          <textarea id="od_notes" class="form-control" rows="3" placeholder="Ej: sin tomate / más salsa / etc.">${escaparHTML(
            datosPedido.notes
          )}</textarea>
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

/* WHATSAPP */
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

        const unit = precioPorSize(producto, item.size);
        lines.push(
            `- ${item.qty} x ${producto.title} • ${etiquetaTamano(item.size, producto)} (Unit: ${formatearCLP(unit)})`
        );
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

/* =========================
   OFFCANVAS HELPERS
========================= */
function getCartOffcanvasEl() {
    return document.getElementById("cartOffcanvas");
}

function closeCartOffcanvas() {
    return new Promise((resolve) => {
        const el = getCartOffcanvasEl();
        if (!el || typeof bootstrap === "undefined") return resolve();

        const inst = bootstrap.Offcanvas.getInstance(el);
        if (!inst) return resolve(); // ya está cerrado o no existe instancia

        const done = () => {
            el.removeEventListener("hidden.bs.offcanvas", done);
            resolve();
        };

        el.addEventListener("hidden.bs.offcanvas", done, {
            once: true
        });
        inst.hide();
    });
}

/* =========================
   BOTONES (CORREGIDO)
   ✅ cierra offcanvas antes de Swal
========================= */
function wireButtons() {
    const top = seleccionar("#btnWhatsappTop"); // si existe en tu HTML
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
                    text: "Agrega un producto primero.",
                });
                return;
            }

            // ✅ CLAVE: cerrar el offcanvas ANTES de abrir SweetAlert
            await closeCartOffcanvas();

            // pequeño delay para que Bootstrap libere el foco al 100%
            setTimeout(async () => {
                await openOrderForm();
            }, 80);
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
                    showConfirmButton: false,
                });
            }
        });
    }
}

/* MODAL IMAGEN */
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

/* FILTROS */
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
    document.querySelectorAll(".filter-btn[data-category]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const cat = btn.dataset.category || "all";
            applyCategory(cat, true);
        });
    });

    actualizarUIcategoria(categoriaActual);
}

/* EXPLOSIÓN */
function triggerFestinExplosion() {
    const burst = document.createElement("div");
    burst.className = "festin-burst";
    document.body.appendChild(burst);

    const colors = ["#ffc107", "#ff3d3d", "#25D366", "#4aa3ff", "#ffffff"];
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    const count = 54;
    for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        p.className = "festin-particle";
        p.style.background = colors[i % colors.length];

        const angle = (Math.PI * 2 * i) / count;
        const dist = 320 + Math.random() * 520;
        const x1 = Math.cos(angle) * dist;
        const y1 = Math.sin(angle) * dist;

        p.style.setProperty("--x0", `${cx + (Math.random() * 18 - 9)}px`);
        p.style.setProperty("--y0", `${cy + (Math.random() * 18 - 9)}px`);
        p.style.setProperty("--x1", `${cx + x1}px`);
        p.style.setProperty("--y1", `${cy + y1}px`);
        p.style.setProperty("--rot", `${(Math.random() * 720 - 360).toFixed(0)}deg`);

        const s = 12 + Math.random() * 18;
        p.style.width = `${s}px`;
        p.style.height = `${s}px`;
        p.style.borderRadius = `${3 + Math.random() * 10}px`;

        burst.appendChild(p);
    }

    setTimeout(() => burst.remove(), 1900);
}

/* FESTÍN */
function ensureSiteContentWrapper(festinEl) {
    let app = document.getElementById("siteContent");
    if (app) return app;

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

    const app = ensureSiteContentWrapper(festin);
    if (!app) return;

    document.body.classList.add("app-loading");
    app.style.visibility = "hidden";

    festin.style.display = "grid";
    festin.setAttribute("aria-hidden", "false");

    const videoMain = festin.querySelector(".festin-video");
    let closed = false;
    let autoTimer = null;

    const close = () => {
        if (closed) return;
        closed = true;

        if (autoTimer) clearTimeout(autoTimer);

        festin.classList.add("festin-hide");

        setTimeout(() => {
            triggerFestinExplosion();
            document.body.classList.add("festin-flash");
            setTimeout(() => document.body.classList.remove("festin-flash"), 700);
        }, 60);

        setTimeout(() => {
            festin.style.display = "none";
            festin.setAttribute("aria-hidden", "true");
            document.body.classList.remove("app-loading");
            app.style.visibility = "visible";
        }, 760);
    };

    festin.addEventListener("click", close, {
        once: true
    });
    autoTimer = setTimeout(close, 27000);

    if (videoMain) videoMain.addEventListener("ended", close, {
        once: true
    });
}

/* INIT */
document.addEventListener("DOMContentLoaded", () => {
    initFestin();

    renderMenu();
    renderCart();
    wireButtons();
    wireImageModal();
    wireCategoryFilters();

    updateCartBadge();
});