
let intervalo;
const tempoContainer = document.getElementById('tempo-container');
const contenidoInicial = tempoContainer.innerHTML;

function temporizador() {
    const tiempoInicial = document.getElementById('tiempo');
    const tiempo = parseInt(tiempoInicial.value) + 1;

    let segundos = tiempo;

    //https://developer.mozilla.org/en-US/docs/Web/API/setInterval
    intervalo = setInterval(function () {
        segundos--;
        document.querySelector('#timer').textContent = segundos;

        if (segundos === 0) {
            clearInterval(intervalo);
            alert('¡Tiempo finalizado!');
            document.getElementById('tempo-container').innerHTML = contenidoInicial;
        }
    }, 1000);
    
}