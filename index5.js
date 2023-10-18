//Function in javascripts
// syntax of writing the function:

function hello(){
    console.log("hello");
}

//syntax calling the function:
hello();
hello();
hello();
hello();
hello();
hello();
hello();

//function with arguments:
//values we pass to the function:

function printName(name){
    console.log(name);
}

//calling function and pass the values
printName("sujit");
// --------------------------------------
// 2 arguments pass in a function
function studentInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}

studentInfo("shardha",23);
studentInfo("sujit",23);
studentInfo("Rahul",23);

// funtion is having avrage of 3 numbers:

function Avrage(a,b,c){
    let avg=(a+b+c)/3;
    console.log(avg);
}

//calling function
Avrage(4,5,6);
//function print table

function table(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}

table(5);

//return keyword:
// return keyword is used return some value from the function.
function sum(a,b){
    console.log("hello");
    console.log("hello");
    console.log("hello");
    return a+b;
    console.log("hello2"); //you can see the function unable to work or operate the values
    

}
// after retun keyword function will not work/ or doing any operation
//calling the function 
// function is only returning the value and not loging the value because we did not log the value.
console.log(sum(2131,3213));

//question 2:

function isAdult(age){

    if(age >=18){
        return "is Adult";
    }else{
        return "is not Adult";
    }
}

console.log(isAdult(24));

// question we have to print sum of all digit till n:

function getSum(n){
    let sum=0;
    for(let i=1; i<=n ;i++){
        sum += i;
    }
    return sum;
}

console.log(getSum(10484));

// question: create the function that return concatination of all string of an array:

let strr=["hi","bye","hello","!"];

function concat(str){
    let Result;

    for(let i=0; i<strr.length;i++){
        Result += strr[i];
    }
    return Result;

}

console.log(concat());

// Scope of the variable :

let summm=65; // Global scope variable 

function calculateSum(a,b){
    let sum=a+b;  // function scope variable
    console.log(sum);
    return sum;
}

console.log(calculateSum(3,3));

//Block scope: 

for(let i=0; i<=5;i++){
    console.log(i); // block scope variable

}
// console.log(i); //you cannot access the block variable outside the block scope

// Lexical Function:

function outerfunction(){
    let a=67456;
    let b=8;

    function innerfunction(){
        console.log(a);
    }
    innerfunction();// innerfunction also called only in outerfunction scope
}
// calling out the outerfunction
outerfunction();

// question:
 let greet="hello";// global scope

 function chnageGreet(){
    let greet="namaste";
    console.log(greet);//functional scope

    function innergreet(){
        console.log(greet);// lexical scope
    }
 }

 console.log(greet);
 chnageGreet();

 // Function Expresion concepts:

let name="sujit";

let sum3= function(a,b){
    return a+b;
}

// calling this function expression concepts:
console.log(sum3(4, 5));

// Higher order function:
// The matter is how many times you want to call the 

let greett=function(){
    console.log("sujit");
}

function multiplesujit (func, count) { // higher order function
    for(let i=1; i<=count;i++){
        func();
    }
}

multiplesujit(greett,500);

/// higher order function return:
// Detect oddeven numbers

function oddEvenTest(request){
    let store=request; 

    if(store=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(store=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }else{
        console.log("Wrong Request");
    }
}

oddEvenTest("odd");

// Methods:: the function are store in a object called as methods.

const calculator={
    num: 55,

    add: function(a,b){
        return a+b;
    
    },
    sub: function(a,b){
        return a-b;
    
    },
    mul: function(a,b){
        return a*b;
    
    }
}

console.log(calculator.add(4,7));
console.log(calculator.sub(4,7));
console.log(calculator.mul(4,7));

// Questionn 1: Write a JavaScript function that returns array elements larger than a number.

function array(){

}