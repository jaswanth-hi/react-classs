import { Component } from "react";

class TodoCompoent extends Component{
    state={
        todo:["woke up to 8am"]
    }
    todohandler=()=>{
        const newstate=[...this.state.todo,"break fast at 9am"]
        this.setState(
           { todo:newstate}
        )

    }
    render(){
        return(
            <>
            <h2>i am todo</h2>
            <ol>
            {
                this.state.todo.map(each=>{return(
                    <li>{each}</li>)
                })
            }
            </ol>
            <button onClick={ this.todohandler}>add to todo</button>
            </>
        )
    }
}
export default TodoCompoent;