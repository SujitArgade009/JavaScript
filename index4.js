//Assignment Questions
//Question no:1
let array=[1,2,3,4,5,6,2,3];
let num=3;

for(let i=0; i<array.length; i++){
    if(array[i] == num){
        let k=array.splice(i ,1);
    }
}
console.log(array);
// Question No:2
//count the number in which how many digits have in their number.
let number=76998798;
let count=0;

let copy=number;

while(copy>0) {

    count++;
    copy= Math.floor(copy/10);
}
console.log(count);

//Question No:3

let num1=867932;
let sum=0;

let copy1=num1;

while(copy1>0){ 

    digit=copy1 % 10;  
    sum+=digit;
    copy1= Math.floor(copy1/10);
}
console.log(sum);

//Question No:4
// Find the factorial of any number 

let n=5;
let factorial=1;

for(let i=1; i<=n; i++){

    factorial*=i;
}
console.log(`Factorial of ${n} is ${factorial}.`);

// Question no :5
// Find the largest number in an array with only positive numbers
let arr=[2,23,43,53,533,532,8,7,57,567,9];
let largest=0;

for(let i=0; i<=arr.length;i++){
    if(largest <arr[i]){
        largest=arr[i];
    }
}
console.log(largest);


// Object Literals
let student={
    name:"sujit",
    age:25,
    city:"Pune",
    marks:98,
}

let pune={
    latitude :"18.5204° N",
    longitude: "73.8567° E",
}

const post={
    username:"@sujya_007",
    content:"this is my #first post",
    repost:67,
    likes:150,
    tag:["@delta","@apanacollege"]

}

//add/edit of the object literal
console.log(student.name);
student.name="Rahul";
console.log(student.name);
student.gender="Male";
console.log(student);
student.marks=[67,2,323,89];
console.log(student.marks);
console.log(delete student.age);
console.log(student);

//Nested of object literals called: object of objects:
//Object of objects
let classInfo={
    aman: {
        grade:"A+",
        city:"delhi"
    },
    sujit :{
        grade:"b+",
        city:"pune"
    },
    Rahul :{
        grade: "c+",
        city: "panjab"
    }
};
console.log(classInfo);
console.log(classInfo.aman.grade);

//Array of objects:

const info =[
    {
        name:"sujit",
        grade:"A+"
    },
    {
        name:"swati",
        grade:"b+"
    }
];
console.log(info);
console.log(info[1]);
console.log(info[1].grade);
console.log(info[1].grade="c+");
console.log(info[1].grade);
console.log(info);
console.log(info[1]);

//math object // math function
console.log(Math.floor(Math.random()*10) +20);
console.log(Math.floor(6.4));
console.log(Math.ceil(6.4));
console.log(Math.random());

//Guessing game:
const UserNum=prompt("Enter the maximum Number");

const random=Math.floor(Math.random() * UserNum) + 1;

const Guess=prompt("Guess the number");
console.log(Guess);
while(true){

    if(Guess =="quit"){
        console.log("You Quit");
        break;
    }

    if(Guess==random){
        console.log("You are Right!!, your random number was",random);
        break;
    }
    else if(Guess < random){
       prompt("Hint : your guess was too small, Please try again");
    }
    else if( Guess > random){
        prompt("Hint : your guess was too big, Please try again");
    }
}