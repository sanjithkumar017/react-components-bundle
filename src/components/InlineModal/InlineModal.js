import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from "react";
import PropTypes from "prop-types";

export const InlineModalActivator = (props) => {
    return props.children;
}

export const InlineModalBody = (props) => {
    return props.children;
}

let InlineModal = (props, ref) => {
    const { children, activatorAction, className, isModalOpen:propIsOpen, halign } = props;
    let [ isModalOpen, setIsModalOpen ] = useState(propIsOpen);
    let activatorProps = {};
    let inlineModalClassName = `RCB-inline-modal ${className}`;
    let showModalBody = isModalOpen;
    const inlineModalRef = useRef();

    const onActivatorClick = () => {
        setIsModalOpen(!isModalOpen);
    }

    const onBodyClick = (e) => {
        if (inlineModalRef.current.contains(e.target)) {
            /* inside modal click */
            return;
        }

        /* outside click -> close modal */
        setIsModalOpen(false);
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
        };
    } else if (activatorAction === "hover") {
        inlineModalClassName += " hover-open";
        showModalBody = true;
    }

    /* add methods that can be accessed via this component's ref */
    useImperativeHandle(ref, () => ({
        hideModal: () => {
            setIsModalOpen(false);
        }
    }));

    return (<div className={inlineModalClassName} ref={inlineModalRef}>
        <div {...activatorProps} className="RCB-inline-modal-btn">{children[0]}</div>
        {showModalBody && <div className={`RCB-inline-modal-body RCB-align-${halign}`}>{children[1]}</div>}
    </div>);
}

InlineModal = forwardRef(InlineModal);

InlineModal.propTypes = {
    /** Pass any additional classNames to InlineModal component */
    className: PropTypes.string,
    /** Horizontal alignment of the inline modal body */
    halign: PropTypes.oneOf(["left", "right"]),
    /** Event on which the modal should be opened */
    activatorAction: PropTypes.oneOf(["click", "hover"]),
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
    },
    isModalOpen: PropTypes.bool
};

InlineModal.defaultProps = {
    className: "",
    halign: "left",
    activatorAction: "click", // or "hover"
    isModalOpen: false
};

InlineModal.displayName = "InlineModal";

export default InlineModal;