let add1 = document.getElementById('add1');
let add2 = document.getElementById('add2');
let add3 = document.getElementById('add3');
let add4 = document.getElementById('add4');
let add5 = document.getElementById('add5');
let add6 = document.getElementById('add6');
let dradd1 = document.getElementById('dradd1');
let dradd2 = document.getElementById('dradd2');
let dradd3 = document.getElementById('dradd3');
let dradd4 = document.getElementById('dradd4');
let dradd5 = document.getElementById('dradd5');
let dradd6 = document.getElementById('dradd6');
let remove1 = document.getElementById('remove1');
let remove2 = document.getElementById('remove2');
let remove3 = document.getElementById('remove3');
let remove4 = document.getElementById('remove4');
let remove5 = document.getElementById('remove5');
let remove6 = document.getElementById('remove6');
let drremove1 = document.getElementById('drremove1');
let drremove2 = document.getElementById('drremove2');
let drremove3 = document.getElementById('drremove3');
let drremove4 = document.getElementById('drremove4');
let drremove5 = document.getElementById('drremove5');
let drremove6 = document.getElementById('drremove6');
let pts1 = document.getElementById('pts1');
let pts2 = document.getElementById('pts2');
let pts3 = document.getElementById('pts3');
let pts4 = document.getElementById('pts4');
let pts5 = document.getElementById('pts5');
let pts6 = document.getElementById('pts6');
let dr1 = document.getElementById('dr1');
let dr2 = document.getElementById('dr2');
let dr3 = document.getElementById('dr3');
let dr4 = document.getElementById('dr4');
let dr5 = document.getElementById('dr5');
let dr6 = document.getElementById('dr6');
let integer1 = 0;
let integer2 = 0;
let integer3 = 0;
let integer4 = 0;
let integer5 = 0;
let integer6 = 0;
let drinteger1 = 0;
let drinteger2 = 0;
let drinteger3 = 0;
let drinteger4 = 0;
let drinteger5 = 0;
let drinteger6 = 0;

add1.addEventListener('click', function(){
    integer1 += 50;
    pts1.innerHTML = "Points : "+ integer1;
});

add2.addEventListener('click', function(){
    integer2 += 50;
    pts2.innerHTML = "Points : "+ integer2;
});

add3.addEventListener('click', function(){
    integer3 += 50;
    pts3.innerHTML = "Points : "+ integer3;
});

add4.addEventListener('click', function(){
    integer4 += 50;
    pts4.innerHTML = "Points : "+ integer4;
});

add5.addEventListener('click', function(){
    integer5 += 50;
    pts5.innerHTML = "Points : "+ integer5;
});

add6.addEventListener('click', function(){
    integer6 += 50;
    pts6.innerHTML = "Points : "+ integer6;
});

dradd1.addEventListener('click', function(){
    drinteger1 += 50;
    dr1.innerHTML = "Dollars : "+ drinteger1;
});

dradd2.addEventListener('click', function(){
    drinteger2 += 50;
    dr2.innerHTML = "Dollars : "+ drinteger2;
});

dradd3.addEventListener('click', function(){
    drinteger3 += 50;
    dr3.innerHTML = "Dollars : "+ drinteger3;
});

dradd4.addEventListener('click', function(){
    drinteger4 += 50;
    dr4.innerHTML = "Dollars : "+ drinteger4;
});

dradd5.addEventListener('click', function(){
    drinteger5 += 50;
    dr5.innerHTML = "Dollars : "+ drinteger5;
});

dradd6.addEventListener('click', function(){
    drinteger6 += 50;
    dr6.innerHTML = "Dollars : "+ drinteger6;
});

remove1.addEventListener('click', function(){
    integer1 -= 50;
    pts1.innerHTML = "Points : "+ integer1;
});

remove2.addEventListener('click', function(){
    integer2 -= 50;
    pts2.innerHTML = "Points : "+ integer2;
});

remove3.addEventListener('click', function(){
    integer3 -= 50;
    pts3.innerHTML = "Points : "+ integer3;
});

remove4.addEventListener('click', function(){
    integer4 -= 50;
    pts4.innerHTML = "Points : "+ integer4;
});

remove5.addEventListener('click', function(){
    integer5 -= 50;
    pts5.innerHTML = "Points : "+ integer5;
});

remove6.addEventListener('click', function(){
    integer6 -= 50;
    pts6.innerHTML = "Points : "+ integer6;
});

drremove1.addEventListener('click', function(){
    drinteger1 -= 50;
    dr1.innerHTML = "Dollars : "+ drinteger1;
});

drremove2.addEventListener('click', function(){
    drinteger2 -= 50;
    dr2.innerHTML = "Dollars : "+ drinteger2;
});

drremove3.addEventListener('click', function(){
    drinteger3 -= 50;
    dr3.innerHTML = "Dollars : "+ drinteger3;
});

drremove4.addEventListener('click', function(){
    drinteger4 -= 50;
    dr4.innerHTML = "Dollars : "+ drinteger4;
});

drremove5.addEventListener('click', function(){
    drinteger5 -= 50;
    dr5.innerHTML = "Dollars : "+ drinteger5;
});

drremove6.addEventListener('click', function(){
    drinteger6 -= 50;
    dr6.innerHTML = "Dollars : "+ drinteger6;
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