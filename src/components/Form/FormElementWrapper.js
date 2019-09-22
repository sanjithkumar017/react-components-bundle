import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledDiv = styled.div`
    ${props => props.appearance === "inline" && css`
        margin: 20px 0;

        .form-el-label {
            margin-right: 15px;
        }
    `}

    ${props => props.appearance === "block" && css`
        margin: 20px 0;

        .form-el-label {
            display: block;
        }
    `}
`;

const FormElementWrapper = (props) => {
    const { className, children, appearance } = props
    return (<StyledDiv className={`form-el-cont ${className}`} appearance={appearance}>
        {children}
    </StyledDiv>);
};

FormElementWrapper.propTypes = {
    appearance: PropTypes.string
};

FormElementWrapper.defaultProps = {
    appearance: "inline"
};

export default FormElementWrapper;