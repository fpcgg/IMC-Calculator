function localScope() {
    const inputPeso = document.querySelector("#peso")
    const inputAltura = document.querySelector("#altura")

    const form = document.querySelector("#formulario")

    form.addEventListener("submit", function evitarPadrao(event) {
        event.preventDefault()

        classificarPessoa(calcularImc())
    })

    function calcularImc() {
      const peso = Number(inputPeso.value);
      const altura = Number(inputAltura.value);

      let imc = peso / altura**2
      return imc
    }

    function classificarPessoa(imc) {
        const resultado = document.querySelector(".calc-result")

        if (imc < 18.5) {
            resultado.innerHTML = `<p>Você está abaixo do peso!</p>`
            resultado.style.background = "rgb(255, 153, 102)";
        } else if (imc <= 24.9) {
            resultado.innerHTML = `<p>Você está com o peso normal!</p>`
            resultado.style.background = "rgb(51, 204, 255)";
        } else if (imc <= 29.9) {
            resultado.innerHTML = `<p>Você está acima do peso!</p>`
            resultado.style.background = "rgb(255, 128, 128)";
        } else if (imc <= 34.9) {
            resultado.innerHTML = `<p>Você está com obesidade de grau 1</p>`
            resultado.style.background = "rgb(255, 77, 77)"
        } else if (imc <= 39.9) {
            resultado.innerHTML = `<p>Você está com obesidade de grau 2</p>`
            esultado.style.background = "rgb(255, 51, 51)";
        } else {
            resultado.innerHTML = `<p>Você está com obesidade de grau 3</p>`
            resultado.style.background = "rgb(255, 26, 26)";
        }
    }
    
}

localScope()