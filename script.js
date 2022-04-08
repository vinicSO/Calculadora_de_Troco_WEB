const inputs = document.querySelectorAll("input");

const valorTotal = document.querySelector("#valorTotal");
const valorRecebido = document.querySelector("#valorRecebido");
const troco = document.querySelector("#troco");

function calcularTroco() {
    if (valorTotal.value == "" || valorRecebido.value == "") {
        troco.value = "";
        return;
    }

    troco.value = valorRecebido.value-valorTotal.value;
}

inputs.forEach( function(i) {
    i.addEventListener("keyup", function() {
        let v = teste(i);

        calcularTroco()
    });
});

function teste(i) {
    return i.value;
}