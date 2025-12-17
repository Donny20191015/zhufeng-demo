import { createContext, use, useContext, useEffect, useState } from "react";


import tickets from "../assets/tickets.json";
export const TicketContext = createContext();
export const TicketProvider = ({ children }) => {
    const [tickets, setTickets] = useState(tickets);

    return (
        <TicketContext.Provider value={tickets}>
            {children}
        </TicketContext.Provider>
    )
}


const DemoReadJson = () => {
    const tickets = useContext(TicketContext);
    console.log("ss:", tickets);
    
    useEffect(() => {

console.log("ss:", tickets);
    })
        

    return (
        <div>DemoReadJson</div>
    )
}
export default DemoReadJson;