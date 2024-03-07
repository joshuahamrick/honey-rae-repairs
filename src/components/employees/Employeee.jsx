import { useParams } from "react-router-dom"
import "./Employees.css"
import { useEffect, useState } from "react"
import { getEmployeeByUserId } from "./employeeService.jsx"

export const Employee = () => {

    const { employeeId } = useParams()

    const [employee, setEmployee] = useState({})

    useEffect(() => {
        getEmployeeByUserId(employeeId).then(employee => setEmployee(employee))
    },[])

    return (
    <section className="employee">
        <header className="employee-header">{employee.user?.fullName}</header>
        <div>
            <span className="employee-info">Email : </span>
            {employee.user?.email}
            <div>
        </div>
            <span className="employee-info">Specialty : </span>
            {employee.specialty} 
        </div>
        <div>
            <span className="employee-info">Rate : </span>
            {employee.rate}
        </div>
        <div>
            <span className="employee-info">Tickets : </span>
            {employee.employeeTickets?.length}
        </div>
    </section>
    )


    }


    // <section className="customer">
    //     <header className="customer-header">{customer.user?.fullName}</header>
    //     <div>
    //         <span  className="customer-info">Email : </span>
    //         {customer.user?.email}
    //     </div>
    //     <div>
    //         <span className="customer-info">Address : </span>
    //         {customer.address}
    //     </div>
    //     <div>
    //         <span className="customer-info">Phone Number : </span>
    //         {customer.phoneNumber}
    //     </div>
    // </section>