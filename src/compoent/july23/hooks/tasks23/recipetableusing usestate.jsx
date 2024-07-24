
import axios from "axios"
import { useState } from "react"
import Table from 'react-bootstrap/Table';
import Listss from "./customList";




const Userabc=()=>{
    const[currentstate3,updaterfunction3]=useState([])
   const recipeshandler=async()=>{
    try{
        const res=await axios.get("https://dummyjson.com/recipes")
        
            updaterfunction3((currentstate3)=>currentstate3=(res.data.recipes))
        
    }catch(err){

    }
   }
  const deletepp=(index)=>{
    const finals=currentstate3.filter((each,ind)=>{return(ind!=index)})
    updaterfunction3(finals);

   }
   const addss=(index)=>{
    const addfinal=currentstate3.filter((each,ind)=>{return(ind===index)})
    updaterfunction3(addfinal)
   }
    return(
        <div>
            <h1 style={{textAlign:"center"}}>recipes</h1>
            <button onClick={recipeshandler}>add recipes</button>
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

                
    currentstate3.map((each,index)=>{
       
        
        return(
            <tr key={index}>
               
                 <td><h4>{each.id}</h4></td>
                 <td><h4>{each.name}</h4></td>
                 <td>< Listss list={each.ingredients} /></td>
                 <td>< Listss list={each.instructions} /></td>
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

export default Userabc;