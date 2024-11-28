import { useForm } from "react-hook-form";
import { Input } from '../index';
import Container from "../utils/container";
const Login = () => {
  const { register, handleSubmit, watch, formState: { errors }, } = useForm();
  const onSubmit = (data) => console.log(data)
  // console.log(watch("name")) // watch input value by passing the name of it
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
    </Container>
  </>)
}
export default Login;
