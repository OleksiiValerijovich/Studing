// window methods / OBJECTS / PROPERTIES
///////////CONSOLEM(КОНСОЛЬ)
/*
console.log(123);
*/

///////////alert (ВСПЛЫВАЮЩЕЕ ОКНО С ТЕКСТОМ)
/*
alert('Hello world');

*/



///////////// prompt (всплывающее окно для ввода текста)
/*
const input = prompt();
alert(input);
*/


////////// confirm (всплывающее окно с выбором да или нет и последующим отображением в консоли принятого решения)
/*
if(confirm('Are you sure?')){
    console.log('YES');
} else {
    console.log('NO');
}
*/



let val;

///////Outter height and width (отображает в консоли размер окна высоту и ширину)
/*
val = [window.outerHeight, window.outerWidth];

console.log(val);
*/

////// Skroll points (на сколько прогорнута страница У - вертикаль, х - горизонталь)
/*
val = window.scrollY;

console.log(val);
*/


//////location object (место нахождения обьекта)
/*
val = window.location;
console.log(val);
*/


/////////redirect ( переадресация на другую ссылку (гугл))
/*
window.location.href = 'http://google.com.ua';
*/





///////history object (история браузера переход на порядковый номер предыдущих ссылок)
/*
window.history.go(-1);
*/



//////// Navigator Object (отображает данные про пк, ос, браузер и др...)

/*
val = window.navigator;
*/

console.log(val);