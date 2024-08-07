import { useReducer } from "react";

const actionType={
    ADD_TODO:"ADD_TODO",
    DELETE_TODO:"DELETE_TODO",
    DELETE_ALL_TODO:"DELETE_ALL_TODO",
}
const initialState={
    todos:[],
}
const reducer=(state,action)=>{
    switch(action.type){
        case actionType.ADD_TODO:
            return{...state,todos:[...state.todos, action.payload]}
        case actionType.DELETE_TODO:
            return{...state,todos: state.todos.filter((eachtodo,index)=>index!==action.payload),}
        case actionType.DELETE_ALL_TODO:
            return{...state,todos:[]}
        default:
            return state;
    }




}

const TodoList=()=>{
    const [currentState,dispatchFunction]=useReducer(reducer,initialState);
    let input;
    const add_todos=()=>{
        if(input.value.trim()){
            dispatchFunction({
                type:actionType.ADD_TODO,payload:input.value
                
            })
            input.value="";
            
        }

    }
    const delete_all_todos=()=>{
        dispatchFunction({
            type:actionType.DELETE_ALL_TODO
        })

    }
    const deletetodo=(index)=>{
        dispatchFunction({
            type:actionType.DELETE_TODO,payload:index

        })
    }
    return(
        <div>
            <form onSubmit={(todosss) => todosss.preventDefault()}>
                <label  htmlFor="addss"></label>
                <input
                id="addss"
                type="text"
                ref={(word)=>(input=word)}
                
                />
                <input type="button" value="add todos"  onClick={add_todos}/>
                <input type="button" value="delete all todos"  onClick={delete_all_todos}/>
                

            </form>
            <ul>
                {
                    currentState.todos.map((each,ind)=>{
                        <li>
                            {each}
                            <button onClick={()=>{deletetodo(ind)}}>deletess</button>
                        </li>
                    })
                }
                </ul>

        </div>

    )
}
export default TodoList;