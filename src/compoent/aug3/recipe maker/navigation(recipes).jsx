import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home_Recipes from "./home(recipes)";
import About_Recipes from "./about(recipes)";
import Setting_Recipes from "./setting(recipes)";
import Blog_Recipes from "./blog(recipes)";
import Invalidscreen_recipes from "./invalid(recipes)";
import axios from "axios";
import {  createContext, useEffect, useState } from "react";
import FavouriteRecipes from "./favouriteRecipes";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



export const Recipes_Context=createContext()

const NavigationRecipes=()=>{
    const [recipesList,setrecipess]=useState([])
    const[favourite,setfavourite]=useState([])
    const[searchC,setsearchC]=useState("")
    const[filters,setfilters]=useState([])
    const[viewrecipes,setviewrecipes]=useState({})
    
    useEffect(()=>{
        Fetch_data()
    },[])
    useEffect(()=>{
        const results=recipesList.filter(recipes=>recipes.name.toLowerCase().includes(searchC.toLowerCase()))
        setfilters(results)

    },[searchC,recipesList])
    const Fetch_data=async(searchInput="")=>{
        try{
            const {data,status}=await axios.get(`https://dummyjson.com/recipes/search?q=${searchInput}`)
            const newdata=data.recipes.map((each)=>{return{...each,existInfavourite:false}})
            if(status===200){
              
                setrecipess(newdata)
            }

        }catch(err){

        }

    }

    const addfavouriteHandler=(newDish)=>{
        const res=favourite.find((each)=>{
            return(
                each.id==newDish.id
            )
        })

        const newrecipesList=recipesList.map((each,index)=>{
           if(each.id==newDish.id){
            return{...each,existInfavourite:true}

           }
           else{
            return each
           }
        })
        setrecipess(newrecipesList)
        if(!res){

            setfavourite([...favourite,newDish])
            toast.success("add to favourite !", {
                position: "top-right"
              });

        }
        else{
            toast.error("already food is exists !", {
                position: "top-right"
              });

        }
       

    }
    const removefavio=(id)=>{
        const newrecipesList=recipesList.map((each,index)=>{
            if(each.id==id){
             return{...each,existInfavourite:false}
 
            }
            else{
             return each
            }
         })
         setrecipess(newrecipesList)
        const newaddfood=favourite.filter((each)=>{return(each.id!=id)})
        setfavourite(newaddfood)

    }
    const viewrecipesitems=(eachRec)=>{
        setviewrecipes(eachRec)

    }
    return(
        <Recipes_Context.Provider value={{
            recipesList:recipesList,
            favourite:favourite,
            addfavouriteHandler:addfavouriteHandler,
            removefavio: removefavio,
            setsearchC:setsearchC,
            Fetch_data:Fetch_data,
            viewrecipesitems:viewrecipesitems,
            viewrecipes:viewrecipes,



        }}>
            <BrowserRouter>
        <Routes>
            <Route path="/" element={< Home_Recipes/>} />
            <Route path="/setting" element={<Setting_Recipes/>} />
            <Route path="/blog" element={< Blog_Recipes />} />
            <Route path="/about" element={<About_Recipes />} />
            <Route path="*" element={<Invalidscreen_recipes/>}/>
            <Route path="/favi" element={<FavouriteRecipes/>}/>







            {/* <Route path="/user" element={<Userscreen/>}/>
            <Route path="/user/:userId" element={<Userscreen/>}/> */}
            
            



            
        </Routes>
        </BrowserRouter>
        <ToastContainer />

        </Recipes_Context.Provider>
    )
}
export default NavigationRecipes;