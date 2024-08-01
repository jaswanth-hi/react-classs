import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Listss from "../compoent/july23/hooks/tasks23/customList";
import "./recipes.css";


const RecipesDetails=()=>{
    const { recipesId}=useParams()
    const[resp,setresp]=useState({})
   
    useEffect(()=>{
        fetcheachrecipes()
    },[recipesId])
    const fetcheachrecipes=async()=>{
        try{
            const res=await axios.get(`https://dummyjson.com/recipes/${recipesId}`)
            setresp(res.data)
            console.log(res)

        }catch(err){

        }

    }
    return(
        <div>
            <h1>recipesdetails</h1>
            {
                Object.keys(resp).length>0? 
                <div style={{border:"2px solid black",backgroundColor:"pink" ,marginLeft:"10px"}}>

                 <h1 > ID:-{resp.id}</h1>
                <h1> NAME:-{resp.name}</h1>
             
               < img src={resp.image} width={100} height={100}/>
               <h1>ingredients</h1>
               <Listss list={resp.ingredients}/>
               <h1>instructions</h1>
               <Listss list={resp.instructions}/>
               <h1>rating:-{resp.rating}</h1> 
                
                </div>:
                <>
                <h1>please await</h1>
                </>
            }
        </div>
    )
}
export default RecipesDetails;