import React, { forwardRef, useState, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const ModalContent = (props) => {
    const {
        className,
        children,
        title,
        showClose,
        hideModal
    } = props;

    return (<div className={`RCB-modal ${className}`}>
        <div className="RCB-modal-body">
            <div className="RCB-modal-header">
                <span className="RCB-modal-title">{title}</span>
                {showClose && <span className="RCB-modal-close" onClick={hideModal}>X</span>}
            </div>
            <div className="RCB-modal-content">{children}</div>
        </div>
    </div>);
};

/** Displays a full screen modal */
let Modal = (props, ref) => {
    const { isOpen, ...restProps } = props;
    const [ isModalOpen, setIsModalOpen ] = useState(isOpen);
    const bodyElement = document.getElementsByTagName("body")[0];

    const showModal = () => {
        setIsModalOpen(true);
    };

    const hideModal = () => {
        setIsModalOpen(false);
    };

    /* add methods that can be accessed via this component's ref */
    useImperativeHandle(ref, () => ({
        showModal: showModal,
        hideModal: hideModal
    }));

    return isModalOpen ? ReactDOM.createPortal(
        <ModalContent {...restProps} hideModal={hideModal} />,
        bodyElement
    ) : null;
};

Modal = forwardRef(Modal);

Modal.propTypes = {
    /** Pass any additional classNames to Modal component */
    className: PropTypes.string,
    /** Header or title for the modal */
    title: PropTypes.string,
    /** indicates if the modal should be opened by default */
    isOpen: PropTypes.bool,
    /** indicates whether to show or hide the close button */
    showClose: PropTypes.bool
};

Modal.defaultProps = {
    className: "",
    title: "",
    isOpen: false,
    showClose: true
};

Modal.displayName = "Modal";

export default Modal;
