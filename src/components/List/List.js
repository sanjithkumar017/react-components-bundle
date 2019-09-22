import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledList = styled.ul`
    margin: 0;
    padding: 0;
`;

const ListItem = (props) => {
    let { itemData = {} } = props;
    let { name } = itemData;

    return (<li className="list-item">{name}</li>);
}

const List = (props) => {
    const {
        className = "",
        items,
        idAttribute,
        ListItem,
        ...restProps
    } = props;

    return (<StyledList className={`list ${className}`}>
        {items.map(itemData => <ListItem itemData={itemData} key={itemData[idAttribute]} idAttribute={idAttribute} {...restProps} />)}
    </StyledList>);
}

List.propTypes = {
    items: PropTypes.array
}

List.defaultProps = {
    items: [],
    idAttribute: "id",
    ListItem
}

export default List;