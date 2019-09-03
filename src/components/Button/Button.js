import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

/** ButtonAppearance enum */
export const ButtonAppearance = {
    DEFAULT: "default",
    PRIMARY: "primary",
    SECONDARY: "secondary"
};

/** ButtonSize enum */
export const ButtonSize = {
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large"
};

const Button = (props) => {
    const { children, className, loading, disabled, appearance, size, onClick } = props;
    const btnClassName = `btn ${appearance}-btn ${size} ${className}` + (loading ? " loading" : "");

    return (<button className={btnClassName} disabled={disabled} onClick={onClick}>
        {children}
    </button>);
}

Button.propTypes = {
    /** Pass any additional classnames to Button component */
    className: PropTypes.string,
    /** Boolean indicating whether the button should render as disabled */
    disabled: PropTypes.bool,
    /** Boolean indicating whether the button is in loading state */
    loading: PropTypes.bool,
    /** String indicating how Button should be rendered. 
     * Must be one of,
     * ButtonAppearance = {
        DEFAULT: "default",
        PRIMARY: "primary",
        SECONDARY: "secondary"
       }   
    */
    appearance: PropTypes.oneOf(Object.values(ButtonAppearance)),
    /** String indicating how Button should be rendered.
     * Must be one of,
     * ButtonSize = {
        SMALL: "small",
        MEDIUM: "medium",
        LARGE: "large"
    }
    */
    size: PropTypes.oneOf(Object.values(ButtonSize)),
    /** onClick handler */
    onClick: PropTypes.func
};

Button.defaultProps = {
    onClick: () => {},
    appearance: ButtonAppearance.DEFAULT,
    size: ButtonSize.SMALL,
    className: ""
};

export default Button;

