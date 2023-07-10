function saludar(nombre) {
  console.log(`¡Hola, ${nombre}! Bienvenido/a a Omen Party.`);
}

const mostrarMensaje = mensaje => {
  console.log(mensaje);
};

alert("Bienvenido a Omen Party!");

let cantidadPersonas = parseInt(prompt("Cantidad de personas:"));
let i = 0;

while (i < cantidadPersonas) {
  let nombre = prompt("Nombre:");
  let edad;

  while (true) {
    edad = parseInt(prompt("Edad:"));

    if (isNaN(edad) || edad <= 0) {
      mostrarMensaje("Edad inválida. Por favor, ingresa un número válido.");
    } else {
      break;
    }
  }

  if (edad >= 18) {
    mostrarMensaje(`${nombre}, tienes ${edad} años, eres mayor de edad, puedes pasar.`);
    saludar(nombre);
  } else if (edad >= 14 && edad <= 17) {
    let acompañado = prompt("¿Estás acompañado de un adulto? (SI/NO):");
    if (acompañado.toUpperCase() === "SI") {
      mostrarMensaje(`${nombre}, tienes ${edad} años y estás acompañado, puedes pasar.`);
      saludar(nombre);
    } else {
      mostrarMensaje(`${nombre}, tienes ${edad} años y necesitas estar acompañado para poder pasar.`);
    }
  } else {
    mostrarMensaje(`${nombre}, tienes ${edad} años, eres menor de edad.`);
  }

  i++;
}
