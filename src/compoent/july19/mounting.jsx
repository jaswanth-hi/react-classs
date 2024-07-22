import { Component } from "react";
import axios from "axios";

class Mountingphase extends Component{
    constructor(){
        console.log("constructor is calling ......")
        super();
        this.state={
            color:"blue",
            recipe:[],
            error:false,
            loader:true,

        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProp ........",state)
        return {color:props.my}
    }
    componentDidMount(){
        console.log("componentDidMount")
        this.recipesandler();
        
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
    render(){
        console.log("render is  calling ....")
        return(
            <>
            <h2  style={{color:this.state.color}}>examples of mounting stage{this.state.color}</h2>
            </>
        )
    }
}

export default Mountingphase;