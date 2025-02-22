import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router';
import { useForm } from "react-hook-form";
import { Input } from '../index';
import auth from '../../appwrite/auth'
import Container from '../utils/container';
import './register.css'
import { Card } from 'antd';

const Register = ({ children }) => {
  const { register, handleSubmit, watch, formState: { errors }, } = useForm();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  // useEffect(()=>{
  // try {

  // } catch (error) {

  // }
  // auth.getUser();
  // }, []);
  const onSubmit = (data) => {
    console.log(data)
    try {
      setLoader(true)
      const registerResponse = auth.register(data.email, data.password, data.name)
      const loginResponse = auth.login(data.email, data.password)
      navigate('/')
      console.log(registerResponse, data, loginResponse);
    } catch (error) {
      console.log(error)
    } finally {
      setLoader(false)
    }

  }
  return (
    <Container className="register-container">
      <h1 className='main-heading'>Register</h1>
      <Card>
        {loader ? "Loading..." : <form onSubmit={handleSubmit(onSubmit)}>
          <Input  {...{ type: 'email', label: 'Email', className: 'input', name: 'email', register: register }} />
          <Input {...{ type: 'password', label: 'Password', className: 'input', name: 'password', register: register }} />
          <Input {...{ type: 'text', label: 'Name', className: 'input', name: 'name', register: register }} />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" />
        </form>}
        <span>already have an account <Link to={'/login'}> Login</Link></span>
      </Card>
    </Container>
  )
}

export default Register;