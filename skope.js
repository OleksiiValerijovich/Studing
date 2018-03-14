///////////Global skope (значеннні змінних стосується всього коду)

var a = 1;
var b = 2;
var c = 3;
/*


///////Local skope (значення стосуються лише функції.)
function test() {
    var a = 10;
    var b = 20;
    var c = 30;
    console.log('function Scope: ', a, b, c);
}

test();
*/




//////////// IF funktion
/*
if(true) {
     var a = 4;///// змінить показник змінної глобального значення
     let b = 5; /// не змінить показник змінної глоб значення бо відрізняється тип заданого значення
     const c = 6;//// -//-
     console.log('If Scope: ', a, b, c);
}
*/


for(let a = 0; a < 10; a++) {
    console.log('Loop: ${a}');
}



console.log('Global Scope: ', a, b, c);
