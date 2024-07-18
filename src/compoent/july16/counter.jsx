import { Component } from "react";
import "./july16.css"


class CounterCompoent extends Component{
    state={
        count:0
    }
    incrhandler=()=>{
        this.setState(
            {
                count:this.state.count+1,
            },()=>{}
        )
         
    }
    dechandler=()=>{
        this.setState(
            {
               
                count:this.state.count>0 ? this.state.count -1:0
                

                
            },()=>{}
        )

    }
    resthandler=()=>{
        this.setState({
            count:0,

        },()=>{})
    }

    render(){
        return(
            <div className="bg">
            <h1 className="head">counter</h1><br></br>
            <h1 className="head">{this.state.count}</h1>
            <div>

            <button onClick={this.incrhandler} className="mg">+</button>
            <button onClick={this.dechandler} className="mg">-</button>
            <button onClick={this.resthandler} className="mg">reset</button>
            </div>
            
            </div>
        )
    }
}

export default CounterCompoent;