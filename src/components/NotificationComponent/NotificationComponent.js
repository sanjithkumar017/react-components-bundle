import React from "react";
import PropTypes from "prop-types";

const NotificationComponent = (props) => {
    const { appearance, children } = props;

    return (<div className={`RCB-notif RCB-notif-${appearance}`}>{children}</div>);
};

NotificationComponent.propTypes = {
    appearance: PropTypes.oneOf(["error", "warning", "success", "info"])
};

NotificationComponent.defaultProps = {
    appearance: "success"
};

export default NotificationComponent;