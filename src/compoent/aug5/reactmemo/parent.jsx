import { useState } from "react";
import Child from "./child";



const Reactmemo=()=>{
    const [dark,setdark]=useState(false);
    console.log("parent recender");
    const fun=()=>{
        setdark(!dark)
        
    }
    return(
        <div>
            <button onClick={fun}>click</button>
            <Child></Child>


        </div>
    )
}
export default Reactmemo;