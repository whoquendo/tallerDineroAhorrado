//Helper, funcion para calcular el 20% que estaría ahorrando mensualmente

function calcularPorcentajeAhorro (salario){

    const dineroAhorrado = (salario * porcentajeAhorro) / 100;
    return dineroAhorrado;
};

// Helper, función para calcular el ahorro en el total de los años.
function calcularAhorro (dineroAhorrado,aniosAhorro){

    const ahorroFinal = (dineroAhorrado * 12) * aniosAhorro;
    return ahorroFinal;

};


//Helper, función para convertir euros a pesos.
function calcularPesosEnEuros(eurosAConvertir){
    let constEuro = 4081.28;
    const euros = (eurosAConvertir * constEuro);
    return euros;
    console.log(euros);
    
};

//Helper, función para ventana modal de resultado de consultas

function abrirVentanaModal (){
    // Get the modal
var modal = document.getElementById("myModal");

// When the user clicks on the button, open the modal

modal.style.display = "block";

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
};

};


//porcentaje de ahorro
let porcentajeAhorro = 20;


// Funcion que se inicia cuando el usuario da click en el boton calcular
function calculoDeAhorro(){
    const salarioIngresado = document.getElementById("inputSalario");
    const salarioIngresadoValue = salarioIngresado.value;

    const aniosIngresado = document.getElementById("inputAnios");
    const aniosIngresadoValue = aniosIngresado.value;

    const ahorroMensual = calcularPorcentajeAhorro (salarioIngresadoValue);
    const ahorroFinal = calcularAhorro (ahorroMensual,aniosIngresadoValue);

    const resultadoParrafo = document.getElementById("parrafoResultadoCalculoAhorro");
    resultadoParrafo.innerText = "El dinero que ahorraría en "  +  aniosIngresadoValue + " Años es: "  + ahorroFinal + " EUROS (€)";
    
    abrirVentanaModal();
};

  
// calcularPesosEnEuros, Funcion que se inicia cuando el usuario da click en el boton calcular

function calcularAhorroEnPesos(){
    const salarioIngresado = document.getElementById("inputSalario2");
    const salarioIngresadoValue = salarioIngresado.value;

    const aniosIngresado = document.getElementById("inputAnios2");
    const aniosIngresadoValue = aniosIngresado.value;

    const ahorroMensual = calcularPorcentajeAhorro (salarioIngresadoValue);
    const ahorroFinal = calcularAhorro (ahorroMensual,aniosIngresadoValue);

    const ahorroFinalEnPesos = calcularPesosEnEuros(ahorroFinal);

    const resultadoParrafo = document.getElementById("parrafoResultadoCalculoAhorro");
    resultadoParrafo.innerText = "El dinero, en PESOS COLOMBIANOS, que ahorraría en "  +  aniosIngresadoValue + " Años es: $ "  + ahorroFinalEnPesos;

    abrirVentanaModal();
};


    

// calcular Anos en ahorro, Funcion que se inicia cuando el usuario da click en el boton function calcularAhorroEnPesosAños(){

function calcularAhorroEnPesosAños(){

    const ahorroEnEuros = document.getElementById("inputEuros");
    const ahorroEnEurosValue = ahorroEnEuros.value;
    const ahorroDeEurosAPesos = calcularPesosEnEuros(ahorroEnEurosValue);
    const ahorroEnPesosAnio = (ahorroDeEurosAPesos * 12);

    const ahorroEnPesos = document.getElementById("inputAhorro");
    const ahorroEnPesosValue = ahorroEnPesos.value;
    const aniosAhorrando = (ahorroEnPesosValue / ahorroEnPesosAnio);

    const resultadoParrafo = document.getElementById("parrafoResultadoCalculoAhorro");
    resultadoParrafo.innerText = "Los años que tardarías en ahorrar "  +  ahorroEnPesosValue + " Pesos Colombianos es: "  + aniosAhorrando + " Años";

    abrirVentanaModal();
};

// calcular el porcentaje de ahorro del salario que debo ahorrrar, Funcion que se inicia cuando el usuario da click en el boton calcularAhorroEnPorcentaje

function calcularAhorroEnPorcentaje(){

    const ahorroPesosAnual = document.getElementById("inputAhorroTotal");
    const ahorroPesosAnualValue = ahorroPesosAnual.value;
    
    const aniosAhorroMetaFinal = document.getElementById("inputAniosAhorroFinal");
    const aniosAhorroMetaFinalValue = aniosAhorroMetaFinal.value;

    const ahorroPesosFinalAnual = (ahorroPesosAnualValue / aniosAhorroMetaFinalValue);
    const ahorroPesosFinalMensual = (ahorroPesosFinalAnual / 12);

    const salarioEurosAPesos = document.getElementById("inputSalarioEuros");
    const salarioEurosAPesosValue = salarioEurosAPesos.value;
    const salarioEnPesosMensual = calcularPesosEnEuros(salarioEurosAPesosValue);

    const porcentajeAhorroMetaFinal = ((ahorroPesosFinalMensual * 100) / salarioEnPesosMensual);
    const resultadoParrafo = document.getElementById("parrafoResultadoCalculoAhorro");

    resultadoParrafo.innerText = "El porcentaje de tu salario "  +  salarioEurosAPesosValue + " Euros, que debes ahorrar para alcanzar la meta de "  + ahorroPesosAnualValue + " Pesos Colombianos es del: " + porcentajeAhorroMetaFinal + "%";

    abrirVentanaModal();

    };

    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}