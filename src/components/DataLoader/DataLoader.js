import React, { Fragment, Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Promise from "bluebird";
import dequal from "dequal";
import dataLoader from "../../core/dataLoader";

const DefaultLoader = () => {
    return <div>Loading...</div>;
};

const loadData = (requests) => {
    let promisesArray = requests.map(reqObj => {
        return dataLoader.getRequestDef(reqObj);
    });

    return Promise.all(promisesArray);
};

const DataLoader = (props) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const dataRef = React.useRef()
    const { children, Loader, requests, onDataLoaded, onDataFailed } = props;

    const renderLoader = () => {
        return Loader || DefaultLoader;
    };

    const renderChildren = () => {
        return children;
    };

    const fetchData = () => {
        setIsLoading(true);
        loadData(requests)
            .then(resultsArray => {
                onDataLoaded(resultsArray);
            })
            .catch(exception => {
                onDataFailed(exception);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    useEffect(() => {
        /* 
        As useEffect does not do a deep comparision on dependent props, 
        do a manual deep comparision to decide whether to load data
        */
        if (!dequal(requests, dataRef.current)) {
            dataRef.current = requests;
            fetchData();
        }
    });

    return (<Fragment>
        {isLoading ? 
            renderLoader()
            : renderChildren()}
    </Fragment>);
};

DataLoader.propTypes = {
    /** Requests array */
    requests: PropTypes.array.isRequired,
    /** Callback function which is called when data is loaded */
    onDataLoaded: PropTypes.func,
    /** Callback function which is called when data fetching fails */
    onDataFailed: PropTypes.func,
    /** Provide a custom loader component */
    Loader: PropTypes.oneOf([
        PropTypes.instanceOf(Element),
        PropTypes.instanceOf(Component)
    ])
};

DataLoader.defaultProps = {
    onDataLoaded: () => {},
    onDataFailed: () => {}
}

export default DataLoader;