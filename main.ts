#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer"
differenceInSeconds

const response=await inquirer.prompt([
    {
        message:"Enter amount of time in seconds:\n",
        type:"number",
        name:"input",
        validate:(input)=>{
           if(isNaN(input)){
            return "Please enter valid number"
           }
           else if(input>60){
            return "Seconds must be within 60"
           }
           else{
            return true
           }
        }
    }
]);

function startTime(val:number){
    const initialTime=new Date().setSeconds(new Date().getSeconds()+val);
const intervalTime=new Date(initialTime);
setInterval(()=>{
    const currentTime=new Date();
    const timeDiff=differenceInSeconds(intervalTime,currentTime);
    if(timeDiff==0){
        console.log("Countdown timer finshed!");
        process.exit();
    }
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (3600 * 24)) / 3600)
    const seconds = Math.floor((timeDiff % 60));
    console.log(`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`);
 
},1000);
}

startTime(response.input);