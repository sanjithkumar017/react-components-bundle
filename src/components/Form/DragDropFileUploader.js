import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { FormContext } from "./Form";
import FormElementWrapper from "./FormElementWrapper";

const DragDropFileUploader = (props) => {
    const { name, label, children, onChange, className, appearance } = props;
    const [ isDragOver, setIsDragOver ] = useState(false);
    const { onValueChange } = useContext(FormContext);

    const onDragEnter = () => {
        setIsDragOver(true);
    };

    const onDragLeave = () => {
        setIsDragOver(false);
    };

    const onDragOver = (event) => {
        event.preventDefault();
    };

    const onDrop = (event) => {
        event.preventDefault();
        let value = event.dataTransfer.files;

        if (typeof(onChange) === "function") {
            onChange(value);
        }

        typeof(onValueChange) === "function" && onValueChange(name, value);

        setIsDragOver(false);
    };

    return (<FormElementWrapper className={className} appearance={appearance}>
        <label className="RCB-form-el-label">{label}</label>
        <div onDragEnter={onDragEnter} onDragLeave={onDragLeave} 
                onDragOver={onDragOver} onDrop={onDrop} 
                className={`RCB-drag-drop-uploader ${isDragOver ? "RCB-drag-over" : ""}`}>
            {children}
        </div>
    </FormElementWrapper>);
};

DragDropFileUploader.propTypes = {
    /** Pass any additional classNames to Input component */
    className: PropTypes.string,
    /** Label for the input element */
    label: PropTypes.string,
    /** Unique ID for the input element */
    name: PropTypes.string.isRequired,
    /** mime type of the acceptable files */
    accept: PropTypes.string,
    /** Define the appearance of the form element. Accepted values are either "inline" or "block" */
    appearance: PropTypes.oneOf(["inline", "block"]),
    /** Becomes a controlled component if onChange function is given */
    onChange: PropTypes.func
};

DragDropFileUploader.defaultProps = {
    className: "",
    appearance: "inline",
    accept: "image/*"
};

export default DragDropFileUploader;