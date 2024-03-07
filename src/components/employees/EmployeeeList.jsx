import { useState, useEffect } from "react"
import { getUsersEmployees } from "./userServiceEmployees.jsx"
import "./Employees.css"
import { User } from "../../users/User.jsx"
import { Link } from "react-router-dom"

export const EmployeeList = () => {

    //declare react variable
    const [employees, setEmployees] =  useState([])

    //populate the employees from a fetch and on first render
    useEffect(() => {
        getUsersEmployees().then(employeesArray => {
            setEmployees(employeesArray)
        })
    }, [])

    //return some html
    return (
        <>
        <div className="employees">
            {employees.map(employeeObj => {
                return (
                <Link key={employeeObj.id} to={`/employees/${employeeObj.employees[0]?.id}`}>
                    <User key={employeeObj.id} user={employeeObj} />
                </Link>
                )
            })}
       
        </div>
        </>
    )
}
