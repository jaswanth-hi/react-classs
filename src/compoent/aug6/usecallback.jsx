import { useCallback, useMemo, useState } from "react";
import Button from "./customButton";



const UseCallback=()=>{
    const [sweet,setsweet]=useState(100)
    const [drink,setdrink]=useState(100)
    const [briyani,setbriyani]=useState(200)


    const sweet_Drink=useMemo(()=>{
        console.log("sweet+drink")
        return sweet+drink

    },[sweet,drink])
    const total_briyani=useMemo( ()=>{
    console.log("briyani")
    return briyani;
},[briyani])


    const sweetHandler=useCallback(()=>{
        setsweet(sweet +  10)
    },[sweet])
    const drinkHandler=useCallback(()=>{
        setdrink(drink + 10)
    },[drink])

    const briyaniHandler=useCallback(()=>{
        setbriyani(briyani + 10)

    },[briyani])
    return(
        <div>
            <h1> sweet:{sweet}</h1>
            <Button  text={"sweet a"} reopen={sweetHandler} />
            <h1>drink:{drink}</h1>
            <Button  text={"drink a"} reopen={drinkHandler} />
            <h1> total sweet+drink:{sweet_Drink}</h1>
            
            <h1>briyani:{briyani}</h1>
            <Button  text={"briyani a"} reopen={briyaniHandler} />

            <h1> total_briyani:{total_briyani}</h1>
            

        </div>
    )
}
export default UseCallback;