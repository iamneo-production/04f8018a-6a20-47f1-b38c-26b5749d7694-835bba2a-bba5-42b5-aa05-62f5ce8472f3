import React from 'react'
import reservedlist from '../Components/reservedlist.json'
import '../Assert/css/ReservedList.css'
import AdminNavbar from '../Components/AdminNavbar'
import AdminSidebar from '../Components/AdminSidebar'
import AdminFooter from '../Components/AdminFooter'
function ReservedList() {
  return (
    <>
    <AdminNavbar/>
    <AdminSidebar/>
    <div className='reservelist'>
    <div className='containers'>
    <center><h2>Reserved List</h2></center>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>CheckIn Date</th>
          <th>CheckOut Date</th>
          <th>Room Types</th>
          <th>Bill</th>
          <th>Status</th>
          </tr>
      </thead>
      <tbody>
        {reservedlist.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.checkindate}</td>
            <td>{item.checkoutdate}</td>
            <td>{item.roomtypes}</td>
            <td>{item.bill}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
    <AdminFooter/>
    </>
  )
}

export default ReservedList