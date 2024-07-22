import { Component } from "react";


class Unmounting extends Component{
    constructor(){
        super();
        this.state={
            isvis:true,
        }
    }
    childsha=()=>{
        this.setState({
            isvis:!this.state.isvis,
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.isvis ? <><Child></Child></>:<><h2>no child</h2></>
                }
                <button onClick={this.childsha}>click</button>

            </div>
        )
    }
}

class Child extends Component{
    componentWillUnmount(){
        alert("i will removes")
    }
    
    render(){
        return(
            <div>
                unmonting phase...
            </div>
        )
    }
}

export default Unmounting;