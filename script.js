const input = document.querySelector(".txtArea");
const resultado = document.querySelector(".txtArea2");
const copiarBtn = document.querySelector(".copiar");
copiarBtn.style.display = "none";

/*
function comprobarTxt(){
    let inputUsuario = document.querySelector(".txtArea").value;
    let validador = inputUsuario.match(/[\W 0-9 a-z]*$/i);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }

}
*/

function btnEncriptar()
{
    //if(!comprobarTxt()) {
        const textoEncriptado = encriptar(input.value)
        resultado.value = textoEncriptado
        resultado.style.backgroundImage = "none"
        input.value = "";
        copiarBtn.style.display = "block"
    //}
}

//guia de encriptacion
// `La letra "a" se convierte en "🧨🔥"`
// `La letra "e" se convierte en "🥩🦁"`
// `La letra "i" se convierte en "🎂🪑"`
// `La letra "o" se convierte en "💩🚽"`
// `La letra "u" se convierte en "🦎🐧🦉"`


function encriptar(stringEncriptada){
    let matrizCodigo = [["a", "🧨🔥"], ["e", "🥩🦁"], ["i", "🎂🪑"],["o", "💩🚽"], ["u", "🦎🐧🦉"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++)
    {
        if(stringEncriptada.includes(matrizCodigo[i][0]))
        {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(input.value)
    resultado.value = textoDesencriptado
    input.value = "";
    resultado.style.backgroundImage = "none"
    copiarBtn.style.display = "block"
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["a", "🧨🔥"], ["e", "🥩🦁"], ["i", "🎂🪑"], ["o", "💩🚽"], ["u", "🦎🐧🦉"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++)
    {
        if(stringDesencriptada.includes(matrizCodigo[i][1]))
        {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }
    }
    return stringDesencriptada
}


function copiar()
{
    navigator.clipboard.writeText(resultado.value)
        .then(() => 
        {
            alert('Texto copiado al portapapeles')
        })
}

/*
    navigator.clipboard.writeText(input.value);
    resultado.select();
    navigator.clipboard.writeText(resultado.value);
    resultado.value = "";
    alert("Texto Copiado")
    */
