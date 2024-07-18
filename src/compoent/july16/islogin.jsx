import { Component } from "react";

class Logincompent extends Component{
    state={
        islogin:false,
        text1:"true",
        text2:"false",

    }
    handlerclick=()=>{
        this.setState(
            {islogin :!this.state.islogin},()=>{}

        )
    }

    render(){
        return(
            <div>
                <button onClick={this.handlerclick}>{this.state.islogin ? <h2>{this.state.text2}</h2>:<h2>{this.state.text1}</h2>}</button>
                {this.state.islogin ? <><h2>to click the button i get true</h2></>:<><h2>to click te button i get false</h2></>}
            </div>
        )
        
    }
}
export default Logincompent;