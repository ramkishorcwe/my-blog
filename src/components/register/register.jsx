import React from 'react'
import { useForm } from "react-hook-form";
import { Input } from '../index';
import auth from '../../appwrite/auth'

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors }, } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    const registerResponse = auth.register(data.email, data.password, data.name)
    const loginResponse = auth.login(data.email, data.password)
    console.log(registerResponse, data, loginResponse);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...{ type: 'email', label: 'Email', name: 'email', register: register }} />
        <Input {...{ type: 'password', label: 'Password', name: 'password', register: register }} />
        <Input {...{ type: 'text', label: 'Name', name: 'name', register: register }} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </>
  )
}

export default Register;