import axios from "axios";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Listsok from "./list";




class Recipes extends Component{
    state={
        recipe:[],
        loader:true,
        error:false,
    }
    recipesandler=async()=>{
        try{
        const {status,data} = await axios.get("https://dummyjson.com/recipes")
        if(status===200){
            this.setState({
                recipe:data.recipes,
                loader:false,
            })
        }
       
        }catch(err){
            this.setState({
                error:true,
                loader:false,
            })
        }
    }
    componentDidMount(){
        this.recipesandler();
    }
    render(){
        return(
            <>
           
            {this.state.loader ? <h1>please wait...</h1>:
            <div>
            <table className="table">
               
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">image</th>
                    <th scope="col">ingredients</th>
                    <th scope="col">instructions</th>
                    <th scope="col">prepTimeMinutes</th>
                    </tr>
                    
                </thead>
                <tbody>
                
                
            
           
                {
                    
                    
    this.state.recipe.map(each=>{
        const{name,image,id,ingredients,instructions,prepTimeMinutes}=each
        return(
           
           
                <tr>
                
                    <th  scope="row">{id}</th>
                    <td>{name}</td>
                    <td> <img src={image}  width={100} height={100}/></td>
                   <td> <Listsok  list={instructions}/> </td>
           
                   <td><Listsok  list={ingredients}/></td>
                   <td>{prepTimeMinutes}</td>
            
                                  
                   </tr> 
           
            
        )

    })
}

</tbody>
            
</table>
</div>
            
        }

            </>
        )
    }
}

export default Recipes;