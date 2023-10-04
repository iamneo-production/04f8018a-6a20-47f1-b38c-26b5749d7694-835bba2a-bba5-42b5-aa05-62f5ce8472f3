import React, { useState } from 'react'
import { Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import '../Assert/css/Signup.css';
import { login } from '../Redux/userSlice';
import { useDispatch } from 'react-redux';

export default function Signup() {
  const navigate = useNavigate();
  const [username, setName] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();
  const formHandler = (e) => {
    e.preventDefault();
    // Reset all previous error messages
    setNameError('');
    setPhoneError('');
    setEmailError('');
    setPasswordError('');

    let isValid = true;

    if (username.trim() === '') {
      setNameError('Name is required.');
      isValid = false;
    }

    if (phoneno.trim() === '' || !/^\d{10}$/.test(phoneno)) {
      setPhoneError('Phone number is invalid.');
      isValid = false;
    }
    if (email.trim() === '' || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid.');
      isValid = false;
    }

    if (password.trim() === '' || password.length < 8 || password.length > 16) {
      setPasswordError('Password must be between 8 and 16 characters.');
      isValid = false;
    }

    if (username && phoneno && email && password && isValid) {


      dispatch(login(username));
      navigate('/home');

    }

  }
  return (
    <>
    <div className='body1'>
    <div className='layer1'>
      <div className='rectangle1'></div>
      <div className='signup'>
        <b>SIGNUP</b></div>

      <div className='form1'>
        <form onSubmit={formHandler}>

          Name: <input Type="text30" value={username} placeholder="Name" onChange={(e) => setName(e.target.value)} /><br /><br />
          <div>
            <center>
              {nameError && username.length === 0 ?(
                <label style={{ color: 'Red', fontSize:'20px'}}>{nameError}</label> ): ""}
            </center></div>
          Phone: <input type="text15" value={phoneno} placeholder="phone no" maxLength={10} onChange={(e) => setPhoneno(e.target.value)} /><br /><br />
          <div>
            <center>
              {phoneError && phoneno.length === 0 ?(
                <label style={{ color: 'Red',fontSize:'20px' }}>{phoneError}</label>) : ""}
            </center></div>
          Email Id: <input type="text100" value={email} placeholder="Email-id" onChange={(e) => setEmail(e.target.value)} /><br /><br />
          <div>
            <center>
              {emailError && email.length === 0 ?(
                <label style={{ color: 'Red',fontSize:'20px' }}>{emailError}</label>) : ""}
            </center></div>
          Password: <input type="password" value={password} placeholder="Password" minLength={8} maxLength={16} onChange={(e) => setPassword(e.target.value)} /><br />
          <div>
          <center>
              {passwordError && password.length === 0 ?(
                <label style={{ color: 'Red',fontSize:'20px' }}>{passwordError}</label>) : ""}
          </center></div>
          <br />
          <h5><Button type="submit" class='but'>REGISTER</Button></h5><br />
        </form></div>
        </div>
    </div>
    </>

  )
}