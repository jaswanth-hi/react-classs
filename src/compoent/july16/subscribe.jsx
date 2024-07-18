import { Component } from "react";

class subscribecompent extends Component{
    //react state
    state={
        isSubscribe:true,
        text1:"subscribe",
        text2:"subscribed"
    }
    handlerclick=()=>{
        this.setState(
            {isSubscribe:!this.state.isSubscribe},()=>{}
        )
    }
    render(){
        return(
            <div>
            <button onClick={this.handlerclick}>{this.state.isSubscribe ? this.state.text2:this.state.text1}</button>
            {this.state.isSubscribe ? <><h2>thank you sub</h2></>:<><h2>please sub</h2></>}
            </div>

        )
    }
}
export default subscribecompent