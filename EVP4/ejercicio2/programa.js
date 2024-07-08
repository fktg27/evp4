
var minMax,lista,mostrarbutton;

mostrar = document.getElementById('mostrar');
lista = document.getElementById('numeros-lista');
minMax = document.getElementById('min-max');

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

mostrar.addEventListener('click', () => {
    var numeros = [], min =1, max = 1000;
    

    lista.innerHTML = ''; 

    for (let i = 0; i < 20; i++) {
        var numero = generarNumeroAleatorio(min, max);

        numeros.push(numero);
        
        var li = document.createElement('li');
        li.textContent = `${i + 1} - ${numero}`;
        lista.appendChild(li);
    }

    var numeroMinimo = Math.min(...numeros);
    var numeroMaximo = Math.max(...numeros);
    minMax.textContent = `Mínimo: ${numeroMinimo}, Máximo: ${numeroMaximo}`;
});
