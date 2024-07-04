let dolar = 5.56;

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () => {
    usdInput.value = formatcurrency(usdInput.value);
    convert("usd-to-brl");
});

brlInput.addEventListener("keyup", () => {
    brlInput.value = formatcurrency(brlInput.value);
    convert("brl-to-usd");
});

usdInput.addEventListener("blur", () => {
    usdInput.value = formatcurrency(usdInput.value);
});

brlInput.addEventListener("blur", () => {
    brlInput.value = formatcurrency(brlInput.value);
});

usdInput.value = "1000,00";
convert("usd-to-brl");

// Funções

function formatcurrency(value) {
    // Ajustar o valor
    let fixedValue = fixValue(value);
    // Utilizar a função de formatar
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    };
    // Retornar o valor formatado
    let formatter = new Intl.NumberFormat("pt-BR", options);
    return formatter.format(fixedValue).replace(".", ",");
}

function fixValue(value) {
    let fixedValue = value.replace(",", ".");
    let floatValue = parseFloat(fixedValue);
    if (isNaN(floatValue)) {
        floatValue = 0;
    }
    return floatValue;
}

function convert(type) {
    if (type == "usd-to-brl") {
        let usdValue = fixValue(usdInput.value);
        let brlValue = usdValue * dolar;
        brlInput.value = formatcurrency(brlValue.toFixed(2));
    }
    if (type == "brl-to-usd") {
        let brlValue = fixValue(brlInput.value);
        let usdValue = brlValue / dolar;
        usdInput.value = formatcurrency(usdValue.toFixed(2));
    }
}
