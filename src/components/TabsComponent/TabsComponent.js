import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import List from "../List";

const StyledTabsContainer = styled.div`
`;

const StyledTabTitleItem = styled.li`
    list-style-type: none;
    cursor: pointer;
    display: inline-block;
`;

const StyledTabContentItem = styled.li`
    list-style-type: none;
    display: none;

    ${props => props.selected && css`
        display: block;
    `}
`;

const TabTitleItem = (props) => {
    const { itemData, selected, changeTab } = props;
    const { id, label } = itemData;
    const isSelected = id === selected;
    const className = `tab-title ${isSelected ? "selected" : ""}`;

    const triggerTabChange = () => {
        changeTab(id);
    };

    return (<StyledTabTitleItem className={className} selected={isSelected} onClick={triggerTabChange}>
        {label}
    </StyledTabTitleItem>);
};

const TabContentItem = (props) => {
    const { itemData, selected } = props;
    const { id, tabComponent } = itemData;
    const isSelected = id === selected;
    const className = `tab-content ${isSelected ? "selected" : ""}`

    return (<StyledTabContentItem className={className} selected={isSelected}>
        {tabComponent}
    </StyledTabContentItem>);
};

const TabsComponent = (props) => {
    const { className, items, selectedTab, onTabChanged } = props;
    const defaultSelected = selectedTab || (items[0] ? items[0].id : "");
    const [ selected, setSelected ] = useState(defaultSelected);

    const changeTab = (id) => {
        setSelected(id);
        onTabChanged(id);
    }

    return (<StyledTabsContainer className={`tabs-cont ${className}`}>
        <List items={items} ListItem={TabTitleItem} selected={selected} changeTab={changeTab} />
        <List items={items} ListItem={TabContentItem} selected={selected} />
    </StyledTabsContainer>)
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