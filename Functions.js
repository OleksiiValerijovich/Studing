// function declaration

function greet(firstName = 'John', lastName = 'Doe'){
//    if (typeof firstName === 'underfined') {firstName = 'John'}
//    if (typeof lastName === 'underfined') {lastName = 'Doe'}
//    console.log('Hello');
    return 'Hello, ' + firstName + ' ' + lastName;
}

console.log(greet());



/////////////////////////Function EXPRESIONS:

const square = function(x = 3){
    return x*x;
};

console.log(square());


/////////////////////IMMIDIATLY INVOKABLE FUNKTION EXPRECIONS - IIFES
/*
(function(){
    console.log('IIFE Ran..');
})();
*/

(function(name){
    console.log('Hello '+ name);
})('Brad');


/////////////////////////PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add to do...');
    },
    edit: function(id){
        console.log('Edit to do.  $(id)');
    }
}

todo.delete = function(){
    console.log('delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();
