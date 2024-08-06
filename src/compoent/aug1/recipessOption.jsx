import axios from "axios";
import { useEffect, useState } from "react";


const RecipesFinder=()=>{
    const [update,setupdate]=useState([])
    const[select,setselect]=useState({})
    useEffect(()=>{
        recipessf()
    },[])

    const recipessf=async()=>{
        const {data}=await axios.get("https://dummyjson.com/recipes");

        const updateapi=data.recipes.map((each)=>{
            return{RecipesId:each.id,Name:each.name}
        })
        setupdate(updateapi)


    }
    const  selectHandler=(valuess)=>{
    const selectId=valuess.target.value;
    fetchdata(selectId)
    

    }
    const fetchdata=async(id)=>{
        try{
        const {data}=await axios.get(`https://dummyjson.com/recipes/${id}`);
        setselect(data)
        }catch(err){
            
        }

    }
    return(
        <div>
            <h1>recipes</h1>
            {
                update.length>0 &&(
                    <select onChange={selectHandler}>
                        {
                            update.map((each)=>{
                                return(
                                <option value={each.RecipesId}>{each.Name}</option>
                                )
                            })
                        }
                    </select>
                )
            }
            {
                Object.keys(select).length>0 &&(
                    <div>
                    <h4>{select.name}</h4>
                    <h4>{select.id}</h4>
                    <h4></h4>
                    </div>
                )
            }
        </div>
    )
}

export default RecipesFinder;