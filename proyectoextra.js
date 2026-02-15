// Precio base de la cotizacion
var precio_base = 2000

// Porcentajes de recargo por edad
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

// Otros porcentajes de recargo
var hijos_recargo = 0.2     // 20% por hijo
var propiedad_recargo = 0.35 // 35% por propiedad
var salario_recargo = 0.05   // 5% sobre el salario

var continuar = true

// Ciclo para solicitar cotizaciones hasta que el usuario ingrese "Salir"
while (continuar) {
  var nombre = prompt("Ingrese su nombre completo (o escriba 'Salir' para finalizar):")
  
  if (nombre.toUpperCase() === "SALIR") {
    alert("Cerrando el sistema de cotizacion. ¡Tenga un buen dia!")
    continuar = false
    break
  }

  var edad = prompt("¿Cuántos años tiene?")
  var edad_numero = parseInt(edad)

  // Validación de mayoría de edad
  if (edad_numero < 18) {
    alert("Error: El asegurado debe ser mayor de edad para cotizar.")
    continue 
  }

  var recargo_total = 0

  // 1. Recargo por edad del asegurado
  if (edad_numero >= 18 && edad_numero <= 24) {
    recargo_total += precio_base * edad_18
  } else if (edad_numero >= 25 && edad_numero <= 49) {
    recargo_total += precio_base * edad_25
  } else if (edad_numero >= 50) {
    recargo_total += precio_base * edad_50
  }

  // 2. Recargo por conyuge
  var casado = prompt("¿Esta casado actualmente? (SI/NO)")
  if (casado.toUpperCase() === "SI") {
    var edad_conyuge = parseInt(prompt("¿Que edad tiene su esposo/a?"))
    if (edad_conyuge >= 18 && edad_conyuge <= 24) {
      recargo_total += precio_base * edad_18
    } else if (edad_conyuge >= 25 && edad_conyuge <= 49) {
      recargo_total += precio_base * edad_25
    } else if (edad_conyuge >= 50) {
      recargo_total += precio_base * edad_50
    }
  }

  // 3. Recargo por hijos
  var hijos = prompt("¿Tiene hijos o hijas? (SI/NO)")
  if (hijos.toUpperCase() === "SI") {
    var cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene?"))
    recargo_total += (precio_base * hijos_recargo) * cantidad_hijos
  }

  // 4. Recargo por propiedades (Puntos extra)
  var propiedades = parseInt(prompt("¿Cuantas propiedades posee?"))
  recargo_total += (precio_base * propiedad_recargo) * propiedades

  // 5. Recargo por salario (Puntos extra)
  var salario = parseFloat(prompt("¿Cual es su salario mensual?"))
  recargo_total += (salario * salario_recargo)

  // Resultado Final
  var precio_final = precio_base + recargo_total
  alert("Cotización para: " + nombre + 
        "\nPrecio Base: Q." + precio_base +
        "\nRecargo Total: Q." + recargo_total + 
        "\nPrecio Final: Q." + precio_final)
}