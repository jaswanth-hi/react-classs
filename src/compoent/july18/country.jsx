import axios from "axios";
import { Component } from "react";


class Countryapi extends Component{

     state={
        country:[],
        loader:true,
        error:false,
     }
     Countryandler=async()=>{
        
        try{
            const {status,data}= await axios.get("https://restcountries.com/v3.1/all");
           if(status===200){
            this.setState({
                country:data,
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
        this.Countryandler()
    }

     
    render(){
        return(

            <>
            <h2>countryname</h2>
            {/* <button onClick={this.Countryandler}>click</button> */}
            
            {
                this.state.loader ?
               <><h2>pleaseWait....</h2></> :
               <>
               {
               this.state.country.map(each=>{
                return(
                
                    
                    <h1>{each.name.official}</h1>
                )
                    
                   
                
               })
               }
               
               
               </>
            }
            
            
            </>
        )
    }
}
export default Countryapi;