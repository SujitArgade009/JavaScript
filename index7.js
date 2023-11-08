// Accessing the Element by selcting and element id:

document.getElementById("mainImg");
let ImgObj=document.getElementById("mainImg");
console.log(ImgObj);

// manupilation of the src data by your own :
// ImgObj.src="assets-20231023T052556Z-001/assets/creation_1.png"
let img=document.getElementById("mainImg");
console.log(img); 
console.dir(img); // you will get to see the indiviual properties of the img element in document

let ok=document.getElementById("description");
console.log(ok);
console.dir(ok); // dir is the function which will give you the all 
//properties of the that id like what is that element

// Selecting the element by the class name:

let classs=document.getElementsByClassName("oldImg");
console.log(classs);
console.dir(classs); 
// you can access the element present in that class

let ob=document.getElementsByClassName("oldImg");
console.log(ob);

// for printing all element you can use for loop also

for(let i=0; i<ob.length;i++){
    console.dir(ob[i]);
}
// you can print the source of the each element or img:
for(let i=0; i<ob.length;i++){
    console.dir(ob[i].src);
}

// Selecting the element by the tag name :

document.getElementsByTagName("p")  // p use for the paragarph tag

// Most useful thing in the javascript is Query Selector same as use in the css:
let paragarph=document.querySelector("p") //
console.dir(paragarph);
// we can select on the besis of the id also
let id=document.querySelector("#description");
console.dir(id);
//we can select on the basis of the class name
let classname=document.querySelector(".box");
console.dir(classname);
// use the same syantax which we are using for the css the element like nesting also happen in that situation:
let nest=document.querySelector("div a"); // Here you will get the first anchor tag which is present in div
console.dir(nest);
// if we want same type of the all tags then we need to use QuerySelcectorAll:
let all=document.querySelectorAll("div a"); //you will get all the anchor tag which are present in the div
console.dir(all);

let Spider=document.querySelectorAll("img");
console.dir(Spider);

// Manipulkating the change of the all anchor tag in the our wabpages on HTML

let ht=document.querySelectorAll(".box a");

// for (let i=0;i<ht.length;i++){
//     ht[i].style.color="yellow";
// }

// one more way to change or mainpulate the data :
for(link of ht ){
    link.style.color="red";
}

// Navigator:
//1) Parent Element
let h4=document.querySelector("h4");
console.dir(h4);
let parent=h4.parentElement;
console.log(parent);
// 2)children:
let chid=h4.childElementCount;
console.log(chid);


let box= document.querySelector(".box");
let par=box.parentElement;
let ch=box.childElementCount;
console.log(par);// parent of box
console.log(ch);// children of box 

//practice question :
// Add the following element using only javascriots and diom methods

