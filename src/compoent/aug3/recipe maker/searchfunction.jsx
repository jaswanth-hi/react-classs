import axios from "axios";
import { useContext, useState } from "react";
import { Recipes_Context } from "./navigation(recipes)";




const Searchs=()=>{
    const { Fetch_data, setsearchC}=useContext(Recipes_Context)
    const [current,setcurrent]=useState("")
    const searchprodcts=async(searchInput)=>{
        const response=await axios.get(`https://dummyjson.com/recipes/search?q=${searchInput}`)
        console.log(response)
    }
    const searchHandler=(event)=>{
        searchprodcts(event.target.value)
        setcurrent(event.target.value)
        Fetch_data(event.target.value)
        setsearchC(event.target.value)


    }
    return(
        <div>
            <input type="search" value={current} placeholder="search for recipes" onChange={searchHandler} />

        </div>
    )
}
export default Searchs;