import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FormContext } from "./Form";
import FormElementWrapper from "./FormElementWrapper";
  
const FileUploader = (props) => {
    const { label, name, multiple, accept, className, appearance, onChange, children } = props;
    const { onValueChange } = useContext(FormContext);

    const onFileChange = (event) => {
        const value = event.target.files;

        if (typeof(onChange) === "function") {
            onChange(value);
        }

        typeof(onValueChange) === "function" && onValueChange(name, value);
    };

    let inputProps = {
        type: "file",
        label,
        name,
        id: name,
        multiple: multiple,
        accept: accept,
        className: "RCB-form-el",
        onChange: onFileChange
    };

    return (<FormElementWrapper className={className} appearance={appearance}>
        <label className="RCB-form-el-label">{label}</label>
        <input {...inputProps} className="RCB-hidden" />
        <label htmlFor={name} className="RCB-file-input">
            <div className="RCB-no-pointer">{children}</div>
        </label>
    </FormElementWrapper>);
};

FileUploader.propTypes = {
    /** Pass any additional classNames to Input component */
    className: PropTypes.string,
    /** Label for the input element */
    label: PropTypes.string,
    /** Unique ID for the input element */
    name: PropTypes.string.isRequired,
    /** set to true to upload multiple files at once */
    multiple: PropTypes.bool,
    /** mime type of the acceptable files */
    accept: PropTypes.string,
    /** Define the appearance of the form element. Accepted values are either "inline" or "block" */
    appearance: PropTypes.oneOf(["inline", "block"]),
    /** Becomes a controlled component if onChange function is given */
    onChange: PropTypes.func
};

FileUploader.defaultProps = {
    className: "",
    appearance: "inline",
    multiple: false,
    accept: "image/*"
};

export default FileUploader;