import { useContext, useState } from "react";
import NavabarRecipes from "./navabar(recipes)";
import { Recipes_Context } from "./navigation(recipes)";
import { Link } from "react-router-dom";
import Listss from "../../july23/hooks/tasks23/customList";
import "./recipes.css"



const About_Recipes=()=>{
    const { viewrecipes, addfavouriteHandler}=useContext(Recipes_Context)
    console.log(viewrecipes,"aa")
    const[isfav,setisfav]=useState(false)
    const addfoodHandler=(fooditems)=>{
        addfavouriteHandler(fooditems)
        setisfav(true)
    }

    
   
    return(
        <div>
            <NavabarRecipes></NavabarRecipes>
            <center>
            <div className="recipe-cards" style={{}}>

            {
                Object.keys(viewrecipes).length>0 ?<>
                <h2>{viewrecipes.name}</h2>
                <img src={viewrecipes.image} width={100} height={100}/>
                <h4>INSTRUCTIONS</h4>
                <Listss list={viewrecipes.instructions}/>
                <h4>INGREDIENTS</h4>

                <Listss  list={viewrecipes.ingredients}/>
               
                

                {
                    isfav ?<>
                  <Link to={"/favi"}>  <button className="recipe-card" style={{backgroundColor:"pink",border:"none"}}>Go to favourite</button></Link>
                    
                    </>:<>
                    <button className="recipe-card" style={{backgroundColor:"pink",border:"none"}} onClick={()=>{addfoodHandler(viewrecipes)}}>add to favoutie</button>
                    </>
                }
                
                
                
                </>:<>
                <h2>loading ...</h2>
                
                </>
            }
            </div>
            </center>
            



           
                    </div>
                  
               
            
            

       
    )
}

export default About_Recipes;

