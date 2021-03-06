import React, { useContext, Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { FormContext } from "./Form";
import FormElementWrapper from "./FormElementWrapper";
  
const RadioList = (props) => {
    const { options, label, name, className, value, appearance, onChange } = props;
    const { onValueChange } = useContext(FormContext);

    const onInputChange = (event) => {
        const value = event.target.value;

        if (typeof(onChange) === "function") {
            onChange(value);
        }

        typeof(onValueChange) === "function" && onValueChange(name, value);
    }

    let inputProps = {
        type: "radio",
        label,
        name,
        className: "RCB-form-el",
        onChange: onInputChange
    };

    if (typeof(onChange) === "function") {
        /* make it a controlled component if onChange function is given */
        inputProps.value = value;
    }

    useEffect(() => {
        if (typeof(value) !== "undefined" && typeof(onValueChange) === "function") {
            /* set the initial form element value in the form context */
            onValueChange(name, value);
        }
    }, []);

    return (<FormElementWrapper className={className} appearance={appearance}>
        <label className="RCB-form-el-label">{label}</label>
        {options.map(option => {
            const { id, name } = option;
            const checked = value === id;

            return (<Fragment key={id}>
                <input {...inputProps} id={id} value={id} defaultChecked={checked} />
                <label className="RCB-radio-label" htmlFor={id}>{name}</label>
            </Fragment>);
        })}
    </FormElementWrapper>);
};

RadioList.propTypes = {
    /** Pass any additional classNames to Input component */
    className: PropTypes.string,
    /** radio items list */
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string
    })).isRequired,
    /** Label for the input element */
    label: PropTypes.string,
    /** Unique ID for the input element */
    name: PropTypes.string.isRequired,
    /** ID of the selected radio item */
    value: PropTypes.any,
    /** Define the appearance of the form element. Accepted values are either "inline" or "block" */
    appearance: PropTypes.oneOf(["inline", "block"]),
    /** Becomes a controlled component if onChange function is given */
    onChange: PropTypes.func
};

RadioList.defaultProps = {
    className: "",
    appearance: "inline"
};

export default RadioList;