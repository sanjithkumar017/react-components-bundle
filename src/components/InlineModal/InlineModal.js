import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "../../../public/css/components/inlineModal.scss";

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
    const { children, activatorAction } = props;
    let [ isModalOpen, toggleModalOpen ] = useState(false);
    let activatorProps = {};
    let inlineModalClassName = "inline-modal";
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

    return (<div className={inlineModalClassName} ref={inlineModalRef}>
        <div {...activatorProps} className="inline-modal-btn">{children[0]}</div>
        {showModalBody && <div className="inline-modal-body">{children[1]}</div>}
    </div>);
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