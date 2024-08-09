
import { useContext, useState } from "react";
import NavabarRecipes from "./navabar(recipes)";
import { Recipes_Context } from "./navigation(recipes)";
import "./recipes.css"
import Listss from "../../july23/hooks/tasks23/customList";


const FavouriteRecipes=()=>{
    const {favourite, removefavio}=useContext(Recipes_Context);
    
    const removehandler=(eachfood)=>{
        removefavio(eachfood.id)
    }
    return(
        <div>
            <NavabarRecipes></NavabarRecipes>
         <center>
         <div className="recipe-cards" >
           {
                favourite.length>0 ?<>
                {
                    favourite.map((each,index)=>{
                        return(
                            <div>
                                
                               
                                <img src={each.image} height={200} width={200} />
                                <h2>{each.name}</h2>
                                <h4>INSTRUCTIONS</h4>
                                <Listss list={each.instructions}/>
                                <h4>INGREDIENTS</h4>
                                <Listss list={each.ingredients}/>
                                <button className="recipe-card button" style={{backgroundColor:"pink" ,border:"none"}} onClick={()=>removehandler(each)}>remove food</button>
                            </div>
                        )
                    })
                }
                
                </>:<><h2>please wait</h2></>
            }
           </div>
         </center>
        </div>
    )
}

export default FavouriteRecipes;