document.addEventListener("DOMContentLoaded", () => {
  const listaCarrito = document.getElementById("lista-carrito");
  const totalCarrito = document.getElementById("total");
  const botonFinalizarCompra = document.getElementById("finalizar-compra");
  const botonesAgregar = document.querySelectorAll(".agregar");

  let carrito = cargarCarritoDesdeLocalStorage();

  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarProducto);
  });

  botonFinalizarCompra.addEventListener("click", confirmarFinalizarCompra);

  listaCarrito.addEventListener("click", eliminarProducto);

  document.getElementById("cart-button").addEventListener("click", () => {
    const carrito = document.querySelector(".carrito");
    carrito.classList.toggle("hidden");
  });

  function agregarProducto(e) {
    const productoSeleccionado = e.target.closest(".producto");
    const nombre = productoSeleccionado.querySelector("p").textContent;
    const precio = parseFloat(productoSeleccionado.querySelector(".precio").textContent.slice(1));

    const producto = carrito.find((item) => item.nombre === nombre);

    if (producto) {
      producto.cantidad++;
    } else {
      carrito.push({
        nombre,
        precio,
        cantidad: 1
      });
    }

    guardarCarritoEnLocalStorage();
    actualizarCarrito();
  }

  function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;
    let itemCount = 0;

    carrito.forEach((producto, index) => {
      const { nombre, precio, cantidad } = producto;
      total += precio * cantidad;
      itemCount += cantidad;

      const itemCarrito = document.createElement("li");
      itemCarrito.innerHTML = `
        ${nombre} - Cantidad: ${cantidad} - $${(precio * cantidad).toFixed(2)}
        <button class="eliminar">
          <img src="img/trash.png" alt="Eliminar">
        </button>`;
      listaCarrito.appendChild(itemCarrito);
    });

    totalCarrito.textContent = total.toFixed(2);
    document.getElementById("item-count").textContent = itemCount;
  }

  function confirmarFinalizarCompra() {
    const confirmacion = confirm("¿Estás seguro de finalizar la compra?");
    if (confirmacion) {
      finalizarCompra();
      swal("¡Gracias por tu compra!", "OMEN PARTY - BEBIDAS!", "success");
    }
  }

  function finalizarCompra() {
    carrito = [];
    guardarCarritoEnLocalStorage();
    actualizarCarrito();
  }

  function eliminarProducto(e) {
    const botonEliminar = e.target.closest(".eliminar");
    if (botonEliminar) {
      const index = Array.prototype.indexOf.call(listaCarrito.children, botonEliminar.parentElement);
      carrito.splice(index, 1);
      guardarCarritoEnLocalStorage();
      actualizarCarrito();
    }
  }

  function guardarCarritoEnLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  }
});