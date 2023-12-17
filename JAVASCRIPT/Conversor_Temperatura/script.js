function converterTemp() {
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const unidade = document.getElementById("unidade").value;
    let resultado = 0;

    if (unidade === "celsius") {
        resultado = (temperatura * 1.8) + 32;
        resultado = resultado.toFixed(2) + "°F";
    } else if (unidade === "fahrenheit") {
        resultado = (temperatura - 32) / 1.8;
        resultado = resultado.toFixed(2) + "°C";
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}