import "./select.css";
const Select = (props) => {
  return (
    <div className="select-box">
      <select onChange={props.onChange}>{props.children}</select>
    </div>
  );
};

export default Select;
