import { useContext, useState } from "react"
import Navabar from "../compoent/navabar/navabar";
import { Datas } from "../App";
import "./screen.css";
import RecipesFinder from "../compoent/aug1/recipessOption";
import CounApi from "../compoent/aug1/country";
import Usereducer from "../compoent/aug2/usereducer/usereducer";
import TodoUseReducer from "../compoent/aug2/usereducer/todolist";
import ExamplesUsememo from "../compoent/aug7/usememoex3";
import ExamplesCustomHooks from "../compoent/aug7/CustomHooks/customhooksusing";
import { UseAxios } from "../compoent/aug7/CustomHooks/useaxios";



const Homescreen=()=>{
    const globaldata=useContext( Datas);
    const [data,error,loading]=UseAxios()
    console.log(data)
   
    // const [states,setstaes]=useState([])
    if(error){
        return(
            <div>
            <Navabar></Navabar>
            <h3>some thing went wrong</h3>
            </div>
        )
    }

    
      
    
    return(
        <div>
            <Navabar></Navabar>
            <h3>welcome to about spinner</h3>
            {loading ? <>welcome data</>:<>{

                data.map((each,index)=>{
                    return(
                        <div>
                            <h1>{each.title}</h1>
                        </div>
                    )
                })
            }</>}
           
           
             



            
           

           
             {/* <TodoUseReducer></TodoUseReducer> */}
            {/* <h2>welcome homes screen  {globaldata.name} {globaldata.count}</h2>
            <RecipesFinder />

           
            <CounApi/>
            <h1>useredcer</h1>
            <Usereducer></Usereducer>
             */}
             {/* <ExamplesUsememo></ExamplesUsememo> */}
             {/* <ExamplesCustomHooks></ExamplesCustomHooks> */}
              {/* <img src="https://jshleap.github.io/assets/images/recipes.jpg" height={1200} width={1200}/> */}
            {/* <h1>CountryApisss</h1> */}
        </div> 
    )
}
export default Homescreen