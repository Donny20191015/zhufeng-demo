import { useEmpoyee } from "../context/EmpoyeeContextProvider";

const allDepartments = () => {
    const {empoyees} = useEmpoyee();

    const tmpMap = new Map(Array.from(empoyees).map((item) => ([item.department, item])));
    
    const departments = Array.from(tmpMap.keys());
    const departmentObj = Array.from(tmpMap.values());

    return { departments, departmentObj }
}

const DemoArray = () => {
    
    const { departments, departmentObj } = allDepartments();
    
    // console.log(departments);
    

    return <div>
        <span>All Departments</span>
        <ul>
            {
                departmentObj.map((item, index) => (<li key={index}>{item.department}</li>))
            }
        </ul>
    </div>
}
export default DemoArray;