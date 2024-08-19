import { useMemo, useState } from "react";
import Button from "./customButton";



const Usememo=()=>{
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
    const sweetHandler=()=>{
        setsweet(sweet+20)
    }
    const drinkHandler=()=>{
        setdrink(drink+20)
    }
    const briyaniHandler=()=>{
        setbriyani(briyani+20)

    }
    return(
        <div>
            <h1> sweet:{sweet}</h1>
            <Button  text={"sweet"} reopen={sweetHandler} />
            <h1>drink:{drink}</h1>
            <Button  text={"drink"} reopen={drinkHandler} />
            <h1> total sweet+drink:{sweet_Drink}</h1>
            
            <h1>briyani:{briyani}</h1>
            <Button  text={"briyani"} reopen={briyaniHandler} />

            <h1> total_briyani:{total_briyani}</h1>
            

        </div>
    )
}
export default Usememo;