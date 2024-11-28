const Button = (props) => {

  return (
    <>
      <button style={props.style ? props.style : { width: 70, height: 35 }} {...props}>{props.children ?? props.label ?? "Button"}</button>
    </>
  );
};
export default Button;