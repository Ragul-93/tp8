function cal(){
    var a = document.getElementById("p1").value;
    var b =document.getElementById("q1").value;
    var c = Number(a)*Number(b);

    r1.value = c;

    var d = document.getElementById("p2").value;
    var e = document.getElementById("q2").value;
    var f = Number(d)*Number(e);

    r2.value = f;

    var g = document.getElementById("p3").value;
    var h = document.getElementById("q3").value;
    var i = Number(g)*Number(h)

    r3.value = i;

    var j = Number(c)+Number(f)+Number(i);

    r4.value = j;
}

function rein() {
    p1.value = "";
    q1.value = "";
    r1.value = "";
    a2.value = "";
    p2.value = "";
    q2.value = "";
    r2.value = "";
    a1.value = "";
    p3.value = "";
    q3.value = "";
    r3.value = "";
    a3.value = "";
    r4.value = "";
}