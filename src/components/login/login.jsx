import { useForm } from "react-hook-form";
import { Input } from "../index";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../store/auth-reducer";
import authService from "../../appwrite/auth";
import { Card, Flex, message, Button } from "antd";
import { EyeFilled, EyeInvisibleOutlined } from "@ant-design/icons";
import OAuthLogin from "./oauth-login";
import "./login.css";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getUser();
        if (userData) dispatch(authLogin({ userData, status: true }));
        navigate("/");
      }
    } catch (error) {
      messageApi.error(error.message);
    }
  };

  useEffect(() => {
    authService.getUser().then((user) => {
      if (user) navigate("/");
    });
  }, []);

  return (
    <div className="login-wrapper">
      {contextHolder}

      <Card className="login-card">
        <Flex gap={40} align="center" justify="space-between">
          
          {/* LEFT IMAGE */}
          <div className="login-image-container">
            <img
              src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
              alt="login"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="login-form">
            <h2>Welcome Back 👋</h2>
            <p className="subtitle">Login to continue</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="text"
                placeholder="Email"
                label="Email"
                name="email"
                register={register}
              />

              <div className="password-field">
                <Input
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  name="password"
                  register={register}
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeInvisibleOutlined /> : <EyeFilled />}
                </span>
              </div>

              <Button
                type="primary"
                htmlType="submit"
                block
                className="login-btn"
              >
                Login
              </Button>
            </form>

            <div className="extra">
              <span>
                Don’t have an account?{" "}
                <Link to="/register">Register</Link>
              </span>
              <OAuthLogin />
            </div>
          </div>

        </Flex>
      </Card>
    </div>
  );
};

export default Login;