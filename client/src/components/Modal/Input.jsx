import "./Input.scss";

const Input = ({
  label,
  labelText,
  type,
  placeholder,
  error,
  errMsg,
  disabled,
}) => {
  return (
    <div className="input">
      <label htmlFor={label} className="input__label">
        {" "}
        {labelText}{" "}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        className={`input__inpt ${error ? "error" : ""} ${
          disabled ? "disabled" : ""
        }`}
        disabled={disabled}
      />
      <p className="input__msg"> {errMsg} </p>
    </div>
  );
};

export default Input;
