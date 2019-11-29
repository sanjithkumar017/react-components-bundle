import React, { useState, useContext, useRef } from "react";
import PropTypes from "prop-types";
import InlineModal, { InlineModalActivator, InlineModalBody } from "../InlineModal";
import List from "../List";
import { FormContext } from "./Form";
import FormElementWrapper from "./FormElementWrapper";

const defaultRenderSelectionSummary = ({selectedItems = [], multiSelect, noSelectionLabel}) => {
    let summaryString = "";
    const selectedCount = selectedItems.length;

    if (multiSelect) {
        summaryString = selectedCount ? `${selectedCount} selected` : noSelectionLabel; 
    } else {
        summaryString = selectedCount ? selectedItems[0]["name"] : noSelectionLabel;
    }

    return (<div>{summaryString}<span className="RCB-select-arrow"></span></div>);
};

export const DefaultDropdownItem = (props) => {
    const { itemData, selectItem, selected = [], idAttribute } = props;
    const { name } = itemData;
    const idValue = itemData[idAttribute];

    const isSelected = selected.find(obj => obj[idAttribute] === idValue) ? true : false;
    const className = "RCB-list-item " + (isSelected ? "selected" : "");

    return (<li onClick={() => selectItem(itemData)} className={className}>
        {name}
    </li>);
};

const Dropdown = (props) => {
    const { 
        halign,
        label,
        showLabel, 
        name,
        renderSelectionSummary, 
        className, 
        value, 
        onChange, 
        options, 
        idAttribute,
        noSelectionLabel,
        appearance,
        multiSelect,
        DropdownItem 
    } = props;

    let initialSelected = [];
    if (value) {
        initialSelected = Array.isArray(value) ? value : [value]
    }
    /* array of selected item objects */
    let [ selected, setSelected ] = useState(initialSelected);

    const { onValueChange } = useContext(FormContext);
    const inlineModalRef = useRef();

    const selectItem = (item) => {
        const id = item[idAttribute];

        if (multiSelect) {
            const isPresent = selected.find(obj => obj[idAttribute] === id);
            if (!isPresent) {
                selected.push(item);
                typeof(onValueChange) === "function" && onValueChange(name, selected);
                typeof(onChange) === "function" && onChange(selected);
            }
        } else {
            selected = [item];
            typeof(onValueChange) === "function" && onValueChange(name, item);
            typeof(onChange) === "function" && onChange(item);
            /* close the dropdown */
            inlineModalRef.current.hideModal();
        }

        setSelected(selected);
    }

    // TODO : add search feature

    return (<FormElementWrapper className={`RCB-dropdown ${className}`} appearance={appearance}>
        {showLabel && <label className="RCB-form-el-label" htmlFor={name}>{label}</label>}
        <InlineModal className="RCB-form-el" ref={inlineModalRef} halign={halign}>
            <InlineModalActivator>
                {renderSelectionSummary({
                    selectedItems: selected,
                    noSelectionLabel,
                    multiSelect
                })}
            </InlineModalActivator>
            <InlineModalBody>
                <List items={options} ListItem={DropdownItem} selected={selected} selectItem={selectItem} idAttribute={idAttribute} />
            </InlineModalBody>
        </InlineModal>
    </FormElementWrapper>);
};

Dropdown.propTypes = {
    /** Pass any additional classNames to Dropdown component */
    className: PropTypes.string,
    /** Horizontal alignment of the dropdown body */
    halign: PropTypes.oneOf(["left", "right"]),
    /** Label for the dropdown element */
    label: PropTypes.string,
    /** indicates whether to show or hide label */
    showLabel: PropTypes.bool,
    /** Unique ID for the input element */
    name: PropTypes.string.isRequired,
    /** Label for dropdown activator */
    noSelectionLabel: PropTypes.string,
    /** Selection items list */
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string
    })),
    /** array of selected item objects */
    value: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string
    })), ""]),
    onChange: PropTypes.func,
    /** Is dropdown multi select or single select */
    multiSelect: PropTypes.bool,
    /** ID attribute key to use when rendering the dropdown items, if the ID attribute is other than "id" */
    idAttribute: PropTypes.string,
    /** Provide a custom element for rendering dropdown item */
    DropdownItem: PropTypes.oneOfType([
        PropTypes.instanceOf(Element),
        PropTypes.func
    ]),
    /** Pass this function to customise the selection summary HTML. 
     * The array of selected item objects will be sent as props
     */
    renderSelectionSummary: PropTypes.func,
    /** Define the appearance of the form element. Accepted values are either "inline" or "block" */
    appearance: PropTypes.oneOf(["inline", "block"])
};

Dropdown.defaultProps = {
    className: "",
    value: "",
    label: "",
    showLabel: true,
    multiSelect: false,
    className: "",
    idAttribute: "id",
    noSelectionLabel: "Select",
    appearance: "inline",
    DropdownItem: DefaultDropdownItem,
    renderSelectionSummary: defaultRenderSelectionSummary
};

export default Dropdown;