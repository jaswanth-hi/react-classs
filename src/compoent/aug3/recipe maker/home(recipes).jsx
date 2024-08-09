import { useContext, useState } from "react";
import NavabarRecipes from "./navabar(recipes)";
import { Recipes_Context } from "./navigation(recipes)";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import "./recipes.css";
import Searchs from "./searchfunction";





const Home_Recipes=()=>{
   const {recipesList,addfavouriteHandler, viewrecipesitems} =useContext(Recipes_Context)
   const [searchs,setsearch]=useState("")
   
   const navi=useNavigate()
   console.log(recipesList ,"aa")
   const addfaviouritehandler=(eachdish)=>{
    addfavouriteHandler(eachdish)
   }
   const gotofaviorHandler=()=>{
    navi("/favi")

   }
   const recipesHandler=(eachItems)=>{
    viewrecipesitems(eachItems)

   }
    return(
        <div>
            <NavabarRecipes></NavabarRecipes>
            <center><h3>hii jaswanth</h3></center>
           <center> <Searchs></Searchs></center>
           
            <div className="recipe-container" >
            {
                recipesList &&   recipesList.length>0 &&(
                recipesList.map(each=>{
                    return(
                        <div>
                             <Card style={{ width: '19rem',marginBottom:"15px" }}>
                             <Card.Title>{each.name}</Card.Title>
                            <Card.Img variant="top" src={each.image} />
                            <Link to={"/about"}><Button variant="primary" onClick={()=>recipesHandler(each)} className="recipe-card button" style={{marginTop:"10px",marginBottom:"10px",width:"300px"}} >view recipes</Button>
                            </Link>
                    
                    {
                        each.existInfavourite ?
                        <><Button variant="primary" onClick={gotofaviorHandler} className="recipe-card button" >go to favourite</Button></>:<><Button variant="primary"  className="recipe-card button" onClick={()=>addfaviouritehandler(each)}>add to recipes</Button> </>
                    }
                    </Card>
                    
                    </div>
                    )
                })
            )}
            </div>

        </div>
    )
}

export default Home_Recipes;
