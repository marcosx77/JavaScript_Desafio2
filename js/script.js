const cotizaDolarVenta = 280;
const cotizaDolarCompra = 240;

//funcion compar-Vender moneda extranjera
const CompraVentaMonedaExtranjera = (cotiza, cantidad) => cantidad * cotiza;

//funcion venta-compra Moneda extranjera (ingresar Pesos)
const CompVtaMonedaExtranjera = (cotiza, cantidad) => cantidad / cotiza;

function OpcionesInicio() {
  let opcion = prompt(
    "SERVICIOS FINANCIEROS\n Seleccione la opcion:\n" +
      "1 - Compra Moneda Extranjera\n" +
      "2 - Venta Moneda Extranjera\n" +
      "3 - Prestamos Personales\n" +
      "4 - Salir"
  );
  return opcion;
}

/* let opcion = prompt(
  "SERVICIOS FINANCIEROS\n Seleccione la opcion:\n" +
    "1 - Compra Moneda Extranjera\n" +
    "2 - Venta Moneda Extranjera\n" +
    "3 - Prestamos Personales\n" +
    "4 - Salir"
); */

let opcion = OpcionesInicio();

while (opcion != "4") {
  switch (opcion) {
    case "1":
      CompraMoneda();
      break;

    case "2":
      VenderMoneda();
      break;
    case "3":
      prestamo();
      break;
    default:
      alert("Opción Incorrecta");
      break;
  }
  opcion = OpcionesInicio();
}

function CompraMoneda() {
  let cantidad = prompt(
    "Compra Moneda Extranjera\n" +
      "Cotización: " +
      cotizaDolarVenta +
      "\n" +
      "Ingrese Cantidad a Comprar:"
  );
  if (isNaN(cantidad) == false) {
    alert(
      "Necesita " +
        CompraVentaMonedaExtranjera(cotizaDolarVenta, cantidad) +
        " Pesos para adquirir " +
        cantidad +
        " Dolares."
    );
  } else {
    alert("Cantidad Ingresada incorrecta");
  }
}

function VenderMoneda() {
  let cantidad = prompt(
    "Venta Moneda Extranjera\n" +
      "Cotización: " +
      cotizaDolarCompra +
      "\n" +
      "Ingrese Cantidad a Vender:"
  );
  if (isNaN(cantidad) == false) {
    alert(
      "Recibirá " +
        CompraVentaMonedaExtranjera(cotizaDolarCompra, cantidad) +
        " Pesos por la venta de " +
        cantidad +
        " Dolares."
    );
  } else {
    alert("Cantidad Ingresada incorrecta");
  }
}

function prestamo() {
  let monto = prompt("Ingresá Monto del Prestamo: ");
  let plazo = prompt("Cantidad de Cuotas a Pagar: ");
  let interes = prompt("Interes: ");
  if (isNaN(monto) == false) {
    if (isNaN(plazo) == false) {
      if (isNaN(interes) == false) {
        alert(
          "El monto de la cuota mensual es de: " +
            CalculaCuotaPrestamo(monto, plazo, interes)
        );
      } else {
        alert("Interes Ingresado incorrecto");
      }
    } else {
      alert("Plazo Ingresado incorrecto");
    }
  } else {
    alert("Monto Ingresado incorrecto");
  }
}

function CalculaCuotaPrestamo(monto, plazo, interes) {
  let valor = 0;
  let Coeficiente = 0;
  let Coeficiente1 = 0;

  Coeficiente = 1 + interes / 100;
  Coeficiente1 = Coeficiente;

  for (let i = 1; i < plazo; i++) {
    Coeficiente1 = Coeficiente1 * Coeficiente;
  }

  Coeficiente1 = 1 / Coeficiente1;
  Coeficiente1 = 1 - Coeficiente1;
  valor = ((interes / 100) * monto) / Coeficiente1;
  return Intl.NumberFormat().format(valor);
}
