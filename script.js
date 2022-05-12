const inputs = document.querySelectorAll("input");

const valorTotal = document.querySelector("#valorTotal");
const valorRecebido = document.querySelector("#valorRecebido");
const troco = document.querySelector("#troco");

function calcularTroco() {
    if (valorTotal.value == "" || valorRecebido.value == "") {
        troco.value = "";
        return;
    }

    //troco.value = valorRecebido.value-valorTotal.value;

    troco.value = enxutar(valorRecebido.value)/100-enxutar(valorTotal.value)/100;
    /*troco.value = enxutar(troco.value);

    $("#troco").mask('000.000,00', {reverse: true});

    console.log($('#troco').val().mask('000.000,00', {reverse: true}))

    //else troco.value = 

    $(troco).mask('000.000,00', {reverse: true});
    
    /*console.log(enxutar(valorRecebido.value)/100)
    console.log(enxutar(valorTotal.value)/100)
    console.log(troco.value)*/

    
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

    //console.log(r)

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