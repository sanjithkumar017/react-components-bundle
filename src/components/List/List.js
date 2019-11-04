import React from "react";
import PropTypes from "prop-types";

const ListItem = (props) => {
    let { itemData = {} } = props;
    let { name } = itemData;

    return (<li className="RCB-list-item">{name}</li>);
}

const List = (props) => {
    const {
        className = "",
        items,
        idAttribute,
        ListItem,
        ...restProps
    } = props;

    return (<ul className={`RCB-list ${className}`}>
        {items.map(itemData => <ListItem itemData={itemData} key={itemData[idAttribute]} idAttribute={idAttribute} {...restProps} />)}
    </ul>);
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