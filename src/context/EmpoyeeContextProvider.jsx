import { createContext, useContext, useState } from "react";
import EmpoyeeJson from "../assets/Empoyees.json";

const EmpoyeeContext = createContext();
const EmpoyeeContextProvider = ({children}) => {
    const [empoyees, setEmpoyees] = useState(EmpoyeeJson);
    // console.log(children, empoyees);
    

    return <EmpoyeeContext.Provider value={ {empoyees, setEmpoyees}  }>
        {children}
    </EmpoyeeContext.Provider>
}
export default EmpoyeeContextProvider;

export const useEmpoyee = () => {
    const context = useContext(EmpoyeeContext);
    // console.log("useEmpoyee",context);
    
    if (!context) {
        throw "not any Empoyees!";
    }

    return context;
}