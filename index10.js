// let Button=document.querySelector(".maindiv");

// Button.addEventListener("click",function(event){
//     event.preventDefault();
//     console.dir(Button);
//     console.log(Button.children);
//     for(let i=0;i<Button.children.length;i++){
//         console.dir(event[i]);
//         console.log(event[i]);
//         if(Button.children=="div.Conatainer"){
//             console.log("Container Div ");
//         }else if(Button.children[1]=="div.sidebar"){
//             console.log("Sidebar Div");
//         }else if(Button.children[2]=="div.bottombar"){
//             console.log("Bottombar div");
//         }
//     }
// });
    

// Extracting the form Data :

let form=document.querySelector("Form");


form.addEventListener("submit",function(event){
    event.preventDefault(); // this method stops the form submitting
    console.log("form Submitted");

    // One More Way to Writing the form Element:
    
    let userr=this.elements[0];  // form.element[0]
    let passw=this.elements[1];

    let user=document.querySelector("#username");
    let pass=document.querySelector("#password");
    
    console.log(user.value);
    console.log(userr.value);
    console.log(pass.value);
    console.log(passw.value);

    alert(`Hi ${user.value}, Your password is set to ${pass.value}`)
});

// Change Event:
// it is going to track the value of the input when  someone change the username input ::

let username=document.querySelector("#username");

username.addEventListener("change" ,function(){
    console.log("change event");
    console.log("final Value is " ,username.value)
});

// Input Event :
username.addEventListener("input" ,function(){
    console.log("Input event");
    console.log("final Value is " ,username.value)
});
