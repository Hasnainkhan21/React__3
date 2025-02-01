import React from 'react';
import TicketNum from './TicketNum'; // Import TicketNum from TicketNum.jsx
import "./Ticket.css"

export default function Ticket({ ticket }) {
  return (
    <div className='map'>
      <p>Ticket</p>
      {ticket.map((num, idx) => (
        <TicketNum key={idx} num={num} /> 
      ))}
    </div>
  );
}