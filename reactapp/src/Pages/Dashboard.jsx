import React from 'react'
import { useSelector} from 'react-redux'
import { selectUser } from '../Redux/userSlice'
import { PieChart } from '@mui/x-charts/PieChart';
import '../Assert/css/Dashboard.css'
import Layout from '../Components/Layout'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Leftbar from '../Components/Leftbar'
import AdminNavbar from '../Components/AdminNavbar'
import AdminSidebar from '../Components/AdminSidebar'


function Dashboard() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
    //const user=useSelector(selectUser)
    
   
    return (
      <>
      <Navbar/>
      <Leftbar/>
      <div className='board'>
      <div className='dash'>
      <h1>Dashboard</h1>
      <div className='nor'>
      <div className='bor'>
      <h5>157<br/>
      <br/>
      No.of Rooms</h5>
      </div>
      <div className='bor'>
      <h5>34<br/>
      <br/>
      Vacant Rooms</h5>
      </div>
      <div className='bor'>
      <h5>50<br/>
      <br/>
      Today's Booking</h5>
      </div>
      <div className='bor'>
      <h5>140<br/>
      <br/>
      Bookings This Month</h5>
      </div>
  
      </div>
      <div className='bar'>
      <h3>Booking Status</h3>
    </div>
   </div>
   </div>
  <Footer/>
  
      </>
    )
}

export default Dashboard