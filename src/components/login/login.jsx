import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../store/auth-reducer";
import authService from "../../appwrite/auth";
import { EyeFilled, EyeInvisibleOutlined } from "@ant-design/icons";
import OAuthLogin from "./oauth-login";
import loginImg from "../../assets/login-img.svg";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
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
      alert(error.message);
    }
  };

  useEffect(() => {
    authService.getUser().then((user) => {
      if (user) navigate("/");
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 px-4">

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl flex max-w-4xl w-full overflow-hidden">

        {/* LEFT IMAGE */}
        <div className="hidden md:flex items-center justify-center w-1/2 bg-slate-900/40">
          <img
            src={loginImg}
            alt="login"
            className="w-full animate-[float_4s_ease-in-out_infinite]"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 p-8 text-white">

          <h2 className="text-2xl font-bold mb-2">Welcome Back 👋</h2>
          <p className="text-gray-300 mb-6">Login to continue</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Email */}
            <div className="flex w-full flex-col">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email")}
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 rounded-lg bg-white/10 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <div className="relative flex w-full flex-col">
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-2 rounded-lg bg-white/10 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 cursor-pointer text-gray-300"
              >
                {showPassword ? <EyeInvisibleOutlined /> : <EyeFilled />}
              </span>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition transform hover:scale-105"
            >
              Login
            </button>
          </form>

          {/* Extra */}
          <div className="mt-4 text-sm text-gray-300">
            Don’t have an account?{" "}
            <Link to="/register" className="text-indigo-400 hover:underline">
              Register
            </Link>
          </div>

          <div className="mt-4">
            <OAuthLogin />
          </div>

        </div>
      </div>

      {/* Floating animation */}
      <style>
        {`
          @keyframes float {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>

    </div>
  );
};

export default Login;