import { useContext, useState } from "react"
import Navabar from "../compoent/navabar/navabar";
import { Datas } from "../App";
import "./screen.css";
import RecipesFinder from "../compoent/aug1/recipessOption";
import CounApi from "../compoent/aug1/country";



const Homescreen=()=>{
    const globaldata=useContext( Datas);
   
    // const [states,setstaes]=useState([])
    
      
    
    return(
        <div className={`${globaldata. darkss ?"dark":"light"}`}>
            <Navabar></Navabar>
            <h2>welcome homes screen  {globaldata.name} {globaldata.count}</h2>
            <RecipesFinder />

            <h1>CountryApi</h1>
            <CounApi/>
            



            
           

            {/* <img src="https://jshleap.github.io/assets/images/recipes.jpg" height={1200} width={1200}/> */}
        </div>
    )
}
export default Homescreen