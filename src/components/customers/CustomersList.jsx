import { useEffect, useState } from "react"
import { getNonStaffUsers } from "./userService.jsx"
import "./Customers.css"
import { User } from "../../users/User.jsx"
import { Link } from "react-router-dom"
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
                return (
                    <Link to={`/customers/${customerObj.id}`}> 
                        <User user={customerObj} key={customerObj.id} />
                    </Link>
                )
            })}
        </div>
        </>
    )
}