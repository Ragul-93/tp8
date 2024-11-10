function add() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);

    t3.value = c;
}

function sou() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) - Number(b);

    t3.value = c;
}

function div() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) / Number(b);

    t3.value = c;
}

function mul() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);

    t3.value = c;
}

function per(){
    var v3 = "";
    a = document.getElementById("t1");
    b = document.getElementById("t2");
    v3 = a;
    a = b;
    b = v3;

    t1.value = a;
    t2.value = b;
}

function par(){
    var v;
    v = Number(document.getElementById("t3").value)
    if (v%2==0)
        t4.value = ("pair")
    else
        t4.value = ("impair")
}