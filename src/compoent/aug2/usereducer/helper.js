


 export const actionType={
    BOOKS_TICKETS:" BOOKS_TICKETS",
    CANCEL_TICKETS: " CANCEL_TICKETS",
    CHANGE_TOTAL_TICKETS:"CHANGE_TOTAL_TICKETS",
    CHANGE_MOVIE:"CHANGE_MOVIE"
}

export const reducer=(state,action)=>{
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
export const initialState={
    movieTheater:"pvr",
    movieName:"Devara",
    location:"lulu",
    totalTickets:100,
    bookedTickets:26,
    currentAvaiableTicket:74,



}