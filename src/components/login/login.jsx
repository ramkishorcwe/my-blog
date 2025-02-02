import { useForm } from "react-hook-form";
import { Input } from '../index';
import { useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Container from "../utils/container";
import { login as authLogin } from '../../store/auth-reducer'
import authService from '../../appwrite/auth'
import { Card, Flex } from "antd";
import envConfig from '../../environmentConfig'
import { HomeFilled } from "@ant-design/icons";
import OAuthLogin from "./oauth-login";

const Login = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  // const userAuth = useSelector((store) => store.authState.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    console.log(data)
    // console.log(watch("name")) // watch input value by passing the name of it
    try {
      const session = await authService.login(data)
      if (session) {
        const userData = await authService.getUser()
        if (userData) dispatch(authLogin({ userData: userData, status: true }));
        // const myUrl = new URL("/", envConfig.clientBaseUrl);
        // location.href = myUrl.href
        navigate('/')
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  const userLoginStatus = async () => {
    try {
      const user = await authService.getUser()
      if (user) {
        navigate('/')
      }
    } catch (error) {
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
      <Card justify={"center"} gap={40}>
        <Flex>
          <img style={{ width: 400, height: 250 }} src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" alt="..." />

          <Flex vertical={true}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <input defaultValue="test" {...register("example")} /> */}
              {/* <input {...register("exampleRequired")} /> */}
              <Input {...{ type: 'text', placeholder: 'Email', label: 'Email', name: 'email', register: register }} />
              <Input {...{ type: 'password', label: 'Password', name: 'password', register: register }} />
              {errors.exampleRequired && <span>This field is required</span>}
              <input type="submit" />
            </form>
            <Flex>
              <Flex>
                <Link to={'/'}> <HomeFilled /></Link>
              </Flex>
              <Flex>if not register?-
                <Link to={'/register'}> Register</Link></Flex>

              <OAuthLogin />
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Container>
  </>)
}
export default Login;
