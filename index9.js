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



