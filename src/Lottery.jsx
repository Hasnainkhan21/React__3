import { useState } from "react";
import {genTicket, sum} from "./TicketGen";
import Ticket from "./Ticket";

export default function Lottery({n=3, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n))

    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    }

    return(
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
            <Ticket ticket={ticket}/>
            </div>
            <button onClick={buyTicket} style={{backgroundColor: "transparent", border: "1px solid black"}}>Buy New Ticket</button>
            <h3>{isWinning && "Congrats! You won"}</h3>
        </div>
    )
}