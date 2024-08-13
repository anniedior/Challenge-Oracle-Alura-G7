function encriptar() {
    var inputText = document.getElementById('inputText').value;
    var outputText = inputText.replace(/e/g, 'enter')                              
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat')
                              //.replace(/A/g, 'AI')
                              //.replace(/E/g, 'ENTER')
                              //.replace(/I/g, 'IMES')
                              //.replace(/O/g, 'OBER')
                              //.replace(/U/g, 'UFAT');
    document.getElementById('outputText').value = outputText;
    document.getElementById('inputText').value = '';
}

function desencriptar() {
    var inputText = document.getElementById('inputText').value;
    var outputText = inputText.replace(/ai/g, 'a')
                              .replace(/enter/g, 'e')
                              .replace(/imes/g, 'i')
                              .replace(/ober/g, 'o')
                              .replace(/ufat/g, 'u')
                              //.replace(/AI/g, 'A')
                              //.replace(/ENTER/g, 'E')
                              //.replace(/IMES/g, 'I')
                              //.replace(/OBER/g, 'O')
                              //.replace(/UFAT/g, 'U');
    document.getElementById('outputText').value = outputText;
    document.getElementById('inputText').value = '';
}

function copiar() {
    var outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles!');
    outputText.value = '';
}
