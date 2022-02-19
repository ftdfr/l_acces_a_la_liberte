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
var choix = document.getElementById('choix');

function points(selectValue){
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