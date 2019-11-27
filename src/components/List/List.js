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
    /** Pass any additional classNames to List component */
    className: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }))
}

List.defaultProps = {
    className: "",
    items: [],
    idAttribute: "id",
    ListItem
}

export default List;