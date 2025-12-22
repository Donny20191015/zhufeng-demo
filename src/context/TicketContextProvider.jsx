import { createContext, useContext, useState } from "react";
import ticketJson from "../assets/tickets.json";

const TicketContext = createContext();
const TicketContextProvider = ({children}) => {
    const tickets = useState(ticketJson);

    return <TicketContext.Provider value={ tickets }>
        {children}
    </TicketContext.Provider>
}
export default TicketContextProvider;

export const useTicket = () => {
    const context = useContext(TicketContext);

    if (!context) {
        throw "not any tickets!";
    }

    return context;
}