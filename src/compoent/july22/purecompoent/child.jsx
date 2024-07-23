const { Component, PureComponent } = require("react");


class Childs extends PureComponent{

    componentDidMount(){
        console.log("child did mount")
    }
    render(){
        console.log("childs render ....")
        return(
            <div>
                <h2>please loading</h2>
            </div>
        )
    }
}


export  default Childs