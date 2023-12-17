const form = document.querySelectorAll('#form')
const campos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')

function setError(index, errorMessage) {
    campos[index].style.border = '2px solid #E63636'
    spans[index].style.display = 'block'
    spans[index].innerHTML = errorMessage
}

function removeError(index) {
    campos[index].style.border = ''
    spans[index].style.display = 'none'
}

function nomeValidate() {

    let indexField = 0
    let errorMessage = 'O nome deve ter no mínimo 3 caracteres.'

    console.log(campos[indexField].value)

    if (campos[indexField].value.length < 3) {
        setError(indexField, errorMessage)
        return false
    } else {
        removeError(indexField)
        return true
    }
}

function idadeValidate() {
    
    let indexField = 1
    let errorMessage = 'Idade inválida.'

    if (campos[indexField].value.length == 0 || parseInt(campos[indexField].value) < 1 || parseInt(campos[indexField].value) > 150) {
        setError(indexField, errorMessage)
        return false
    } else {
        removeError(indexField)
        return true
    }
}

function formIsValid() {
    const validationFormFunctions = [nomeValidate, idadeValidate]
    return validationFormFunctions.reduce((acumulador, funcao) => acumulador && funcao(), true);
}

campoNome.addEventListener("input", nomeValidate);
campoIdade.addEventListener("input", idadeValidate);