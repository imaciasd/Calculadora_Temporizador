const btnSuma = document.getElementById('btn-suma');


const btnResta = document.getElementById('btn-resta');

const btnMultiplicacion = document.getElementById('btn-multiplicacion');


const btnDivision = document.getElementById('btn-division');

const pResultado = document.getElementById('resultado');
const pNumeroUno = document.getElementById('pNumeroUno');
const pNumeroDos = document.getElementById('pNumeroDos');



btnSuma.addEventListener('click', async () => {
    const numeroUno = document.getElementById('primerNumero').value;
    const numeroDos = document.getElementById('segundoNumero').value;
    await setTimeout(() => {
        
        pNumeroUno.textContent = "Primer número: " + numeroUno;
        pNumeroDos.textContent = "Segundo número: " + numeroDos;
        pResultado.textContent = "Resultado: " + (Number(numeroUno) + Number(numeroDos));
    },500)
})

btnResta.addEventListener('click', async () => {
    const numeroUno = document.getElementById('primerNumero').value;
    const numeroDos = document.getElementById('segundoNumero').value;
    await setTimeout(() => {
        
        pNumeroUno.textContent = "Primer número: " + numeroUno;
        pNumeroDos.textContent = "Segundo número: " + numeroDos;
        pResultado.textContent = "Resultado: " + (Number(numeroUno) - Number(numeroDos));
    },500)
})

btnMultiplicacion.addEventListener('click', async () => {
    const numeroUno = document.getElementById('primerNumero').value;
    const numeroDos = document.getElementById('segundoNumero').value;
    await setTimeout(() => {
        
        pNumeroUno.textContent = "Primer número: " + numeroUno;
        pNumeroDos.textContent = "Segundo número: " + numeroDos;
        pResultado.textContent = "Resultado: " + Number(numeroUno) * Number(numeroDos);
    },500)
})

btnDivision.addEventListener('click', async () => {
    const numeroUno = document.getElementById('primerNumero').value;
    const numeroDos = document.getElementById('segundoNumero').value;
    await setTimeout(() => {
        
        pNumeroUno.textContent = "Primer número: " + numeroUno;
        pNumeroDos.textContent = "Segundo número: " + numeroDos;
        pResultado.textContent = "Resultado: " + Number(numeroUno) / Number(numeroDos);
    },500)
})