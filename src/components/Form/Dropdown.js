import React, { useState, useContext, useRef } from "react";
import PropTypes from "prop-types";
import InlineModal, { InlineModalActivator, InlineModalBody } from "../InlineModal";
import List from "../List";
import { FormContext } from "./Form";

const getSelectedList = (options = [], selectedIds = [], idAttribute) => {
    return selectedIds.map(id => {
        return options.find(obj => obj[idAttribute] === id);
    });
};

const defaultRenderSelectionSummary = ({selectedItems = [], multiSelect, noSelectionLabel}) => {
    let summaryString = "";
    const selectedCount = selectedItems.length;

    if (multiSelect) {
        summaryString = selectedCount ? `${selectedCount} selected` : noSelectionLabel; 
    } else {
        summaryString = selectedCount ? selectedItems[0]["name"] : noSelectionLabel;
    }

    return (<div>{summaryString}</div>);
};

export const DefaultDropdownItem = (props) => {
    const { itemData, selectItem, idAttribute } = props;
    const { name } = itemData;

    return (<li onClick={() => selectItem(itemData[idAttribute])} className="list-item">
        {name}
    </li>);
};

const Dropdown = (props) => {
    const { 
        label, 
        name, 
        renderSelectionSummary, 
        className, 
        value, 
        onChange, 
        options, 
        idAttribute,
        noSelectionLabel,
        multiSelect,
        DropdownItem 
    } = props;

    let initialSelected = [];
    if (value) {
        initialSelected = Array.isArray(value) ? value : [value]
    }
    let [ selected, setSelected ] = useState(initialSelected);

    const { onValueChange } = useContext(FormContext);
    const inlineModalRef = useRef();

    const selectItem = (id) => {
        if (multiSelect) {
            if (selected.indexOf(id) === -1) {
                selected.push(id);
                typeof(onValueChange) === "function" && onValueChange(name, selected);
            }
        } else {
            selected = [id];
            typeof(onValueChange) === "function" && onValueChange(name, id);
            /* close the dropdown */
            inlineModalRef.current.hideModal()
        }

        setSelected(selected);

        if (typeof(onChange) === "function") {
            onChange(selected);
        }
    }

    const selectedList = getSelectedList(options, selected, idAttribute);

    // TODO : add search feature

    return (<div className={`form-el-cont ${className}`}>
        <label className="form-el-label" htmlFor={name}>{label}</label>
        <InlineModal className="form-el" ref={inlineModalRef}>
            <InlineModalActivator>
                {renderSelectionSummary({
                    selectedItems: selectedList,
                    noSelectionLabel,
                    multiSelect
                })}
            </InlineModalActivator>
            <InlineModalBody>
                <List items={options} ListItem={DropdownItem} selected={selected} selectItem={selectItem} idAttribute={idAttribute} />
            </InlineModalBody>
        </InlineModal>
    </div>);
};

Dropdown.propTypes = {
    /** Label for the dropdown element */
    label: PropTypes.string,
    /** Unique ID for the input element */
    name: PropTypes.string.isRequired,
    /** Label for dropdown activator */
    noSelectionLabel: PropTypes.string,
    /** Selection items list */
    options: PropTypes.array,
    value: PropTypes.any,
    onChange: PropTypes.func,
    /** Is dropdown multi select or single select */
    multiSelect: PropTypes.bool,
    /** ID attribute key to use when rendering the dropdown items */
    idAttribute: PropTypes.string,
    /** Provide a custom element for rendering dropdown item */
    DropdownItem: PropTypes.oneOfType([
        PropTypes.instanceOf(Element),
        PropTypes.func
    ]),
    /** Pass this function to customise the selection summary HTML. 
     * The array of selected item objects will be sent as props
     */
    renderSelectionSummary: PropTypes.func
};

Dropdown.defaultProps = {
    value: "",
    label: "",
    multiSelect: false,
    className: "",
    idAttribute: "id",
    noSelectionLabel: "Select",
    DropdownItem: DefaultDropdownItem,
    renderSelectionSummary: defaultRenderSelectionSummary
};

export default Dropdown;