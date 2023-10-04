import React from 'react'
import '../Assert/css/AdminNavbar.css'
import { useSelector} from 'react-redux'
import { selectUser } from '../Redux/userSlice'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const nav=useNavigate
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
 

  return (
    <div className='navbar1'>
    <div className='navbar-container1'>

    <div>
    <ul id='navbar1'>
    <li>
    <span style={{cursor:'pointer'}}> Welcome {username}!</span>
    </li>
    </ul>
    </div>
    </div>
    </div>
  )
}
