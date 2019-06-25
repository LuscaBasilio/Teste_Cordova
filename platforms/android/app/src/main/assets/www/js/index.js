function calcular() {
    event.preventDefault();

    var base = document.getElementById("base");
    var low = document.getElementById("low");
    var medium = document.getElementById("medium");
    var high = document.getElementById("high");

    var counter = document.getElementById("counter");
    var succ = document.getElementById("succ");
    var crit = document.getElementById("crit");

    counter.style.backgroundColor = 'transparent';
    succ.style.backgroundColor = 'transparent';
    crit.style.backgroundColor = 'transparent';

    var dados = document.getElementById("x").value;
    var reves = document.getElementById("y").value;

    var y = (reves * 10) * 0.6

    var resultado = dados - y;
    var baixo = dados * 0.3;
    var medio = dados * 0.5;
    var alto = dados * 0.65;

    var baixoSlice = baixo.toString();
    var medioSlice = medio.toString();
    var altoSlice = alto.toString();

    if (resultado <= baixo) {
        counter.style.color = 'red'
    }
    if (resultado >= medio && resultado < alto) {
        succ.style.color = 'red'
    }
    if (resultado >= alto) {
        crit.style.color = 'red'
    }
    
    base.innerHTML = resultado;
    low.innerHTML = baixoSlice.slice(0, 2);
    medium.innerHTML = medioSlice.slice(0, 2);
    high.innerHTML = altoSlice.slice(0, 2);
}