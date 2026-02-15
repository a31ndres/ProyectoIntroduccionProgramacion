//Variables utiles 
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%

//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuántos años tiene? Ingrese solamente números")

// 1. Validar que el asegurado sea mayor de edad
var edad_numero = parseInt(edad)

if (edad_numero < 18) {
  alert("Error: El asegurado debe ser mayor de edad para realizar la cotización.")
} else {
  // Datos del cónyuge 
  var casado = prompt("¿Está casado actualmente? (SI/NO)")
  var edad_conyuge_numero = 0
  
  if ("SI" == casado.toUpperCase()) {
    var edad_conyuge = prompt("¿Qué edad tiene su esposo/a?")
    edad_conyuge_numero = parseInt(edad_conyuge)
  }

  // Datos de los hijos
  var hijos = prompt("¿Tiene hijos o hijas? (SI/NO)")
  var cantidad_hijos_numero = 0
  
  if ("SI" == hijos.toUpperCase()) {
    var cantidad_hijos = prompt("¿Cuántos hijos tiene?")
    cantidad_hijos_numero = parseInt(cantidad_hijos) 

  // --- 3. Recargos por edad del ASEGURADO --- 
  if (edad_numero >= 18 && edad_numero <= 24) {
    recargo = precio_base * edad_18
    recargo_total = recargo_total + recargo
  } else if (edad_numero >= 25 && edad_numero <= 49) {
    recargo = precio_base * edad_25
    recargo_total = recargo_total + recargo
  } else if (edad_numero >= 50) {
    recargo = precio_base * edad_50
    recargo_total = recargo_total + recargo
  }

  // --- 3. Recargos por edad del CÓNYUGE --- 
  if ("SI" == casado.toUpperCase()) {
    if (edad_conyuge_numero >= 18 && edad_conyuge_numero <= 24) {
      recargo = precio_base * casado_18
      recargo_total = recargo_total + recargo
    } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero <= 49) {
      recargo = precio_base * casado_25
      recargo_total = recargo_total + recargo
    } else if (edad_conyuge_numero >= 50) {
      recargo = precio_base * casado_50
      recargo_total = recargo_total + recargo
    }
  }

  // --- 4. Recargo por la cantidad de HIJOS 
  if ("SI" == hijos.toUpperCase()) {
    recargo = (precio_base * hijos_recargo) * cantidad_hijos_numero
    recargo_total = recargo_total + recargo
  }

  // Cálculo final
  precio_final = precio_base + recargo_total

  // Resultado
  alert("Para el asegurado " + nombre)
  alert("El recargo total será de: Q." + recargo_total)
  alert("El precio final será de: Q." + precio_final)
}