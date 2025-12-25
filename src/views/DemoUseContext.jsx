import { useState } from "react";
import { createContext, useContext } from "react";
import Empoyees from "../assets/Empoyees.json"

const context = createContext();
const ContextProvider = ({children}) => {
    const empoyees = useState(Empoyees);

    return <div>

    </div>
}

const DemoUseContext = () => {


    return <div>
        
    </div>
}
export default DemoUseContext;