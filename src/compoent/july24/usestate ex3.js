import { useState } from "react";




const Timers=()=>{
    const[times,settimes]=useState("")
    const timehandler=()=>{
        const greetString=names();
        console.log(greetString)
        settimes(greetString);
    }
    function names(){
        let dates=new Date();
        let hours=dates.getHours();
          let greetings="";
        if(hours>=0 && hours<6){
            greetings="early moring"
        }else if(hours>=6 && hours<12){
            greetings="good  moring";
        }else if(hours>=12 && hours<16){
            greetings="good afternoon";
        }else if(hours>=16 && hours<20){
            greetings="good evening";
        }else{
            greetings="good night";
        }
        return greetings;
    }
   
    
    return(
        <div>
            <h1>timers{times}</h1>
            <button onClick={timehandler}>click</button>
        </div>
    )
}


export default Timers;