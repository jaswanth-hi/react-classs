
import { Component } from "react";
import Childs from "./child";



class Parents extends Component{
    state={
        iskk:false,


    }
    handlerparent=()=>{
        this.setState({
            iskk:!this.state.iskk,
        })
    }
    componentDidMount(){
        console.log("parent did")
    }
    render(){
        console.log("parent render...")
        return(
            <div>
                <Childs></Childs>
                <button onClick={this.handlerparent}>click</button>

               
            </div>
        )
    }
}

export default Parents;