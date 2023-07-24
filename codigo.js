const carrito = [];
const preciosEntradas = {
  general: 3000,
  vip: 6000,
  'vip-bebida': 13000,
};

function agregarEntrada() {
  const tipoEntrada = prompt("Ingresa el tipo de entrada (general, vip o vip-bebida):");
  if (!tipoEntrada || !preciosEntradas[tipoEntrada]) {
    alert("Tipo de entrada inválido. Inténtalo nuevamente.");
    return;
  }

  console.log(`Tipo de entrada: ${tipoEntrada}`);
  carrito.push({ tipoEntrada, precio: preciosEntradas[tipoEntrada] });
  console.log('Carrito actual:', carrito);
  mostrarCarrito();
  calcularTotal();
}

function mostrarCarrito() {
  const carritoUl = document.getElementById('carrito');
  carritoUl.innerHTML = '';
  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    const precioTexto = item.precio === 0 ? 'Gratis' : `$${item.precio.toFixed(2)}`;
    li.textContent = `${item.tipoEntrada}: ${precioTexto}`;
    carritoUl.appendChild(li);
  });
}

function calcularTotal() {
  const totalDiv = document.getElementById('total');
  const total = carrito.reduce((sum, item) => sum + item.precio, 0);
  console.log(`Total de la compra: $${total.toFixed(2)}`);
  totalDiv.textContent = `Total: $${total.toFixed(2)}`;
}

const botonAgregar = document.getElementById('agregar');
botonAgregar.addEventListener('click', agregarEntrada);