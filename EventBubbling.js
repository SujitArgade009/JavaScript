// This Code Showing the Event Bubbling: means how will Event Bubbling happens in the children Parent Connections

// For stop event Bubbling use one method called stop Propagation:
let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("Div Was Clicked");
});

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul Was Clicked");
});

for (li of lis){
    li.addEventListener("click",function(event) {
        event.stopPropagation();
        console.log("li Was Clicked");
    });
}

