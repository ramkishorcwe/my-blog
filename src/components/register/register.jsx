import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Input } from '../index';
import auth from '../../appwrite/auth'
import Container from '../utils/container';

const Register = ({ children }) => {
  const { register, handleSubmit, watch, formState: { errors }, } = useForm();
  const [loader, setLoader] = useState(false);
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
      console.log(registerResponse, data, loginResponse);
    } catch (error) {
      console.log(error)
    } finally {
      setLoader(false)
    }

  }
  return (
    <Container>
      <h1>Register</h1>
      {loader ? "Loading..." : <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...{ type: 'email', label: 'Email', name: 'email', register: register }} />
        <Input {...{ type: 'password', label: 'Password', name: 'password', register: register }} />
        <Input {...{ type: 'text', label: 'Name', name: 'name', register: register }} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>}
    </Container>
  )
}

export default Register;