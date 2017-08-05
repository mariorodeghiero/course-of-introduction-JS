var paciente = document.querySelector("#primeiro-paciente");


var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc")


var pesoEhValido = true;
var alturaEhValida = true;
if (peso <= 0 || peso > 450) {
    console.log("peso invalido")
    pesoEhValido = false;
    tdImc.textContent = "Peso invalido"
}

if (altura < 0 || altura > 3.00) {
    alert("Altura invalida")
    alturaEhValida = false;
    tdImc.textContent = "Altura invalida"
}

if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}




console.log('------------------------------------');
console.log(peso);
console.log(altura);
console.log(imc);
console.log('------------------------------------');