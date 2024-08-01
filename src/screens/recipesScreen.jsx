import { useEffect, useState } from "react"
import Navabar from "../compoent/navabar/navabar"
import axios from "axios"
import { Link } from "react-router-dom";
import "./recipes.css";



const Userscreen=()=>{
    const [recipe,setrecipes]=useState([])
    useEffect(()=>{
        fetchcalling()
    },[])

    const fetchcalling=async()=>{
        try{
            const {status,data}=await axios.get("https://dummyjson.com/recipes")
            if(status===200){
                setrecipes(data.recipes)
                console.log(data)

            }


        }catch(err){

        }
        
    }

    return(
        <div>
            <Navabar></Navabar>
            {
                recipe.map((each,index)=>{
                    return(
                        <div style={{border:"2px solid black",backgroundColor:"pink"}}>
                            <h1>{each.name}</h1>
                            < img src={each.image}  width={200} height={200}/>
                            <h1>{each.rating}</h1>
                           
                            <button>
                                <Link to={`/recipes/${each.cuisine}/${each.id}`}>
                                see more
                                </Link>
                                </button>
                            </div>
                    )
                })
            }
            
            
        </div>
    )
}
export default Userscreen