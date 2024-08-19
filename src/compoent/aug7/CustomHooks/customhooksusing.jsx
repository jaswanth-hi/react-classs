

import { useMemo } from "react"
import { Usecounter } from "./customHooksex1"
import { iseven } from "../../../jsfunctions/gmga"


const ExamplesCustomHooks=()=>{
    const [number,IncreaseHandler]=Usecounter(10,1)
    const [weight,IncreaseHandlerWeight]=Usecounter(10,3)
   
   
    
    
    return (
        <div>
            <h1>number{number}{iseven(number) ? "even":"odd"}{" "}</h1>
            <h2>weight{weight}</h2>
            <button onClick={IncreaseHandler}>increaseNumber</button>
            <button onClick={IncreaseHandlerWeight}>increaseWeight</button>

        </div>
    )

    
}
export default ExamplesCustomHooks;