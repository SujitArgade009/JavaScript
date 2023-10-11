 
 let array=[];

 let req=prompt("Please Enter your request");

while(true){
    if(req =="quit"){
        console.log("Quitting app");
        break;
    }
    
    if(req=="list"){
        console.log("---------");
        for(let i=0;i<array.length;i++){
            console.log(i ,array[i]);
        }
        console.log("---------");

    }else if(req=="add"){
        let task=prompt("Please Enter the task you want to add");
        array.push(task);
        console.log("Task Added");

    }else if(req=="delete"){
        let inx=prompt("Please Enter task index you want to delete");
        array.splice(inx ,1);
        console.log("task Deleted");
        
    }else{
        console.log("Wrong Request");

    }
    req=prompt("Please Again Enter your request");
}