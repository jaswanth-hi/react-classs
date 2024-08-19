import { useMemo, useState } from "react"


const ExamplesUsememo=()=>{
    const [number,setnumber]=useState(10)
    const [weight,setweight]=useState(50)
    const numberhandler=()=>{
        setnumber(number+1)
    }
    const weightHandler=()=>{
        setweight(weight+1)
    }
    const iseven=useMemo(()=>{
        console.log("even")
        return number%2==0 ? true:false
    },[number])
    
    return (
        <div>
            <h1>number{number}{iseven ? "even":"odd"}{" "}</h1>
            <h2>weight{weight}</h2>
            <button onClick={numberhandler}>increaseNumber</button>
            <button onClick={weightHandler}>increaseWeight</button>

        </div>
    )

    
}
export default ExamplesUsememo;