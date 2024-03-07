
import { Route, Routes, Outlet } from "react-router-dom"
import "../App.css"
import { CustomersList } from "../components/customers/CustomersList.jsx"
import { EmployeeList } from "../components/employees/EmployeeeList.jsx"
import { TicketList } from "../components/tickets/ticketList.jsx"
import { NavBar } from "../components/nav/NavBar.jsx"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { CustomerDetails } from "../components/customers/CustomerDetails.jsx"
import { Employee } from "../components/employees/Employeee.jsx"
import { useState, useEffect } from "react"



export const ApplicationViews = () => {
    const [currentUser, setCurrrentUser] =useState({})

    useEffect( () => {
        const localHoneyUser = localStorage.getItem("honey_user")
        const honeyUserObject = JSON.parse(localHoneyUser)
        setCurrrentUser(honeyUserObject)
    },[])

    return (<Routes>
                <Route path="/" element={
                                    <>
                                        <NavBar />
                                        <Outlet />
                                    </>
                                }
                                >
                    <Route index element={<Welcome />} />
                    <Route path="tickets" element={<TicketList currentUser={currentUser}/>} />
                    <Route path="employees" >
                        <Route index element={<EmployeeList />} />
                        <Route path=":employeeId" element={<Employee />}/>
                    </Route>
                    <Route path="customers">
                        <Route index element={<CustomersList />} />
                        <Route path=":customerId" element={<CustomerDetails />} />
s
                    </Route>
                </Route>
            </Routes>
        )
}
