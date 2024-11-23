const Input = (props) => {
  return (
    <>
      <div>
        <label htmlFor={props.label}>{props.label}</label>
        <input id={props.name} type={props.type} placeholder={props.label} className={props.className || ''} {...props.register(props.name)} />
      </div>
    </>
  );
};
export default Input;
