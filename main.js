// Referencias a los elementos del DOM
const textoInput = document.getElementById('mensaje');
const btnEncriptar = document.getElementById('encriptar');
const btnDesencriptar = document.getElementById('desencriptar');
const btnCopiar = document.getElementById("copiar");

const resultadoMensajeDiv = document.getElementById('mensaje-resultado');
const conResultadoDiv = document.getElementById('con-resultado');
const sinResultadoDiv = document.getElementById('sin-resultado');

// Evento clic en los botones
btnEncriptar.addEventListener('click', procesarTexto);
btnDesencriptar.addEventListener('click', procesarTexto);

// Evento click al botón de Copiar
btnCopiar.addEventListener('click', () => {
  let mensajeCopiar = document.getElementById('mensaje-resultado').textContent

  //API Clipboard
  navigator.clipboard.writeText(mensajeCopiar).then(function() {
    console.log("Contenido copiado al portapapeles: " + mensajeCopiar);
  }, function() {
    console.error("Error al copiar el contenido al portapapeles.");
  });
});

//Funcion para procesar el mensaje del input Textarea
function procesarTexto(event) {
    event.preventDefault();
    const texto = textoInput.value;
  
    let resultado = '';
  
    if (event.target.id === 'encriptar') {
      resultado = encriptarTexto(texto);
    } else if (event.target.id === 'desencriptar') {
      resultado = desencriptarTexto(texto);
    }

    conResultadoDiv.style.display = "block";
    sinResultadoDiv.style.display = "none";

    resultadoMensajeDiv.textContent = resultado
  }

// Función para encriptar el texto
function encriptarTexto(texto) {
  let resultado = '';

  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];

    switch (letra) {
      case 'e':
        resultado += 'enter';
        break;
      case 'i':
        resultado += 'imes';
        break;
      case 'a':
        resultado += 'ai';
        break;
      case 'o':
        resultado += 'ober';
        break;
      case 'u':
        resultado += 'ufat';
        break;
      default:
        resultado += letra;
        break;
    }
  }

  return resultado;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    let resultado = '';
    let i = 0;
  
    while (i < texto.length) {
      if (texto[i] === 'e' && texto[i + 1] === 'n' && texto[i + 2] === 't' && texto[i + 3] === 'e' && texto[i + 4] === 'r') {
        resultado += 'e';
        i += 5;
      } else if (texto[i] === 'i' && texto[i + 1] === 'm' && texto[i + 2] === 'e' && texto[i + 3] === 's') {
        resultado += 'i';
        i += 4;
      } else if (texto[i] === 'a' && texto[i + 1] === 'i') {
        resultado += 'a';
        i += 2;
      } else if (texto[i] === 'o' && texto[i + 1] === 'b' && texto[i + 2] === 'e' && texto[i + 3] === 'r') {
        resultado += 'o';
        i += 4;
      } else if (texto[i] === 'u' && texto[i + 1] === 'f' && texto[i + 2] === 'a' && texto[i + 3] === 't') {
        resultado += 'u';
        i += 4;
      } else {
        resultado += texto[i];
        i++;
      }
    }
  
    return resultado;
  }