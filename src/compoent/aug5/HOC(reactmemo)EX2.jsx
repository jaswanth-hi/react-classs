import { useEffect, useState } from "react"



const HocCont=(Compoent)=>{
    const Wrapp=()=>{
        const [pro,setpro]=useState(0)
        useEffect(()=>{
            add();

        },[])
       const add =()=>{
        setpro(pro+1)
       }
        return <Compoent data={pro} />
       
    }
    return Wrapp;
    
}


export default HocCont;