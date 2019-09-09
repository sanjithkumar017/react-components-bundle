import React from "react";
import PropTypes from "prop-types";

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
        ListItem 
    } = props;

    return (<ul className={`list ${className}`}>
        {items.map(itemData => <ListItem itemData={itemData} key={itemData[idAttribute]} />)}
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