import axios from "axios";
import { useEffect, useState } from "react"



const Usereffects=()=>{
    const [users,setusers]=useState("")
    const[recs,setrec]=useState([])
    const[cs,uf]=useState(0)
    useEffect(()=>{
        handler();
        Timers();
        document.title="username";
      recipeshandlers();
        window.addEventListener("mousemove",()=>{console.log("mouse over....")})
       
        

    },[])

    const recipeshandlers=async()=>{
        try{
            const res=await axios.get("https://dummyjson.com/recipes")
            
            setrec((recs)=>recs=(res.data.recipes))

        
            
               
            
        }catch(err){
    
        }
       }
    const handler=()=>{
        const newss=names();
        setusers(newss)
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
    const Timers=()=>{
    setInterval(() =>{
        uf(cs=>cs+1);
    },1000)
}
   
    return(
        <div>
            <h1>{users}</h1>
            <h1>timers:-{cs}</h1>
            {recs.map((each,index)=>{
                return(
                    <div>
                        <h1>{each.id}</h1>
                        <h1>{each.name}</h1>
                        </div>
                )
            })}
            
        </div>
    )
}


export default Usereffects;