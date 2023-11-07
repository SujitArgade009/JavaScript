// let jsonRep='{"activity":"Make a to-do list for your week","type":"busywork","participants":1,"price":0,"link":"","key":"5920481","accessibility":0.05}';

// console.log(jsonRep.fact)// undefined will get the output so we need to convert the data 
// console.log(jsonRep);

// let validResponse=JSON.parse(jsonRep); // this is method or you can say this property transfer the data into jason to js object 
// console.log(validResponse); // this is now converted into the javascript format called js object.
// console.log(validResponse.activity + "|| " +validResponse.type);


// Our first API request and API callS asynchronous in nature .
// our js file will execute and the API calls are works in browsers

// let url="https://www.boredapi.com/api/activity";

// fetch(url)
// .then((Response)=>{
//     console.log(Response);
//     return Response.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log("ERROR : ",error);
// });

// async function getFacts(){
//    try{
//     let response= await fetch(url);
//     let data = await response.json();
//     console.log(data);
//     console.log(data.activity);

//     let response2= await fetch(url);
//     let data2 = await response2.json();
//     console.log(data2);
//     console.log(data2.activity);
//    }
//    catch(error){
//     console.log(" ERROR :",error);
//    }

// };

//----------------------------------------------------------
// Using Axios Request to URL:
let btn=document.querySelector("button");

let url2="https://catfact.ninja/fact";
let url3="https://dog.ceo/api/breeds/image/random";


btn.addEventListener("click", async()=>{
   let link=await getImage();
    console.log(link);

    let img=document.querySelector("#sujit");
    img.setAttribute("src",link);
});







async function getImage(){
    try{
    let response= await axios.get(url3);
    console.log(response.data.message);
    return response.data.message;

    }
    catch(error){
    console.log(" ERROR :",error);
    return  "NO IMAGE FOUND";
    }
};

getImage();

// btn.addEventListener("click",async ()=>{
//     let fact=await getFacts();
//     console.log(fact);

//     let p=document.querySelector("#sujit");
//     p.innerText=fact;
// });

// async function getFacts(){
//     try{
//     let response= await axios.get(url2);
//     // console.log(response);
//     return response.data.fact;
//     }
//     catch(error){
//     console.log(" ERROR :",error);
//     return  "NO ACTIVITY FOUND";
//     }
//  }
//  getFacts();
