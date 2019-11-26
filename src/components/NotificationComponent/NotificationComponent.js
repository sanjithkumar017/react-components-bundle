import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const NotificationComponent = (props) => {
    const [ hideMessage, setHideMessage ] = useState(false);
    const { appearance, children, messageId, fadeOut, fadeOutTime} = props;
    let fadeOutMessage = typeof(fadeOut) !== "undefined" ? fadeOut : appearance === "success";
    let timerID;

    const clearMessage = () => {
        setHideMessage(true);
    };

    const setClearMessageTimeout = () => {
        if (fadeOutMessage) {
            timerID && clearTimeout(timerID);
            timerID = setTimeout(clearMessage, fadeOutTime);
        }
    }

    useEffect(() => {
        /* RUN ONCE */
        setClearMessageTimeout();
    }, []);

    useEffect(() => {
        /* RUN when message ID changes */
        setHideMessage(false);
        setClearMessageTimeout();
    }, [messageId]);

    if (hideMessage) {
        return null;
    } else {
        return (<div className={`RCB-notif RCB-notif-${appearance}`}>{children}</div>);
    }
};

NotificationComponent.propTypes = {
    /* Unique ID to represent this particular message */
    messageId: PropTypes.number.isRequired,
    /* Appearance of the notification message */
    appearance: PropTypes.oneOf(["error", "warning", "success", "info"]),
    /* Should the message fadeout after (fadeOutTime)ms or not. Default true for success messages only. */
    fadeOut: PropTypes.bool,
    /* fadeout timer, in milliseconds */
    fadeOutTime: PropTypes.number
};

NotificationComponent.defaultProps = {
    appearance: "success",
    fadeOutTime: 3000
};

export default NotificationComponent;