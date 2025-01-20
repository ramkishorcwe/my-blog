const Button = (props) => {
  const { children, style, onClick, data, label, name } = props
  const tempProps = { ...props }
  delete tempProps.onClick
  console.log(name)
  return (
    <>
      <button
        style={style ? style : { width: 70, height: 35 }}
        onClick={() => { data ? onClick(data) : onClick() }}
        {...tempProps}>{children ?? label ?? "Button"}
      </button>
    </>
  );
};
export default Button;