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

let array1=[3,4,5,6,8,9,2,10];

let num=5;

function getElement(array1,num){
    for(let i=0; i< array1.length; i++){
        if(array1[i]>num){
            console.log(array1[i]);
        }
    }
}

// calling the function:

console.log(getElement(array1,num));

// Question 2:

let string="abcdabcdefgggh";

let ans="abcdefgh";

function uniqueElement(string){
    let ans="";
    for(let i=0; i<string.length;i++){
        let currchar=string[i];
        if(ans.indexOf(currchar)==-1){
            ans+=currchar;
        }

    }
    return ans;
}

//calling function:
uniqueElement(string);
console.log(uniqueElement(string));

//question No:4

 let country=["Australia","Germany","United States of America"];


function longestName(country){
    let ansIdx=0;

    for( let i=0; i<country.length; i++){

        let ansLength= country[ansIdx].length;
        let currLength=country[i].length;

        if(currLength>ansLength){
            ansIdx=i;
        }
        
    }
    return country[ansIdx];
}


// callling function:
console.log(longestName(country));

//Question No 4:Write a JavaScript function to count the number of vowels in a String argument

let stringq="sujitargade";

function countvowel(stringq){
    let count=0;

    for(let i=0;i<stringq.length;i++){
        if(stringq.charAt(i)=="a"||
        stringq.charAt(i)=="e"||
        stringq.charAt(i)=="i"||
        stringq.charAt(i)=="o"||
        stringq.charAt(i)=="u"){

            count++;

        }
    }
    return count;

}

// calling the function:

console.log(countvowel(stringq));
//---------------------------------------------------------------------------------------------------------------------------------------------
// this keyword in javascript:

const student={
    name:"sujit Argade",
    age:24,
    Comapnay:"Infosys",
    eng:76,
    phy:89,
    chem:98,
    getavg(){
        let avg=(this.eng+this.phy+this.chem)/3;
        console.log(`${this.name} got avarage marks= ${avg}`)
    }
}

console.log(student.getavg());

// Try and Catch Statement:
console.log("hello");
console.log("hello");
try{
    console.log(q);
}catch(err){  // we also use the catch as an function which will throw an error also
    console.log("Caught an errror ... A is not defined");
    console.log(err);
}
console.log("hello");
console.log("hello");
console.log("hello");

// Arrow function:
// syntax of the arrow function:

const ok=(a,b)=>{
     console.log(a+b);
}
// calling the arrow function:

ok(4,6);



// Implicit arrow function:
// small change in syntax
const sujya=(a,d) =>(
    a*d
);

console.log(sujya(7,9));
///--------- 
// Set timeout:

console.log("Hi There!");

 setTimeout(() =>{
    console.log("Set TimeOut");
 },4000);
console.log("Welcome to");

// Set Interval:

console.log("Apna college");

let id = setInterval(() =>{
    console.log("set Interval");
 },2000);

 console.log(id);
 clearInterval(id);

 /// IMPORTANT topic :
 // this keywords behave with the arrow function and the normal function:


 const student1={
    name:"sujit argade",
    age :34,
    marks:89,
    class: "Full stack web Developemet",
    prop:this,
    getName: function (){
        console.log(this);
        return this.name;
    },
    getmarks:() =>{
        console.log(this);
        return this.marks;
    }
 }

 console.log(student1.getName());
 console.log(student1.getmarks()); // Here you will get undefined for the marks value because the reason is     

 // Question: Write an arrow function that return a square of the numbers:

 const square=(n) =>{
    return n*n;
 }
 // calling the arrow function:
 console.log(square(4));
 // Question 2 : Write a function that print "hello World" 5 times of interval of 2s each:

 let id1 = setInterval(() => {
    console.log("hello world");
    
 }, 2000);

 setTimeout(() => {
    clearInterval(id1);
    console.log("Clear Interval Ran");
 },10000);
//  --------------------------------------------
const tobject ={
    message:'Hello,World!',
    logMessage() {
        console.log(this.message);
    }
};

setTimeout(tobject.logMessage,1000);

// Question 1: write an function named array avrage that accepts array of an numbers and return the avrage of those numbers:

const arrayAvrage=(arr)=>{
    let total=0;
    for( let number of arr){
        total+=number;
    }
    return total/ arr.length;
}

let arr=[4,5,8,9,10,12,34,56];
console.log(arrayAvrage(arr));