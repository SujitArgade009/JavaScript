;let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;

    
    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    input.value="";
});



ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
       listItem.remove();
        console.log("Deleted");
    }
});



// this delete button Property is delete the button of the already we have in the list:
// So we need to create event Listners to the parent element so we can trigger the operation using the parent Element
// let delbtns=document.querySelectorAll(".delete");

// for(del of delbtns){
//     del.addEventListener("click",function(){
//         let parent=this.parentElement;
//         console.log(parent);
//         parent.remove();
//         console.log("Element Deleted");
//     });
// }
