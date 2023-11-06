function call(){
    console.log("i am Call Function");
    console.log("Inside the hello fucntion");
   
  
}

function demo(){
    console.log("calling call fnx");
    call();
}

console.log("calling demo fnx");
demo();
console.log("function Calling End done! bye");

function one(){
    return 1;

}

function two(){
    return one()+ one();
}

function three(){
    let ans = two()+one();
    console.log(ans);
}
three();

function repet(){
    setTimeout(() => {
        console.log("Apana College ");
    }, 2000);
   
}
console.log("Sujit Argade");

// callback Hell and the first example is the single one examples

h1=document.querySelector("h1");

function changeColor(color, delay){
    setTimeout(() => {
        h1.style.color=color;
    }, delay);
    
}

setTimeout(changeColor("red"),1000);
setTimeout(changeColor("orange"),2000);
setTimeout(changeColor("#17368E"),3000);


changeColor("#C12A24",5000);

// let see callback nesting and proper examples of the callback and its nexting. This is called the Callback Hell

let h3=document.querySelector("h3");

function changeColors(color, delay, nextColorChange){
    setTimeout(() => {
        h3.style.color=color;
        if(nextColorChange) nextColorChange();
    }, 1000);
}

changeColors("red",1000,() =>{
    changeColors("brown",1000,()=>{
        changeColors("green",1000);
    });
});
//Promises:

function datasaveDB(data,success,failure){
    let dataspeed=Math.floor(Math.random()*10)+1;
    if(dataspeed>4){
        success();
    }else{
        failure();
    }
}

datasaveDB("Sujit Argade",
()=>{
    console.log("Success : your data was saved Successfully");
    datasaveDB("Hello world",()=>{
        console.log("Success 2 : your data Saved Succesfully again");
        datasaveDB("Albert Einstien",()=>{
            console.log("Success 3 : your data Saved Succesfully again");
        },()=>{
            console.log("Failure 3: Data Failed to Save On 3rd Attempt");
        })
    },()=>{
        console.log("Failure 2: Sorry Failed to save the data. Week Conncetions");
    });
},
()=>{
    console.log("Failure : your Data is not saved");
});

// Promises : 

function newdata(data){
    return new Promise((resolve,reject) =>{
        let internetspeed =Math.floor(Math.random()*10)+1;
        if(internetspeed > 4){
            resolve("Success : your data was saved");
        }else{
            reject("Failure : Weak Connections");
        }
    });
}


let request= newdata("Sujit Argade"); // promise  object
console.log(request);

let request2= newdata("Sujit Argade")
.then(()=>{
    console.log(" data 1 Saved Promise was Resolved");
    newdata("Ram Ram bhai Sarya ne")
    .then(()=>{
        console.log("Data 2 was saved perfectly");
    });
})
.catch(()=>{
    console.log("Promise Was rejeceted");
});

// Promise Chaining:
let request3= newdata("Sujit Argade")
.then(()=>{
    console.log(" data 1 Saved Promise was Resolved");
    return newdata("Dear jindagi");
})
.then(()=>{
    console.log("Data 2 saved Perfectly");
    return newdata("Sultan kabhi marta nahi ");
})
.then(()=>{
    console.log("Data 3 was saved Successfully");
})
.catch(()=>{
    console.log("Promise Was rejeceted");
});

//result and Error in Promsies:
let request4= newdata("Raj Thakre")
.then((result)=>{
    console.log(" data 1 Saved Promise was Resolved");
    console.log(result);
    return newdata("Dear jindagi");
})
.then((result)=>{
    console.log("Data 2 saved Perfectly");
    console.log("result of promise and data :" ,result);
    return newdata("Sultan kabhi marta nahi ");
})
.then((result)=>{
    console.log("Data 3 was saved Successfully");
    console.log("result of promise and data :" ,result);
    return newdata("I love india");
})
.then((result)=>{
    console.log("Data 4 saved : successfully");
    console.log("result of promise and data :" ,result);
})
.catch((error)=>{
    console.log("Promise Was rejeceted");
    console.log("Error of promise and data :" ,error);
});


// This is Best Practice of the code any very helful for doing the better arguments:
let h2=document.querySelector("h2");

function colorActivity(color,delay){
return new Promise ((resolve,reject)=>{
    setTimeout(() => {
        h2.style.color=color;
        resolve("Color Changed Successfully");
        console.log(`color changed to : ${color}`);
    }, delay);
});
}

// Here we can usee the async and await function and look how the code will get better and better and small:
async function calling(){
   await colorActivity("red",1000);
   await colorActivity("orange",1000);
   await colorActivity("blue",1000);
   await colorActivity("pink",1000);
    colorActivity("skyblue",1000);
};
calling();

colorActivity("red",1000)
.then(()=>{
    console.log("Red Color Changed SuccesFully");
    return colorActivity("orange",1000);
})
.then(()=>{
    console.log("orange Color Changed SuccesFully");
    return colorActivity("green",1000);
})
.then(()=>{
    console.log("green Color Changed SuccesFully");
    return colorActivity("pink",1000);
})
.then(()=>{
    console.log("pink Color Changed SuccesFully");
    return colorActivity("orange",1000);
})
.catch(()=>{
    console.log("Failed: Weak Arugument");
});

//Async and Await keywords :
//1) Async Keywords:


async function greet(){
    throw "404 Page Not Found";
    return "hello Infosys";
}
greet()
.then((result)=>{
    console.log("Promise was resoloved Successfully");
    console.log("Result was: ",result)
})
.catch((error)=>{
    console.log("Promsie Was rejected");
    console.log("Error :",error)
});

// Async is the only function  wherer we can add await keyword:'

function getNum(){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
        let num= Math.floor(Math.random()*10)+1;
        console.log(num);
        resolve();
        }, 1000);
    });
}

async function demo(){
    await getNum(); // await word wait for the first function get executed then next function will get executed one by one
    await getNum();
    await getNum();
    getNum();
};
// Handling the rejection with the help of await Keywords:


let b=document.querySelector("b");

function newColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let num =Math.floor(Math.random()*10)+1;
            if(num> 4){
                reject("Promise rejected");
            }
            b.style.color=color;
            resolve("Color get changed Successfully");
            console.log(`color get changed to color : ${color}`);
        }, delay);
    });
}

async function sujit(){
  try{
    await newColor("red",1000);
    await newColor("orange",1000);
    await newColor("blue",1000);
    await newColor("pink",1000);
    newColor("skyblue",1000);
  }
  catch(error){
    console.log("error Caught :");
    console.log(error);
  }
};

sujit();
