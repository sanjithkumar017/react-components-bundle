import React, { useState } from "react";
import PropTypes from "prop-types";
import Table from "./Table";
import DataLoader from "../DataLoader";
import PaginationComponent from "./PaginationComponent";
import utils from "../../core/utils";

const getPageRecords = (records = [], pageConfig = {}) => {
    const pagIndex = utils.getPagIndex(pageConfig);
    const { start, end } = pagIndex;
    
    return records.slice(start, end);
};

const PaginatedTable = (props) => {
    const {
        className,
        records,
        columnConfigs,
        idAttribute,
        paginationPosition,
        paginationType,
        requestId,
        pageSizeList,
        totalRecords,
        isExpandableTable,
        ExpandedRowComponent,
        onDataLoaded,
        ...restProps
    } = props;

    const total = totalRecords || records.length;
    const [ pageConfig, setPageConfig ] = useState({
        perPageCount: pageSizeList[0].id,
        pageNo: 1
    });
    const { perPageCount, pageNo } = pageConfig;

    let finalRecords = paginationType === "SERVER" ? records : getPageRecords(records, pageConfig);

    const requests = [{
        requestId: requestId,
        params: {
            ...restProps,
            page: pageNo,
            count: perPageCount
        }
    }];

    const paginationComponent = <PaginationComponent pageSizeList={pageSizeList} 
                            onPageConfigChanged={setPageConfig} 
                            pageConfig={{...pageConfig, total: total}} />

    let wrappedComponent =  (<Table records={finalRecords} columnConfigs={columnConfigs} idAttribute={idAttribute}
                                    isExpandableTable={isExpandableTable} ExpandedRowComponent={ExpandedRowComponent} />);
    
    if (paginationType === "SERVER") {
        wrappedComponent = (<DataLoader requests={requests} onDataLoaded={onDataLoaded}>
            {wrappedComponent}
        </DataLoader>)
    }

    return (<div className={className}>
        {paginationPosition === "TOP" && total > 0 && paginationComponent}
        {wrappedComponent}
        {paginationPosition === "BOTTOM" && total > 0 && paginationComponent}
    </div>);
};

PaginatedTable.propTypes = {
    ...Table.propTypes,
    /** list of supported page sizes  */
    pageSizeList: PropTypes.array,
    /** Total number of records, used for paginating  */
    totalRecords: PropTypes.number,
    /** location where the pagination component must be displayed */
    paginationPosition: PropTypes.oneOf(["TOP", "BOTTOM"]),
    /** CLIENT side pagination or SERVER side pagination */
    paginationType: PropTypes.oneOf(["CLIENT", "SERVER"]),
    /** If SERVER side pagination, the ID of the request to call */
    requestId: PropTypes.string
}

PaginatedTable.defaultProps = {
    ...Table.defaultProps,
    pageSizeList: [{
        id: "10",
        name: "10"
    }, {
        id: "20",
        name: "20"
    }, {
        id: "50",
        name: "50"
    }, {
        id: "100",
        name: "100"
    }],
    paginationPosition: "TOP",
    paginationType: "CLIENT"
};

export default PaginatedTable;