// Array Method:
//1) for each method:
let arr=[1,2,3,4,5,6];

let print= function(el){
    console.log(el);
}
// callling for each

arr.forEach(print);
// 2nd way of implementation:
arr.forEach(function(el){
    console.log(el);
});

// Applyaing the for each for objects also:

let array=[
 {
    name:"sujit",
    marks:87
 },
 {
    name:"rohit",
    marks:98
 },
 {
    name:"rahul",
    marks:56
 }
];

array.forEach((student)=>{
    console.log(student);
    console.log(student.marks);
});

// 2)map method/function:

let num=[78,5,4,6,88];

let dobule= num.map((el)=>{
    console.log(el*2);
});

let student=[
    {
       name:"sujit",
       marks:87
    },
    {
       name:"rohit",
       marks:98
    },
    {
       name:"rahul",
       marks:56
    }
   ];

// convert the marks of the student into cgpa:
let cgpa= student.map((el)=>{
    return el.marks/10;
});

console.log(cgpa);

// filter function:

let nums=[67,7,9,2,4,6,4,8,9,10];

let even=nums.filter((el)=>{
    return (el%2==0); // even numbers true return 
    
});

let odd=nums.filter((el)=>{
    return (el%2!=0); // even numbers true return 
    
});

console.log(even);
console.log(odd);

// Reduce method:

let numbers=[3,4,6,7,8,9,10,23,45,66];

let finalValue = numbers.reduce((result,el)=>{
    console.log(result);
    return result + el;
});
console.log(finalValue);

// Finding the maximum value in array

let  Num=[3,4,6,7,8,9,10,23,45,66];

// normal method
let maxvalue1= 0;

for(let i=0; i<Num.length;i++){
    if(maxvalue1<Num[i]){
        maxvalue1=num[i];
    }
}

console.log(maxvalue1);

// reduce method

let maxvalue= num.reduce((max, el)=>{
    if(max < el){
        return el;
    }else{
        return max;
    }
});
console.log(maxvalue);

// Practice Question:
// check if in our array how many values are multiple of 10 or not :

let king=[34,6,5,6,90,23,50,40,10,80];

let ans=king.every((el)=>{
    return (el % 10==0);
})
console.log(ans); // if ans value is true then all elements are the multiple of 10 
//and if value print false then all values are not the multiple of the 10

let miniValue =king.reduce((min,el)=>{
    if(min < el){
        return min;
    }else{
        return el;
    }
});
console.log(miniValue);

// if we use normal function:

function minimumValue(king){
    let miniValue =king.reduce((min,el)=>{
        if(min < el){
            return min;
        }else{
            return el;
        }
    });

    return miniValue;
}
// calling the normal function
console.log(minimumValue(king));

// Default parametre:
 
function sum(a,b=2){
    return a+b;

}
console.log(sum(1));
console.log(sum(1,3));

// Math Function:
// indiviually printing the seprate elements:
// Sprade function are this type strength to sprade the seprate values of the arrays;
console.log(...arr);

//Spread with array literal:

let newarr=[...arr];
console.log(newarr);

let char=[..."sujit argade"];
console.log(char);

//spread with object literals:

let data={
    email:"sujitargade009@gmail.com",
    pass:"@12345"
};

let dataCopy={...data, id:123 , country:"India"};
console.log(dataCopy);

// Rest Method:

function sum(...args){
    for(let i=0; i<args.length;i++){
        console.log("You gave us :", args[i]);
    }
}

// calling the function:
console.log(sum(5));


function ok(){
    console.log(arguments);
    console.log(arguments.length);
}
console.log(ok(1,2,3,4));


// Destructing :
let names=["sujit","stark","rahul","king","willamson"];

// let winner=[0];
// let runnerup=[2];
// let secondrunnerup=[3];

let [winner,runnerup,secondrunnerup]=names;
console.log(winner);
// Descturing on Objects:
const students={
    name:"sujit argade",
    class:9,
    age:13,
    subject:["hindi","marathi","math","englisg","social science"],
    username:'sujit123',
    pass:"@1234",
};

// this is old method or sometimes we have unlimited student then what will we do
// let username=students.username;
// let password=students.pass;

let {username:user,pass:password}=students;
