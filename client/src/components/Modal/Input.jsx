import "./Input.scss";

const Input = ({
  label,
  labelText,
  type,
  placeholder,
  error = false,
  disabled,
  value,
  setValue,
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
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
