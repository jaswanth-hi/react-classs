import { useReducer } from "react";



const actionType={
    BOOKS_TICKETS:" BOOKS_TICKETS",
    CANCEL_TICKETS: " CANCEL_TICKETS",
    CHANGE_TOTAL_TICKETS:"CHANGE_TOTAL_TICKETS",
    CHANGE_MOVIE:"CHANGE_MOVIE"
}

const reducer=(state,action)=>{
    switch(action.type){
        case actionType.BOOKS_TICKETS:
            return{...state,bookedTickets:state.bookedTickets+action.payload,
                currentAvaiableTicket:state.currentAvaiableTicket-action.payload}
        case actionType.CANCEL_TICKETS:
            return{...state,bookedTickets:state.bookedTickets-action.payload,
                currentAvaiableTicket:state.currentAvaiableTicket+action.payload}
        case actionType.CHANGE_TOTAL_TICKETS:
            return{...state,bookedTickets:state.totalTickets+action.payload}
        case actionType.CHANGE_MOVIE:
            return{...state,movieName:action.payload}

    }


}
const initialState={
    movieTheater:"pvr",
    movieName:"Devara",
    location:"lulu",
    totalTickets:100,
    bookedTickets:26,
    currentAvaiableTicket:74,



}

const Usereducer=()=>{
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
            payload:"og",
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
export default Usereducer;