import "./input.css";
const Input = (props) => {
  const inputClasses = props.hasError ? "input-box invalid" : "input-box";
  return (
    <div className={inputClasses}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {props.hasError && <p className="invalid-text">{props.message}</p>}
    </div>
  );
};

export default Input;
