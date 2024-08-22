document.addEventListener('DOMContentLoaded', function() {
    const botaoCriptografar = document.getElementById('botaoCriptografar');
    const botaoDescriptografar = document.getElementById('botaoDescriptografar');
    const botaoCopiar = document.getElementById('botaoCopiar');
    const textoEntrada = document.getElementById('textoEntrada');
    const textoSaida = document.getElementById('textoSaida');

    const deslocamento = 3;
    
    function criptografarTexto(texto) {
        return texto.split('').map(c => {
            if (c >= 'a' && c <= 'z') {
                return String.fromCharCode(((c.charCodeAt(0) - 97 + deslocamento) % 26) + 97);
            }
            return c;
        }).join('');
    }
    
    function descriptografarTexto(texto) {
        return texto.split('').map(c => {
            if (c >= 'a' && c <= 'z') {
                return String.fromCharCode(((c.charCodeAt(0) - 97 - deslocamento + 26) % 26) + 97);
            }
            return c;
        }).join('');
    }

    botaoCriptografar.addEventListener('click', function() {
        const texto = textoEntrada.value.toLowerCase();
        if (/[^a-z\s]/.test(texto)) {
            alert('O texto não pode conter caracteres especiais ou letras maiúsculas.');
            textoEntrada.style.border = '2px solid red';
            return;
        }
        textoEntrada.style.border = ''; // Remove a borda vermelha se estiver tudo certo
        textoSaida.value = criptografarTexto(texto);
    });

    botaoDescriptografar.addEventListener('click', function() {
        const texto = textoEntrada.value.toLowerCase();
        if (/[^a-z\s]/.test(texto)) {
            alert('O texto não pode conter caracteres especiais ou letras maiúsculas.');
            textoEntrada.style.border = '2px solid red';
            return;
        }
        textoEntrada.style.border = ''; // Remove a borda vermelha se estiver tudo certo
        textoSaida.value = descriptografarTexto(texto);
    });

    botaoCopiar.addEventListener('click', async function() {
        try {
            await navigator.clipboard.writeText(textoSaida.value);
            alert('Texto copiado para a área de transferência!');
        } catch (err) {
            alert('Falha ao copiar o texto: ' + err);
        }
    });
});
