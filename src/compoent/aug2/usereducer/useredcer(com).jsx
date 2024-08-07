import { useReducer } from "react";
import { initialState, reducer } from "./helper";
import { actionType } from "./helper";








const Usereducersss=()=>{
    const [currentState,dispatchFunction]=useReducer(reducer,initialState)
    const ticketsandler=()=>{
        dispatchFunction({
            type:actionType.BOOKS_TICKETS,
            payload:1,
        })
    }
    const canceltickets=()=>{
        dispatchFunction({
            type:actionType.CANCEL_TICKETS,
            payload:1,
        })
    }
    const moviename=()=>{
        dispatchFunction({
            type:actionType.CHANGE_MOVIE,
            payload:"RRR",
        })
    }
    return(
        <div>
            <h1>num_of_tickets:-{currentState.totalTickets}</h1>
            <h1>num_of_ava_tickets:-{currentState.bookedTickets}</h1>
           
            <button onClick={ticketsandler}>Booking tickets</button>
            <button onClick={canceltickets}>cancel tickets</button>
            <h1>moviename:{currentState.movieName}</h1>
            <button onClick={moviename}>change name</button>


        </div>
    )
    

}
export default Usereducersss;