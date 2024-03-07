export const getEmployeeByUserId = (userId) => {  
    return fetch(`http://localhost:8088/employees/${userId}?_expand=user&_embed=employeeTickets`).then(res => res.json())
}