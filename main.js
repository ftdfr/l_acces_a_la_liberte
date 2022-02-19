let add1 = document.getElementById('add1');
let remove1 = document.getElementById('remove1');
let add2 = document.getElementById('add2');
let remove2 = document.getElementById('remove2');
let add3 = document.getElementById('add3');
let remove3 = document.getElementById('remove3');

let pts1 = document.getElementById('pts1');
let integer1 = 0;
let pts2 = document.getElementById('pts2');
let integer2 = 0;
let pts3 = document.getElementById('pts3');
let integer3 = 0;


add1.addEventListener('click', function(){
    integer1 += 1;
    pts1.innerHTML = integer1;
});

remove1.addEventListener('click', function(){
    integer1 -= 1;
    pts1.innerHTML = integer1;
});

add2.addEventListener('click', function(){
    integer2 += 1;
    pts2.innerHTML = integer2;
});

remove2.addEventListener('click', function(){
    integer2 -= 1;
    pts2.innerHTML = integer2;
});

add3.addEventListener('click', function(){
    integer3 += 1;
    pts3.innerHTML = integer3;
});

remove3.addEventListener('click', function(){
    integer3 -= 1;
    pts3.innerHTML = integer3;
});


var cases = document.getElementById('cases');
var cases1 = document.getElementById('choixcases');
var choix = document.getElementById('choix');
var choix1 = document.getElementById('choix1')

function points(){
    var x = cases.value;
    if (x == "option"){
        choix.innerHTML = "Sélectionnez une case";
    }else if(x == "case1"){
        choix.innerHTML = "Choix1....";
    }else if(x == "case2"){
        choix.innerHTML = "Choix2....";
    }else if(x == "case3"){
        choix.innerHTML = "Choix3....";
    }else if(x == "case4"){
        choix.innerHTML = "Choix4....";
    }else if(x == "case6"){
        choix.innerHTML = "Choix6....";
    }else if(x == "case7"){
        choix.innerHTML = "Choix7....";
    }else if(x == "case8"){
        choix.innerHTML = "Choix8....";
    }else if(x == "case9"){
        choix.innerHTML = "Choix9....";
    }else if(x == "case11"){
        choix.innerHTML = "Choix11....";
    }else if(x == "case12"){
        choix.innerHTML = "Choix12....";
    }else if(x == "case13"){
        choix.innerHTML = "Choix13....";
    }else if(x == "case14"){
        choix.innerHTML = "Choix14....";
    }else if(x == "case16"){
        choix.innerHTML = "Choix16....";
    }else if(x == "case17"){
        choix.innerHTML = "Choix17....";
    }else if(x == "case18"){
        choix.innerHTML = "Choix18....";
    }else if(x == "case19"){
        choix.innerHTML = "Choix19....";
    }
}

function showpoints(){
    var x1 = cases1.value;
    if (x1 == "option"){
        choix1.innerHTML = "Sélectionnez une case";
    }else if(x1 == "choix1-1"){
        choix1.innerHTML = "Points : 1-1";
    }else if(x1 == "choix1-2"){
        choix1.innerHTML = "Points : 1-2";
    }else if(x1 == "choix2-1"){
        choix1.innerHTML = "Points : 2-1";
    }else if(x1 == "choix2-2"){
        choix1.innerHTML = "Points : 2-2";
    }else if(x1 == "choix3-1"){
        choix1.innerHTML = "Points : 3-1";
    }else if(x1 == "choix3-2"){
        choix1.innerHTML = "Points : 3-2";
    }else if(x1 == "choix4-1"){
        choix1.innerHTML = "Points : 4-1";
    }else if(x1 == "choix4-2"){
        choix1.innerHTML = "Points : 4-2";
    }else if(x1 == "choix6-1"){
        choix1.innerHTML = "Points : 6-1";
    }else if(x1 == "choix6-2"){
        choix1.innerHTML = "Points : 6-2";
    }else if(x1 == "choix7-1"){
        choix1.innerHTML = "Points : 7-1";
    }else if(x1 == "choix7-2"){
        choix1.innerHTML = "Points : 7-2";
    }else if(x1 == "choix8-1"){
        choix1.innerHTML = "Points : 8-1";
    }else if(x1 == "choix8-2"){
        choix1.innerHTML = "Points : 8-2";
    }else if(x1 == "choix9-1"){
        choix1.innerHTML = "Points : 9-1";
    }else if(x1 == "choix9-2"){
        choix1.innerHTML = "Points : 9-2";
    }else if(x1 == "choix11-1"){
        choix1.innerHTML = "Points : 11-1";
    }else if(x1 == "choix11-2"){
        choix1.innerHTML = "Points : 11-2";
    }else if(x1 == "choix12-1"){
        choix1.innerHTML = "Points : 12-1";
    }else if(x1 == "choix12-2"){
        choix1.innerHTML = "Points : 12-2";
    }else if(x1 == "choix13-1"){
        choix1.innerHTML = "Points : 13-1";
    }else if(x1 == "choix13-2"){
        choix1.innerHTML = "Points : 13-2";
    }else if(x1 == "choix14-1"){
        choix1.innerHTML = "Points : 14-1";
    }else if(x1 == "choix14-2"){
        choix1.innerHTML = "Points : 14-2";
    }else if(x1 == "choix16-1"){
        choix1.innerHTML = "Points : 16-1";
    }else if(x1 == "choix16-2"){
        choix1.innerHTML = "Points : 16-2";
    }else if(x1 == "choix17-1"){
        choix1.innerHTML = "Points : 17-1";
    }else if(x1 == "choix17-2"){
        choix1.innerHTML = "Points : 17-2";
    }else if(x1 == "choix18-1"){
        choix1.innerHTML = "Points : 18-1";
    }else if(x1 == "choix18-2"){
        choix1.innerHTML = "Points : 18-2";
    }else if(x1 == "choix19-1"){
        choix1.innerHTML = "Points : 19-1";
    }else if(x1 == "choix19-2"){
        choix1.innerHTML = "Points : 19-2";
    }
}