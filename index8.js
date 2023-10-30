let para=document.createElement("p");
para.innerText="Hey, i am red";

document.querySelector("body").append(para);

para.classList.add("red");
// ----------------------------
let h3=document.createElement("h3");
h3.innerText="Hey, i am blue h3!";

document.querySelector("body").append(h3);

h3.classList.add("blue");
//-------------------------------
let div=document.createElement("div");
let h1=document.createElement("h1");
let para1=document.createElement("p");

h1.innerText="I'm in div";
para1.innerText="Mee too!";

div.append(h1);
div.append(para1);
div.classList.add("box");

document.querySelector("body").append(div);

// Question 1:
//Create a new input and button element on the page using JavaScript only set the text of button click me:

let button= document.createElement("button");
let input=document.createElement("input");

button.innerText="Click Me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);


button.setAttribute("id" , "btn");
input.setAttribute("Placeholder" , "Username");

let btn=document.querySelector("#btn");
btn.classList.add("btnStyle");


let h11=document.createElement("h1");
h11.innerHTML="<u> Dom Practice </u>"
document.querySelector("body").append(h11);
