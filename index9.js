// Dom Event: How will action trigger when you click the page link or websites link:


// We Selected the single button :
// let btn= document.querySelector("button");
// console.dir(btn);

// btn.onclick=function(){
//     console.log("Button Was Clicked");
//     alert("Wrong Choice");
// }
// Select All button on single time:

let btns=document.querySelectorAll("button");
// console.dir(btns);

// On mouse enter Property :

for(let i=0; i<btns.length;i++){
    // btns[i].onclick= sayHello; // you cannot operate the multiple function on the single button
    // btns[i].onclick= sayName;// and Thats why the EventListeners Comes into Pictures
    // btns[i].addEventListener("click",sayName); // Event Listners:
    // btns[i].addEventListener("click",sayHello); // Event Listners:
    btns[i].addEventListener("dblclick", function(){ //dobule click is one of the function:
        console.log("You Dobule Click the button");
    })
    btns[i].onmouseenter= function(){
        console.log("You Entered Button!");
    }
}

function sayHello(){
   alert("Hello");
}
function sayName(){
    alert("Sujit Argade");
}

let sujit=document.querySelector("button");

sujit.addEventListener("click" ,function(){
    let h3=document.querySelector("h3");
    let randomColor=genrateRandomColor();
    h3.innerText=randomColor;

    let div=document.querySelector("div");
    div.style.backgroundColor=genrateRandomColor();


    console.log("Color Updated");
})

function genrateRandomColor(){
    let red= Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    let blue= Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}

let k=document.querySelector(".box");
console.dir(k);

k.addEventListener("mouseenter", function(){
    console.log("Mouse Inside the div!");
})

// THIS keyword  In Event Listners:
let h1=document.querySelector("h1");
let h4=document.querySelector("h4");
let p=document.querySelector("p");


function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor="pink";
}

h1.addEventListener("click",changeColor);

h4.addEventListener("click",changeColor);

p.addEventListener("click",changeColor);

// Keyboard Events:
let inp=document.querySelector("input");

inp.addEventListener("keydown",function(Event){
    console.log(Event);
    console.log("key =",Event.key);
    console.log("Code= ",Event.code);
    console.log("key Was pressed");
})

inp.addEventListener("keyup",function(){
    console.log("key Was Released");
})


inp.addEventListener("keydown",function(){
    console.log("code = ,",Event.code);// ArrowUp,ArrowDown,Arrowleft,ArrowRight

    if(event.code=="ArrowUp"){
        console.log("Charters move Forward");
    }else if(event.code=="ArrowDown"){
        console.log("Charters move Forward");
    }else if(event.code=="ArrowLeft"){
        console.log("Charters move Forward");
    }else if(event.code=="ArrowRight"){
        console.log("Charters move Forward");
    }
})

// Form Event:
let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();  // With the help of this we can stop the action which will going to perform by form after submitting it 
    alert("Form Submitted ");


    // How will Extract the form the user Submitted let see:
    let inpu=document.querySelector("input");
    console.dir(inpu);
    console.log(inpu.value);
})


