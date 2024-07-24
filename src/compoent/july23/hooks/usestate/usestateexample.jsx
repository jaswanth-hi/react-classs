import { useState } from "react";


const Useapp=()=>{
    const [currentstate,updaterfunction ]=useState(false);
    const[cs1,uf1]=useState(10)

    const user1=()=>{
        // updaterfunction((currentstate)=>!currentstate)
        updaterfunction(!currentstate);
    }
    const cont1=()=>{
        // uf1(cs1=>cs1+1);=>it is used for counter and timer and onclick given the 3 numbers
        // uf1(cs1=>cs1+1);
        // uf1(cs1=>cs1+1);
        // or
        // uf1(cs1+1);=>it is onclick given the 1 number
        // uf1(cs1+1);
        // uf1(cs1+1);
        setInterval(() =>{
            uf1(cs1=>cs1+1);
        },1000)
        

    }

    return(
        <div>
            <h1>usersateExamples</h1>
            <button onClick={user1}>click</button>
            <button onClick={cont1}>{cs1}</button>
            {
                currentstate ? <><h2>please back</h2></>:<><h2>please come </h2></>
            }

        </div>
    )
}



export default Useapp;