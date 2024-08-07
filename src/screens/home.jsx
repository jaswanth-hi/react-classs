import { useContext, useState } from "react"
import Navabar from "../compoent/navabar/navabar";
import { Datas } from "../App";
import "./screen.css";
import RecipesFinder from "../compoent/aug1/recipessOption";
import CounApi from "../compoent/aug1/country";
import Usereducer from "../compoent/aug2/usereducer/usereducer";
import TodoUseReducer from "../compoent/aug2/usereducer/todolist";



const Homescreen=()=>{
    const globaldata=useContext( Datas);
   
    // const [states,setstaes]=useState([])
    
      
    
    return(
        <div className={`${globaldata. darkss ?"dark":"light"}`}>
            <Navabar></Navabar>
            <TodoUseReducer></TodoUseReducer>
            {/* <h2>welcome homes screen  {globaldata.name} {globaldata.count}</h2>
            <RecipesFinder />

           
            <CounApi/>
            <h1>useredcer</h1>
            <Usereducer></Usereducer>
             */}



            
           

            {/* <img src="https://jshleap.github.io/assets/images/recipes.jpg" height={1200} width={1200}/> */}
            <h1>CountryApisss</h1>
        </div>
    )
}
export default Homescreen