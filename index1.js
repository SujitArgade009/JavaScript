console.log("Hello JavaScript!!");
console.log("Hello world!!");
console.log("Hello MicroSoft!!");
console.log("Hello Google!!");
console.log("i love india");

let a=3;
let b=23;

//unary operators
console.log(a++);
console.log(++a);

//Airrthmetic operators
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);
console.log(a%b);

//Comparison operators
let age=18;
console.log(age >18);
console.log(age >=18);
console.log(age <18);
console.log(age <=18);
let k=5;
let m=5;
// equal to comparision
console.log(k==m);
// not equal to comaprision
console.log(k!=m);

// strict comparision 
let x=3;
let y='3';


console.log(x==y);
console.log(x===y);

// if statement


console.log("before if statement");
let agee=34/2;

if(agee >=18){
    console.log("You can vote for Assembly Election");
}else{
    console.log("you are not eligible for vote");
}
console.log("after my if statement");

//Traffic Light System

let color="red";

if(color==="red"){
    console.log("Please STOP! Light color is Red");
}if(color==="yellow"){
    console.log("Please Slow Down your Speed! Light color is Yellow");
}if(color==="green"){
    console.log("Please GO! Light color is Green")
}

//else if statement

let agge=29;
 if(agge >= 18){
    console.log("You can vote");
 }else if(agge < 18){
    console.log("you cannot vote");
 }

 // if statement

 let marks=26;

 if(marks>=80){
    console.log("You got A+ grade");
 } else if (marks >=60){
    console.log("you got B+ grade");
 }else if(marks>=45){
    console.log("you got c+ grade");
 }else if (marks< 35){
    console.log("Yor are failed");
 }
 // Practice Question

 let size="XL";
 if(size==="XL"){
    console.log("price of popcorn is 250 Rup");
 }
 else if(size==="L"){
    console.log("price of popcorn is 200 Rup");
 }
  else if(size==="M"){
    console.log("price of popcorn is 100 Rup");
 }
  else if(size==="S"){
    console.log("price of popcorn is 50 Rup");
 }else{
    console.log("Error 404");
 }

 let markss=80;
 if(markss>=80){
    console.log("Grade : A");
    if(markss>=90){
        console.log("Grade : Outstanding");
    }
 }else{
    console.log("Bettur Luck Next time");
 }
 // Logical operator
 let score=40;
 let Award=`Student Of the year`;
 if(score>= 35 && score>=80){
    console.log(`Congrualtion you won ${Award} award`);
 } else if (score >=35 && score<80){
    console.log("yoe are just avarage Student");
 }
 // Practice Question
 let suppose="apple";

 if((suppose[0]==='a') && (suppose.length>3 )){
    console.log("Good string");
 }else{
    console.log("Not a good String");
 }

 // switch statement

 let color1="red";

 switch(color1){
    case "red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Slow down");    
        break;
    case "Green":
        console.log("GO");
        break;
    default:
        console.log("ERROR 404");
 }

 // practice Question

 let day=2;

 switch(day){ 
   case 1:
      console.log("Sunday fun Day");
      break;
   case 2:
      console.log("Moday");
      break;   
   case 3:
      console.log("Tuesday");
       break;
   case 4:
      console.log("Wednesday");
      break; 
   case 5:
      console.log("Thursday");
      break; 
   case 6:
      console.log("Friday");
      break; 
   case 7:
      console.log("Saturday");
      break; 
   default:
      console.log("Wrong day!")                                          
 }

 // Alert on Screen 
 alert("Something is Wrong!");
 console.log("This is simple log");
 console.error("This is an Error msg");
 console.warn("This is simple Warning msg");
 

 // Prompt msg
 
 let firstName=prompt("Enter your Firstname :");
 let lastName=prompt("Enter your Lastname :");
 console.log( "Welcome", firstName,lastName);

 let X=5;
 let Y=18;
 let Z=13;

 if(X>Y){
     if(X>Z){
       console.log(a ,"is largest");
      }else{
      console.log(c ,"is largest");
      }
   }else{
     if(Y>Z){
      console.log(b,"is largest");
      }else{
       console.log(c,"is largest");
      }
   }

 // Bonus Question
 
 let num1=32;
 let num2=47852;
  
if((num1%10) == (num2%10)){
   console.log("Numbers have same Last digit which is", num1%10);
}else{
   console.log("Number don't have same last numbers");
}

 

