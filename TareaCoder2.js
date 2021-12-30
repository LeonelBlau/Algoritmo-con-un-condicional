


let minutos = Number(prompt("¿Cuantos minutos te lleva hacer la tarea?"));

if (minutos >= 40) {
    alert("Es mucho tiempo")
} else if (minutos >= 30 ) {
    alert("Bastante tiempo, pero no tanto")
} else if (minutos >= 20 ) {
    alert("Tiempo optimo")
} else if (minutos >= 10 ) {
    alert("Exelente")
} else if (minutos >= 1 ) {
    alert("Sos un genio")
}
if (minutos == '') {
    alert("Vas a reprobar");
}