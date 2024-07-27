import { useEffect, useState } from "react";



const Useappss=()=>{
    const [cs1x,uf1x]=useState(0)
    const [cs1y,uf1y]=useState(0)
    useEffect(()=>{

        window.addEventListener("mousemove",abc);
        return(()=>{
            window.removeEventListener("mousemove",abc)
        })
    },[])
    function abc(event){
        uf1x(event.clientX)
        uf1y(event.clientY)
        console.log(event)
       
    }
    return(
        <div>
            <h1>abc</h1>
            <h1>xaxis:-{cs1x}</h1>
            <h1>yaxis:-{cs1y}</h1>

        </div>
    )
}

export default Useappss;