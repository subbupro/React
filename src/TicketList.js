import TicketItem from "./TicketItem";

export default function TicketList({tickets , dispatch , sortPreference}){

    return (
        
        <div className="ticket-list">
            { tickets.length > 0 &&
             <div className="results">
            <h2>All Tickets</h2>

            <select
              value={sortPreference}
              onChange={(e) =>
                dispatch({ type: "SET_SORTING", payload: e.target.value })
              }
            >
              <option value="High to Low">High to Low</option>
              <option value="Low to High">Low to High</option>
            </select>
</div>}
        {tickets.map((ticket) => (
          <TicketItem
            key={ticket.id}
            dispatch={dispatch}
            ticket={ticket}
          ></TicketItem>
        ))}
      </div>
    )
}