const inputs = document.querySelectorAll("input");

const valorTotal = document.querySelector("#valorTotal");
const valorRecebido = document.querySelector("#valorRecebido");
const troco = document.querySelector("#troco");

function calcularTroco() {
    if (valorTotal.value == "" || valorRecebido.value == "") {
        troco.value = "";
        return;
    }

    let valor = enxutar(valorRecebido.value)/100-enxutar(valorTotal.value)/100;

    troco.value = valor;

    if (valor < 0) {
        $("#alertaValor").removeClass("visually-hidden");
    }

    else {
        $("#alertaValor").addClass("visually-hidden");
    }
}

function enxutar(i) {
    let number = i, r = "";
    let b = false;

    for (let index = 0; index < number.length; index++) {

        let letra = number[index];

        if(letra != '0' && letra != ',' && letra != '.') b = true;

        if(letra != ',' && letra != '.' && b) r += letra;   
    }

    return r;
}

function complementar(i) {
    let number = i, r = "";

    if (number.length < 2) {
        return "0,0"+i;
    } else if (number.length < 3) {
        return "0,"+i;
    }

    return number;
}

function removerZeros(i) {
    let number = i, r = "";
    let b = false;    

    for (let index = 0; index < number.length; index++) {

        let letra = number[index];

        if(letra != '0' && letra != ',' && letra != '.') b = true;

        if(b) r += letra;
    }

    if(r.length <= 2 && r.length != 0) return complementar(r);

    return r;
}

inputs.forEach( function(i) {
    i.addEventListener("keyup", function() {

        i.value = removerZeros(i.value);

        let v = i.value;

        calcularTroco();
    });
});