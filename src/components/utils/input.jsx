import '../../styles/input.css'

const Input = (props) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: 'column' }}>
        <label htmlFor={props.label}>{props.label}</label>
        <input id={props.name} type={props.type} placeholder={props.label} className={`${props.className}`} {...props.register(props.name)} />
      </div>
    </>
  );
};
export default Input;
