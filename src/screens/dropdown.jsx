import axios from "axios"
import { useEffect, useState } from "react"



const Droplist=()=>{

    const[app,setapp]=useState([])
    useEffect(()=>{
        fetchrec()
    },[])

    const fetchrec=async()=>{
        try{
            const {data,status}=await axios.get("https://dummyjson.com/recipes")
            console.log(data)
            setapp(data.recipes)

        }catch(err){

        }
        
    }
    return(
        <div>
            <h1>recipes</h1>
            {
                <select>
                
                </select>

            }
           
        </div>
    )
}
export default Droplist