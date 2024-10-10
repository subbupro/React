export default function ticketReducer(state, action)
{
    switch(action.type)
    {
        case "ADD_TICKETS":
            return {...state , tickets :[ ...state.tickets, action.payload]  };
            
            case "UPDATE_TICKETS":
                return {...state , tickets : state.tickets.map((t) => 
                    t.id === action.payload.id ? action.payload : t
                )};
                // return {
                //     ...state,
                //     tickets: state.tickets.map((ticket) =>
                //       ticket.id === action.payload.id ? action.payload : ticket
                //     )
                   
                //   };
                case "DELETE_TICKETS":
                return {
                ...state, tickets: state.tickets.filter(t => t.id !== action.payload.id)
                };

                case  "SET_EDITING_TICKET":
                    return {
                        ...state , 
                        editingTicket: action.payload

                    }
                case "CLEAR_EDITING_TICKET":
                return {
                    ...state,
                    editingTicket: null,
                };
                case "SET_SORTING":
                    return {
                        ...state,
                        sortPreferences : action.payload
                    }

            default:
                return state;
    }
}