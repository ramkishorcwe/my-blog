import { useForm } from "react-hook-form";
import { Input } from '../index';
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import Container from "../utils/container";
import { login as authLogin } from '../../store/auth-reducer'
import authService from '../../appwrite/auth'
import { Card, Flex, message } from "antd";
import envConfig from '../../environmentConfig'
import { EyeFilled, EyeInvisibleOutlined, HomeFilled } from "@ant-design/icons";
import OAuthLogin from "./oauth-login";
import './login.css'

const Login = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  // const userAuth = useSelector((store) => store.authState.status);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();
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
      messageApi.error(error.message)
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
      messageApi.error(error.message)
    }
  }
  useEffect(() => {
    userLoginStatus()
    // if (userAuth === true) {
    //   navigate('/')
    // }
  }, [])

  return (<>
    <Card className="container">
      {contextHolder}
      <h1 className="background-text">Welcome to Our Blog</h1>
      <Card className="below-container" justify={"center"} gap={40}>
        <Flex>
          <img className="login-image" src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" alt="..." />

          <Flex vertical={true}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input {...{ type: 'text', placeholder: 'Email', label: 'Email', name: 'email', register: register }} />
              <div>
                <Input {...{ type: isShowPassword ? 'password' : 'text', label: 'Password', name: 'password', register: register }} />
                {isShowPassword ? <EyeFilled style={{ position: "absolute", bottom: 198, right: 65 }} onClick={() => setIsShowPassword(!isShowPassword)} /> : <EyeInvisibleOutlined style={{ position: "absolute", bottom: 198, right: 65 }} onClick={() => setIsShowPassword(!isShowPassword)} />}
              </div>
              {errors.exampleRequired && <span>This field is required</span>}
              <input className="submit-button" type="submit" />
            </form>
            <Flex>
              <div>if not register?-
                <Link to={'/register'}> Register</Link>
                <OAuthLogin />
              </div>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Card>
  </>)
}
export default Login;
