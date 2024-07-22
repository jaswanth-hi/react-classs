import { Component } from "react";

class Updatingpase extends Component{
    constructor(){
        super();
        this.state={
            no_of_cakes:100,
        }
    }
    update=()=>{
        this.setState({
            no_of_cakes:this.state.no_of_cakes-1
        })
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("get",prevstate)
        return null
    }
    componentDidMount(){
        document.title=`no_of_cakes${this.state.no_of_cakes}`
    }
    componentDidUpdate(){
        document.title=`no_of_cakes ${this.state.no_of_cakes}`
    }

    render(){
        console.log("render")
        return(
            
            <>
            <h1>no_of_cakes{this.state.no_of_cakes}</h1>
            <button onClick={this.update}>click</button>
            </>
        )
    }
}

export default Updatingpase;