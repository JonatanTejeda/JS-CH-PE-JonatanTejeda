const listaEntradas = document.querySelector("#listado-entradas");

fetch("./js/entradas.json")
  .then(response => response.json())
  .then(data => {
    mostrarEntradas(data);
  })
  .catch(error => console.error("Error:", error));

function mostrarEntradas(entradas) {
  entradas.forEach(entrada => {
    const li = document.createElement("li");
    li.innerText = entrada.nombre + " - $" + entrada.precio;
    listaEntradas.appendChild(li);
  });
}