const Button = (props) => {

  return (
    <>
      <button {...props}>{props.children ?? props.label ?? "Button"}</button>
    </>
  );
};
export default Button;