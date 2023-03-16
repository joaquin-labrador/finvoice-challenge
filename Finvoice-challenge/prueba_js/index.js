//! hallenge js-html finvoice

// 1. 1. Imprimir números impares mayores a 100 y menores a 150 EJM. 101,103,105,107, n...

const mostrarImpares100To150 = () => {
  if (document.getElementById("impares").innerHTML !== "") {
    document.getElementById("impares").innerHTML = "";
  }
  for (let i = 101; i < 150; i += 2) {
    document.getElementById("impares").innerHTML += i + "<br>";
  }
};

const limpiarImpares = () => {
  if (document.getElementById("impares").innerHTML !== "") {
    document.getElementById("impares").innerHTML = "";
  }
};

/**
 * 2. Crea una función que permita sumar, restar, multiplicar y dividir.
 * Los valores para calcular deben ser enviados mediante inputs que solo permitan números enteros,
 * el evento se iniciará a la pulsación de un botón llamado "calcular",
 * Imprimir resultados por pantalla.
 */

function calcular() {
  // Obtener los valores de los inputs
  const valor1 = parseInt(document.getElementById("valor1").value);
  const valor2 = parseInt(document.getElementById("valor2").value);

  if (isNaN(valor1) || isNaN(valor2)) {
    alert("Los valores deben ser números enteros");
    return;
  }

  // Realizar las operaciones matemáticas
  const suma = valor1 + valor2;
  const resta = valor1 - valor2;
  const multiplicacion = valor1 * valor2;
  let division = 0;

  if (valor2 === 0) {
    division = "No se puede dividir entre 0";
  } else {
    division = valor1 / valor2;
  }

  // Mostrar los resultados en la pantalla
  document.getElementById("resultados").innerHTML = `
          Suma: ${suma} <br>
          Resta: ${resta} <br>
          Multiplicación: ${multiplicacion} <br>
          División: ${division} <br>
        `;

  console.log(
    "suma: " + suma,
    "resta: " + resta,
    "multiplicacion: " + multiplicacion,
    "division: " + division
  );
}

//4. A partir del siguiente listado filtre los vehículos que tengan una capacidad mayor a 10 y sean de color azul.
let vehiculo = [
  { color: "rojo", marca: "bmw", capacidad: 11 },
  { color: "azul", marca: "fiat", capacidad: 2 },
  { color: "negro", marca: "hyundai", capacidad: 6 },
  { color: "amarillo", marca: "jeep", capacidad: 15 },
  { color: "azul", marca: "citroen", capacidad: 20 },
  { color: "azul", marca: "renault", capacidad: 12 },
  { color: "rojo", marca: "ford", capacidad: 4 },
  { color: "gris", marca: "toyota", capacidad: 8 },
];

const listarVehiculos = () => {
  const vehiculosFiltrados = vehiculo.filter((vehiculo) => {
    return vehiculo.capacidad > 10 && vehiculo.color === "azul";
  });

  document.getElementById("vehiculos").innerHTML = `
    
    <table>
        <thead>
            <tr>
                <th>Color</th>
                <th>Marca</th>
                <th>Capacidad</th>
            </tr>
        </thead>
        <tbody>
            ${vehiculosFiltrados
              .map(
                (vehiculo) => `
                <tr>
                    <td>${vehiculo.color}</td>
                    <td>${vehiculo.marca}</td>
                    <td>${vehiculo.capacidad}</td>
                </tr>
            `
              )
              .join("")}
        </tbody>


        </table> 

    `;
};

const limpiarVehiculos = () => {
  if (document.getElementById("vehiculos").innerHTML !== "") {
    document.getElementById("vehiculos").innerHTML = "";
  }
};
