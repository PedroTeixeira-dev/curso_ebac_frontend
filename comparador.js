
const form = document.getElementById('form-comparador')

function comparador(A,B) {
let resultado
if (B > A) {
    resultado = false
}
else {
    resultado = true
}
return resultado
}

form.addEventListener('submit',function(e) {
    e.preventDefault()

    const A = parseInt(document.getElementById('numero-A').value)
    const B = parseInt(document.getElementById('numero-B').value)

    const mensagemErro = "B não é maior que A"
    const mensagemSucesso ="B é maior que A"


    const AeMaior = comparador(A,B)

    if(AeMaior) {
        const mensagem = document.getElementById('mensagem')
        mensagem.innerHTML = mensagemErro
        mensagem.style.display = "block"

    }
    else {
        const mensagem = document.getElementById('mensagem')
        mensagem.innerHTML = mensagemSucesso
        mensagem.style.display = "block"
    }
}
) 

