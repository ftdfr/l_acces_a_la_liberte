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

var cases = document.getElementById('cases');


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




function getSelectValue(selectId) {
	var selectElmt = document.getElementById(selectId);
	return selectElmt.options[selectElmt.selectedIndex].value;
}

var selectValue = getSelectValue('cases');

cases.addEventListener('click', function points (selectValue){
    if (selectValue == "case1"){
        alert('Choix 1 : ...');
    }
});