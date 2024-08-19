import { useState } from "react"


export const Usecounter=(inital=10,scale=1)=>{
    const [value,setvalue]=useState(inital)

    const Increase=()=>{
        setvalue(value+scale)
    }
    const decrease=()=>{
        setvalue(value-scale)
    }
    const Restart=()=>{
        setvalue(0)
    }
    return[value,Increase,decrease,Restart]

}