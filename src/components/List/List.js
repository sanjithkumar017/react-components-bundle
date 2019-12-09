import React, { Component } from "react";
import PropTypes from "prop-types";

const ListItem = (props) => {
    let { itemData = {} } = props;
    let { name } = itemData;

    return (<li className="RCB-list-item">{name}</li>);
};

ListItem.propTypes = {
    itemData: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
};

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
    /** Pass any additional classNames to List component */
    className: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string
    })).isRequired,
    idAttribute: PropTypes.string,
    /** Pass a custom ListItem component */
    ListItem: PropTypes.oneOfType([
        PropTypes.instanceOf(Element),
        PropTypes.instanceOf(Component),
        PropTypes.func
    ])
}

List.defaultProps = {
    className: "",
    items: [],
    idAttribute: "id",
    ListItem
}

export default List;