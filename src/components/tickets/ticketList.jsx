import { useEffect, useState } from "react"
import {getAllTickets } from "../.././services/ticketServices.jsx"
import "./Tickets.css"
import { Ticket } from "./Ticket.jsx"
import { TicketFilter } from "./TicketFilter.jsx"


export const TicketList = ({ currentUser }) => {

  //variables
  const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
  const [showFilteredTickets, setFilteredTickets] = useState(allTickets)
  const [searchTerm, setSearchTerm] = useState("")

  const getAndSetTickets = () => {
    getAllTickets().then(ticketsArray => {
      setAllTickets(ticketsArray)
    })}
//render control functions
  useEffect(() => getAndSetTickets(), [])

  
  useEffect(() => {
      const foundTickets = allTickets.filter((ticket) => 
        ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredTickets(foundTickets)
   },[searchTerm, allTickets])
  
  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true)
      setFilteredTickets(emergencyTickets)
    } else{
      setFilteredTickets(allTickets)
    }
  }, [showEmergencyOnly, allTickets])
  

//create html string
  return (
      <div className="tickets-container">
        <h2>Tickets</h2>
        <TicketFilter setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerm={setSearchTerm}/>
        <article className="tickets">
        {showFilteredTickets.map((ticketObj) => {
          return (
            <Ticket ticket={ticketObj} 
                    key={ticketObj.id} 
                    currentUser={currentUser}
                    getAndSetTickets={getAndSetTickets}/>
          )
        })}

        </article>
      </div>
    )
}