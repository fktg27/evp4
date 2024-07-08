
    var k;
    var text = "<ul>";
    var fruta = ["Platano ", "Naranja ", "Manzana ", "Mango ","Fresa ","Uva ","Granadilla "];


    function ver() {
        for (k = 0; k < fruta.length; k++) {
            text += fruta[k]+"<br>";
        }
        text += "</ul>";
        document.getElementById("demo1").innerHTML = text;
    }
    function ordenar() {
        fruta.sort();
        document.getElementById("demo2").innerHTML = fruta;
    }
    function invertir() {
        fruta.reverse();
        document.getElementById("demo3").innerHTML = fruta;
    }
    function longitud() {
        var cantidad=fruta.length;
        document.getElementById("demo4").innerHTML =
        "La cantidad de elementos del arrays es: "+cantidad;
    }
    function insertar() {
        fruta.push("Fresa");
        document.getElementById("demo5").innerHTML = fruta;
    }
    function eliminar() {
        fruta.splice(0, 1);
        document.getElementById("demo6").innerHTML = fruta;
    }

