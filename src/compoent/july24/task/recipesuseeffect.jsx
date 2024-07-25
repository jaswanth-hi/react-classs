import axios from "axios"
import { useEffect, useState } from "react"
import Listso from "./lists"
import Table from 'react-bootstrap/Table';





const Recipeseffect=()=>{
    const[currentstate11,updaterfunction11]=useState([])
    useEffect(()=>{
        console.log("useeffect...")
        recipeshan();

    },[])

    const recipeshan=async()=>{
        try{
        const res=await axios.get("https://dummyjson.com/recipes")
        updaterfunction11((currentstate11)=>currentstate11=(res.data.recipes))

        }catch(error){
        
        }
    }

    const deletepp=(index)=>{
        const finals=currentstate11.filter((each,ind)=>{return(ind!=index)})
        updaterfunction11(finals);
    
       }
       const addss=(index)=>{
        const addfinal=currentstate11.filter((each,ind)=>{return(ind===index)})
        updaterfunction11(addfinal)
       }
return(
    <div>
        <h1>recipes useEffect</h1>
        <Table striped bordered hover >
            <thead>
                <tr>
                <th>ID</th>
              <th>Name</th>
              <th>Ingredients</th>
              <th>Instructions</th>
              <th>add items</th>
              <th>remove items</th>
                </tr>
            </thead>
            <tbody>
            {
    currentstate11.map((each,index)=>{
         return(
            <tr>
                <td> <h1>{each.id}</h1></td>
                <td> <h1>{each.name}</h1></td>
                 <td><Listso list={each.ingredients}></Listso></td>
                 <td><Listso list={each.instructions}></Listso></td>
                 <td> <button onClick={()=>addss(index)}>add</button></td>
                 
                 <td> <button onClick={()=>deletepp(index)}>delete</button></td>
                
 


            </tr>
         )
     })
 }
            </tbody>
            
            
            
            </Table> 
       
        
    </div>
)
}

export default Recipeseffect;