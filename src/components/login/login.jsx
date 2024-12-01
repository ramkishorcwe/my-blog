import { useForm } from "react-hook-form";
import { Input } from '../index';
import { useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Container from "../utils/container";
import { login as authLogin } from '../../store/auth-reducer'
import authService from '../../appwrite/auth'

const Login = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const userAuth = useSelector((store) => store.authState.status);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data)
    // console.log(watch("name")) // watch input value by passing the name of it
    try {
      const session = await authService.login(data)
      if (session) {
        const userData = await authService.getCurrentUser()
        if (userData) dispatch(authLogin(userData));
        navigate("/")
      }
    } catch (error) {
      console.log(error.message)
    }

    navigate('/')
  }
  const userLoginStatus = async () => {
    try {
      const user = await authService.getUser()
      if (user) {
        navigate('/')
      }

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    userLoginStatus()
    // if (userAuth === true) {
    //   navigate('/')
    // }
  }, [])

  return (<>
    <Container >
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input defaultValue="test" {...register("example")} /> */}
        {/* <input {...register("exampleRequired")} /> */}
        <Input {...{ type: 'text', placeholder: 'Name', label: 'Name', name: 'name', register: register }} />
        <Input {...{ type: 'password', label: 'Password', name: 'password', register: register }} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
      if not register?-
      <Link to={'/register'}> Register</Link>
    </Container>
  </>)
}
export default Login;
