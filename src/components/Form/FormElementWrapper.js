import React from "react";
import PropTypes from "prop-types";

const FormElementWrapper = (props) => {
    const { className, children, appearance } = props;

    return (<div className={`RCB-form-el-cont RCB-form-el-${appearance} ${className}`}>
        {children}
    </div>);
};

FormElementWrapper.propTypes = {
    appearance: PropTypes.string
};

FormElementWrapper.defaultProps = {
    appearance: "inline"
};

export default FormElementWrapper;