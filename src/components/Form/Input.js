import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FormContext } from "./Form";

const Input = (props) => {
    const { label, name, type, className, value, defaultValue, placeholder, onChange } = props;
    const { onValueChange } = useContext(FormContext);

    const onInputChange = (event) => {
        const value = event.target.value;

        // TODO : do validations

        if (typeof(onChange) === "function") {
            onChange(value);
        }

        typeof(onValueChange) === "function" && onValueChange(name, value);
    }

    let inputProps = {
        type,
        label,
        name,
        id: name,
        defaultValue,
        placeholder,
        className: `form-el ${className}`,
        onChange: onInputChange
    };

    if (typeof(onChange) === "function") {
        /* make it a controlled component if onChange function is given */
        inputProps.value = value;
    }

    return (<div className="form-el-cont">
        <label className="form-el-label" htmlFor={name}>{label}</label>
        <input {...inputProps} />
    </div>);
};

Input.propTypes = {
    /** Use it to render different input types like text, password etc. */
    type: PropTypes.string,
    /** Label for the input element */
    label: PropTypes.string,
    /** Unique ID for the input element */
    name: PropTypes.string.isRequired,
    /* Will be used only with onChange function, or else ignored */
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    placeholder: PropTypes.string,
    /* Becomes a controlled component if onChange function is given */
    onChange: PropTypes.func
};

Input.defaultProps = {
    className: ""
};

export default Input;