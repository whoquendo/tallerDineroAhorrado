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
    let constEuro = 4346.27;
    const euros = (eurosAConvertir * constEuro);
    return euros;    
};

//Helper, función para convertir pesos a euros.
function calcularEurosenPesos(pesosAConvertir){
    let constEuro = 4346.27;
    constEuroFormateado = formatoResultado(constEuro);
    const euros = (pesosAConvertir / constEuro);
    return euros;    
};

//Helper función para dar formato a resultado de calculos con separador de miles.

function formatoResultado(resultado){
    const numeroFormateado  = new Intl.NumberFormat().format(resultado); 
    return numeroFormateado; 
}

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
    const ahorroFinalFormateado = formatoResultado(Math.round(ahorroFinal));

    const resultadoParrafo = document.getElementById("parrafoResultadoCalculoAhorro");
    resultadoParrafo.innerText = "El dinero que ahorraría en "  +  aniosIngresadoValue + " Años es: "  + ahorroFinalFormateado + " EUROS (€)";
    
    abrirVentanaModal();
};

  
// calcularPesosEnEuros, Funcion que se inicia cuando el usuario da click en el boton calcular

function calcularAhorroEnPesos(){
    const salarioIngresado = document.getElementById("inputSalario2");
    const salarioIngresadoValue = salarioIngresado.value;

    const aniosIngresado = document.getElementById("inputAnios2");
    const aniosIngresadoValue = aniosIngresado.value;

    const ahorroMensual = calcularPorcentajeAhorro (salarioIngresadoValue);
    const ahorroFinal =  calcularAhorro (ahorroMensual,aniosIngresadoValue);

    const ahorroFinalEnPesos = calcularPesosEnEuros(ahorroFinal);
    const ahorroFinalEnPesosFormateado = formatoResultado(Math.round(ahorroFinalEnPesos));

    const resultadoParrafo = document.getElementById("parrafoResultadoCalculoAhorro");
    resultadoParrafo.innerText = "El dinero, en PESOS COLOMBIANOS, que ahorraría en "  +  aniosIngresadoValue + " Años es: $ "  + ahorroFinalEnPesosFormateado;

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
    const ahorroEnPesosValueFormateado = formatoResultado(ahorroEnPesosValue);

    const aniosAhorrando = (ahorroEnPesosValue / ahorroEnPesosAnio);
    const aniosAhorrandoFormateado = aniosAhorrando.toFixed(2);


    const resultadoParrafo = document.getElementById("parrafoResultadoCalculoAhorro");
    resultadoParrafo.innerText = "Los años que tardarías en ahorrar "  +  ahorroEnPesosValueFormateado + " Pesos Colombianos es: "  + aniosAhorrandoFormateado + " Años";

    abrirVentanaModal();
};

// calcular el porcentaje de ahorro del salario que debo ahorrrar, Funcion que se inicia cuando el usuario da click en el boton calcularAhorroEnPorcentaje

function calcularAhorroEnPorcentaje(){

    const ahorroPesosAnual = document.getElementById("inputAhorroTotal");
    const ahorroPesosAnualValue = ahorroPesosAnual.value;
    const ahorroPesosAnualValueFormateado = formatoResultado(ahorroPesosAnualValue);

    
    const aniosAhorroMetaFinal = document.getElementById("inputAniosAhorroFinal");
    const aniosAhorroMetaFinalValue = aniosAhorroMetaFinal.value;

    const ahorroPesosFinalAnual = (ahorroPesosAnualValue / aniosAhorroMetaFinalValue);
    const ahorroPesosFinalMensual = (ahorroPesosFinalAnual / 12);

    const salarioEurosAPesos = document.getElementById("inputSalarioEuros");
    const salarioEurosAPesosValue = salarioEurosAPesos.value;
    const salarioEurosAPesosValueFormateado = formatoResultado(salarioEurosAPesosValue);
    const salarioEnPesosMensual = calcularPesosEnEuros(salarioEurosAPesosValue);

    const porcentajeAhorroMetaFinal = Math.round(((ahorroPesosFinalMensual * 100) / salarioEnPesosMensual));

    const porcentajeAhorroFinalEuros = formatoResultado((porcentajeAhorroMetaFinal / 100 ) * salarioEurosAPesosValue); 
    
        if (porcentajeAhorroMetaFinal > 100){
            
            const resultadoParrafo = document.getElementById("parrafoResultadoCalculoAhorro");

    resultadoParrafo.innerText = "Para alcanzar tu meta, es necesario que ahorres más dinero del que ganas con tu salario, " + porcentajeAhorroMetaFinal + "%, por la tanto tu meta no es alcanzable si conservas estos datos"         
        } else {
            const resultadoParrafo = document.getElementById("parrafoResultadoCalculoAhorro");

            resultadoParrafo.innerText = "El porcentaje de tu salario de "  +  salarioEurosAPesosValueFormateado + " Euros, que debes ahorrar para alcanzar la meta de "  + ahorroPesosAnualValueFormateado + " de Pesos Colombianos, es del: " + porcentajeAhorroMetaFinal + "%, debes ahorrar " + porcentajeAhorroFinalEuros + " Euros mensuales"
        }

    abrirVentanaModal();

    };


    //Calcular el salario minimo que debe ganar para alcanzar meta de ahorro en el tiempo

    function calcularSalarioMinimo() {
        const metaAhorro = document.getElementById("inputAhorroTotal2");
        const metaAhorroValue = metaAhorro.value;
        const metaAhorroValueFormateado = formatoResultado(metaAhorroValue);        

        const aniosMeta = document.getElementById("inputAniosAhorroFinal2");
        const aniosMetaValue = aniosMeta.value;

        const metaAhorroPorMes = ((metaAhorroValue / aniosMetaValue) / 12);
        
        const metaAhorroPorMesEuros = calcularEurosenPesos(metaAhorroPorMes);

        const gastosEuros = document.getElementById("inputGastosEuros");
        const gastosEurosValue = parseInt( gastosEuros.value);

        const ingresosMinimosMensuales = (gastosEurosValue + metaAhorroPorMesEuros);
        const ingresosMinimosMensualesDecimal = formatoResultado(Math.round(ingresosMinimosMensuales));

        const resultadoParrafo = document.getElementById("parrafoResultadoCalculoAhorro");
    resultadoParrafo.innerText = "Para alcanzar la meta de, "  +  metaAhorroValueFormateado + " Pesos Colombianos, es necesario que ganes Mínimo Mensualente: "  + ingresosMinimosMensualesDecimal + " Euros";

    abrirVentanaModal();

    };

    // Para el accordion
var btnAcc1 = document.querySelector('#accordionToggle1');
var formAcc1 = document.querySelector('#formToggle1');
var btnAcc2 = document.querySelector('#accordionToggle2');
var formAcc2 = document.querySelector('#formToggle2');
var btnAcc3 = document.querySelector('#accordionToggle3');
var formAcc3 = document.querySelector('#formToggle3');
var btnAcc4 = document.querySelector('#accordionToggle4');
var formAcc4 = document.querySelector('#formToggle4');
var btnAcc5 = document.querySelector('#accordionToggle5');
var formAcc5 = document.querySelector('#formToggle5');

btnAcc1.addEventListener('click', toggleAcc1);
btnAcc2.addEventListener('click', toggleAcc2);
btnAcc3.addEventListener('click', toggleAcc3);
btnAcc4.addEventListener('click', toggleAcc4);
btnAcc5.addEventListener('click', toggleAcc5);

function toggleAcc1 () {
    formAcc1.classList.toggle('innactive');
    formAcc2.classList.add('innactive');
    formAcc3.classList.add('innactive');
    formAcc4.classList.add('innactive');
    formAcc5.classList.add('innactive');
}

function toggleAcc2 () {
    formAcc1.classList.add('innactive');
    formAcc2.classList.toggle('innactive');
    formAcc3.classList.add('innactive');
    formAcc4.classList.add('innactive');
    formAcc5.classList.add('innactive');
}

function toggleAcc3 () {
    formAcc1.classList.add('innactive');
    formAcc2.classList.add('innactive');
    formAcc3.classList.toggle('innactive');
    formAcc4.classList.add('innactive');
    formAcc5.classList.add('innactive');
}

function toggleAcc4 () {
    formAcc1.classList.add('innactive');
    formAcc2.classList.add('innactive');
    formAcc3.classList.add('innactive');
    formAcc4.classList.toggle('innactive');
    formAcc5.classList.add('innactive');
}

function toggleAcc5 () {
    formAcc1.classList.add('innactive');
    formAcc2.classList.add('innactive');
    formAcc3.classList.add('innactive');
    formAcc4.classList.add('innactive');
    formAcc5.classList.toggle('innactive');
}


/* When the input field receives input, convert the value from Euros to Pesos colombianos */
function euroConverter(valNum) {
  document.getElementById("outputPesos").innerHTML = formatoResultado(valNum * 4346.27);
}