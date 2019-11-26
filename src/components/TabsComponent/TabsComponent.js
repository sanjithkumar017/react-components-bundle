import React, { useState } from "react";
import PropTypes from "prop-types";
import List from "../List";

const TabTitleItem = (props) => {
    const { itemData, selected, changeTab } = props;
    const { id, label } = itemData;
    const isSelected = id === selected;
    const className = `RCB-tab-title ${isSelected ? "selected" : ""}`;

    const triggerTabChange = () => {
        changeTab(id);
    };

    return (<li className={className} selected={isSelected} onClick={triggerTabChange}>
        {label}
    </li>);
};

const TabContentItem = (props) => {
    const { itemData, selected } = props;
    const { id, tabComponent } = itemData;
    const isSelected = id === selected;
    const className = `RCB-tab-content ${isSelected ? "selected" : ""}`

    return (<li className={className} selected={isSelected}>
        {tabComponent}
    </li>);
};

const TabsComponent = (props) => {
    const { className, items, selectedTab, onTabChanged } = props;
    const defaultSelected = selectedTab || (items[0] ? items[0].id : "");
    const [ selected, setSelected ] = useState(defaultSelected);

    const changeTab = (id) => {
        setSelected(id);
        if (typeof(onTabChanged) === "function") {
            onTabChanged(id);
        }
    }

    return (<div className={`RCB-tabs-container ${className}`}>
        <List items={items} ListItem={TabTitleItem} selected={selected} changeTab={changeTab} className="RCB-tabs-header" />
        <List items={items} ListItem={TabContentItem} selected={selected} className="RCB-tabs-content"/>
    </div>)
};

TabsComponent.propTypes = {
    /** Array of tab items. Each object in array should contain {id, label, tabComponent: <Component />} */
    items: PropTypes.array.isRequired,
    /** ID of the tab item to be selected */
    selectedTab: PropTypes.string,
    onTabChanged: PropTypes.func
};

TabsComponent.defaultProps = {
    className: ""
};

export default TabsComponent;