import { Component } from "react";
import "./july16.css"

class SquareCompoent extends Component{
    state={
        square:[],
        ispap:false
    }
    squares=()=>{
       const newsquare=[...this.state.square,1]
        this.setState({
            square:newsquare
        },()=>{})

    }
    abc=()=>{
        this.setState({
            ispap:!this.state.ispap,
        },()=>{})

    }

    render(){

        return(
            <>
            <h1>SquareCompoent  {this.state.square.length}</h1>
            <button onClick={this.squares}>add square</button>
            {this.state.square.map((each,index)=>{
                return(
                    <div className={
                        (index+1) %2==0 && this.state.ispap ? "squareven":"squareodd"
                    } onClick={this.abc}  >
                      <h1> {index +1}</h1>


                    </div>
                )

            })}
            </>
        )
    }
}
export default SquareCompoent;