import { useEffect, useState } from "react"
import { getNonStaffUsers } from "./userService.jsx"
import "./Customers.css"
import { User } from "../../users/User.jsx"
export const CustomersList = () => {
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        getNonStaffUsers().then(noStaffArray => {
            setCustomers(noStaffArray)})
    },[])

    return(
        <>
        <div className="customers">
            {customers.map(customerObj => {
                return <User user={customerObj} key={customerObj.id}/>
            })}
        </div>
        </>
    )
}