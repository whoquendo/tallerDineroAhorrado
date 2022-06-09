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
    resultadoParrafo.innerText = "El dinero que ahorraría en "  +  aniosIngresadoValue + " Años es: "  + ahorroFinal;
    
};

  






