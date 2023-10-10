// let student1="sujit";
// let student2="aman";
// let student3="shanti";

let student=["sujit","Aman","Shardha"];

console.log(student[1]);
 
let str=[];
console.log(str ,str.length);

// difference between mutable and immutable;
//string and array are best examples of this 

let string="Sujit";
//it will not change not change the string if you need to chnage it you need to store it in another variable
// In array you can change or modifiy the array 
let fruits=["Mango" ,"Banana","Apple"];

fruits[0]="litchi";

console.log(fruits);
//you can see the output and change is there mango will be replaced by the litchi
// length will be count in array
//suppose you do

fruits[10]="sujit";
console.log(fruits);
//you can see in output there is empty space in between. 7 places are empty in between in them



//Array method::

let cars=["audi","merc","toyto","mahindra"];

cars.push("HeroHonda");
console.log(cars);
//to delete the last elements
cars.pop();
console.log(cars);

//you want to add in start element
cars.unshift("Sujit");
console.log(cars);

//you want to delete first element

cars.shift();
console.log(cars);


//Array Method 

let colors=["red","blue","yellow"];


console.log(colors.indexOf("blue"));
console.log(colors.includes("red"));


//array methods
//1)concatination::
let primary=["red","yellow","blue"];
let secondary=["green","white","black"];

console.log(primary.concat(secondary));
console.log(primary.reverse());

//slice in array:

let primary1=["red","yellow","blue","green","white","black"];

console.log(primary1.slice(2,4));
console.log(primary1.slice(-2));
console.log(primary1.slice(primary1.length-1));

//splice method:

let colorss=["red","yellow","blue","green","white","black"];

console.log(colorss.splice(4));
console.log(colorss.splice(0,1));
console.log(colorss.splice(4,1,"sujit","rambhau","shanker"));
console.log(colorss.splice(4));

//sorting  method::

let issue=["first","second","third","fourth","fifth","sixth","seventh"];

console.log(issue.sort());
console.log();
// sorting always in a ascending or decending order.
// sorting can not be applied on the array in which number datatypes are present.

let array=[7,9,0,-2];

let n=3; // we put n because we want an array till 0 th position and 
let ans=(array.slice(0,n)); // 0 means from index zero to till 2nd position we want an separate array
console.log(ans);

//question 2:
let n1=3;
let ans1=(array.slice(array.length-n1));
console.log(ans1);

//question 3rd: whether the string is empty or not check for it

// let string1=prompt("Enter your name");

// if(string1.length==0){
//     console.log("String is Empty");
// }else{
//     console.log("String is not empty");
// }

//question 4:

let stR="SujItArgade";
let inx=3;

if(stR[inx]==stR[inx].toLowerCase()){
    console.log("Charter is in Lowercase");
}else{
    console.log("Charter is in UpperCase");
}


//Question 5: Strip leading and lending spaces from the string;

// let originalstrr=prompt("Enter your full name");

// let strr1=originalstrr;
// console.log(originalstrr);
// console.log(strr1.trim());


//question no 6:

let ARRAY=["hello","a",23,64,99,-6];
let item=7;
console.log(ARRAY.indexOf(item));
if(ARRAY.indexOf(item) != -1){
    console.log("Element Exist In array");
}else{
    console.log("Element Dosen't exists in array");
}

///LOOOOPs
//1) for loop:

let i=0;

for(let i=0;i<=2;i++){
    console.log(i);
}

// Print all odd numbers till 15;
console.log("Forward Loop")
for(let i=1;i<=15;i=i+2){
    console.log(i);
}
console.log("Backward Loop")
for(let i=15; i>=1; i=i-2){
    console.log(i);
}

//print all even number from 2 to 10
console.log("Even number Loop")
for(let i=2; i<=10;i=i+2){
    console.log(i);
}
// Taking input from the user and print the table of that number:
let m=prompt("Enter a number");
m=parseInt(m);

for(let i=m; i<=m*10; i=i+m ){
    console.log(i);
}

//nested For loop

for(let i=1; i<=2; i++){
    console.log(`outer loop ${i}`);
    for(let k=1;k<=3;k++){
        console.log(k);
    }
}

// while loop
console.log("While Loop Started");
let j=1;
while(j<=5){
    console.log(j);
    j++;
}
// ----------------------------------------------------------------------
//favorite Movie Question

// const favmovie="3idiots";
// let k=prompt("Enter movie Name");

// while((k!=favmovie)&&(k!="quit")){
//     console.log("wrong Choice");
//     k=prompt("Enter movie Name");
// }
// if(k==favmovie){
//     console.log("Congrats yor are right");
// }else{
//     console.log("You quit");
// }
//while loop we can use quit statment
// -------------------------------------------------------------------
// const movie="nayantara";
// // let p=prompt("Enter Movie name");

// while(p!=movie){
//     if(p=="quit"){
//         console.log("You quit");
//         break;
//     }
//     p=prompt("please Try, Enter Movie name");
// }
// if(p==movie){
//     console.log("Congraulation you won");
// }
// ----------------------------------------------------------------------
