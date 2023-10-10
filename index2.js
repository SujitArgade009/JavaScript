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

