import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
    border-radius: 3px;
    cursor: pointer;
    
    ${props => props.appearance === "default" && css`
        &:hover {
            background: #f3f3f3;
        }
    `}

    ${props => props.appearance === "primary" && css`
        background: #1fa7fd;
        color: #FFF;
        border: 0;

        &:hover {
            background: #208dd2;
        }
    `}

    ${props => props.appearance === "secondary" && css`
        background: #FFF;
        border: 1px solid #95c7e7;

        &:hover {
            background: #eef8ff;
        }
    `}

    ${props => props.size === "small" && css`
        padding: 6px 8px;
    `}

    ${props => props.size === "medium" && css`
        padding: 10px 15px;
    `}

    ${props => props.size === "large" && css`
        padding: 15px 22px;
    `}
`;

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
    const btnClassName = `${appearance}-btn ${size} ${className}` + (loading ? " loading" : "");

    return (<StyledButton className={btnClassName} appearance={appearance} size={size} disabled={disabled} onClick={onClick}>
        {children}
    </StyledButton>);
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

