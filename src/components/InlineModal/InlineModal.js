import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInlineModal = styled.div`
    position: relative;

    &.hover-open {
        .inline-modal-body {
            display: none;
        }
    
        &:hover {
            .inline-modal-body {
                display: block;
            }
        }
    }
`;

const StyledInlineModalBtn = styled.div`
    display: inline-block;
    background: #FFF;
    border: 1px solid #eee;
    padding: 10px;
    border-radius: 3px;
    cursor: pointer;
`;

const StyledInlineModalBody = styled.div`
    position: absolute;
    background: #FFF;
    border: 1px solid #efeeee;
    box-shadow: 0 9px 12px 0 rgba(0,0,0,0.15);
`;

export const InlineModalActivator = (props) => {
    return (<div>
        {props.children}
    </div>);
}

export const InlineModalBody = (props) => {
    return (<div>
        {props.children}
    </div>);
}

const InlineModal = (props) => {
    const { children, activatorAction, className } = props;
    let [ isModalOpen, toggleModalOpen ] = useState(false);
    let activatorProps = {};
    let inlineModalClassName = className;
    let showModalBody = isModalOpen;
    const inlineModalRef = useRef();

    const onActivatorClick = () => {
        toggleModalOpen(!isModalOpen);
    }

    const onBodyClick = (e) => {
        if (inlineModalRef.current.contains(e.target)) {
            /* inside modal click */
            return;
        }

        /* outside click -> close modal */
        toggleModalOpen(false);
    }
    
    useEffect(() => {
        /* add when mounted */
        document.addEventListener("click", onBodyClick);

        /* return function to be called when unmounted */
        return () => {
          document.removeEventListener("click", onBodyClick);
        };
    }, []);

    if (activatorAction === "click") {
        activatorProps = {
            onClick: onActivatorClick
        }
    } else if (activatorAction === "hover") {
        inlineModalClassName += " hover-open";
        showModalBody = true;
    }

    return (<StyledInlineModal className={inlineModalClassName} ref={inlineModalRef}>
        <StyledInlineModalBtn {...activatorProps} className="inline-modal-btn">{children[0]}</StyledInlineModalBtn>
        {showModalBody && <StyledInlineModalBody className="inline-modal-body">{children[1]}</StyledInlineModalBody>}
    </StyledInlineModal>);
}

InlineModal.defaultProps = {
    activatorAction: "click" // or "hover"
};

InlineModal.propTypes = {
    activatorAction: PropTypes.string,
    children: (props, propName, componentName) => {
        const children = props[propName];

        if (React.Children.count(children) !== 2) {
            return new Error(
                `${componentName} should have 2 children`
            );
        }

        if (children[0].type !== InlineModalActivator || 
            children[1].type !== InlineModalBody) {
            return new Error(
                `${componentName} should have an InlineModalActivator & InlineModalBody components as children`
            );
        }
    }
};

export default InlineModal;