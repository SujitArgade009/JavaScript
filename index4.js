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
// Find the larges tnumber in an array with only positive numbers
let arr=[2,23,43,53,533,532,8,7,57,567,9];
let largest=0;

for(let i=0; i<=arr.length;i++){
    if(largest <arr[i]){
        largest=arr[i];
    }
}
console.log(largest);