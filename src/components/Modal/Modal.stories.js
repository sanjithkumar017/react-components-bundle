import React, { useRef } from "react";
import { storiesOf } from "@storybook/react";
import Modal from "./Modal";

const ModalExample = () => {
    return (<Modal isOpen={true} title="This is the header">
        <div>From inside a modal</div>
    </Modal>);
};

const ModalClickExample = () => {
    const modalRef = useRef();
    const showModal = () => {
        modalRef.current.showModal();
    };

    return (<div>
        <a href="javascript:void(0)" onClick={showModal}>Show Modal</a>
        <Modal title="This is the header" ref={modalRef}>
            <div>From inside a modal</div>
        </Modal>
    </div>);
};

storiesOf("Modal", module)
    .addParameters({
        info: {
            propTables: [Modal],
            propTablesExclude: [ModalExample, ModalClickExample]
        }
    })
    .add("Activate on click", () => {
        return (<ModalClickExample />);
    })
    .add("Open by default", () => {
        return (<ModalExample />);
    });
