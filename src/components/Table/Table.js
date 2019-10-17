import React, { Component, Fragment, useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import utils from "../../core/utils";

const StyledTable = styled.table`
    border-collapse: collapse;
`;

const StyledHeaderCell = styled.th`
    background-color: #125c7f;
    color: #FFF;
    font-weight: normal;

    &.expand-column {
        width: 50px;
    }
`;

const StyledTableRow = styled.tr`
    ${props => props.even ? css`
        background-color: #82bed9;
    ` : css`
        background-color: #dcf1fa;
    `}

    &.parent-row {
        cursor: pointer;
    }

    .expand-open {
        &:before {
            content: "▼"
        }
    }

    .expand-close {
        &:before {
            content: "▶"
        }
    }
`;

const StyledExpandedRow = styled.tr`
    background-color: #ecf2f4;
`;

const StyledNoDataWrapper = styled.div`
    text-align: center;
`;

const DefaultNoDataComponent = () => {
    return (<StyledNoDataWrapper>No data found</StyledNoDataWrapper>)
};

const getTDValue = ({ columnValue, rowData = {}, columnConfig = {}, tdProps = {}}) => {
    const { key, valueFormatter, ColumnComponent, componentProps = {} } = columnConfig;
    let tdValue = columnValue;

    if (typeof(valueFormatter) === "function") {
        tdValue = valueFormatter({value: columnValue, record: rowData});
    } else if (ColumnComponent) {
        tdValue = <ColumnComponent record={record} {...componentProps} />
    }

    return <td key={key} {...tdProps}>{tdValue}</td>
}

const ExpandableTR = (props) => {
    const { isEven, rowData, columnConfigs, ExpandedRowComponent } = props;
    const [ isExpanded, setIsExpanded ] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (<Fragment>
        <StyledTableRow className="parent-row" even={isEven}>
            {/* add column for expand toggle icon */}
            {getTDValue({
                columnValue: "",
                columnConfig: {
                    key: "expandIcon"
                },
                tdProps: {
                    onClick: toggleExpanded,
                    className: isExpanded ? "expand-open" : "expand-close"
                }
            })}
            {columnConfigs.map(configObj => {
                const { key } = configObj;
                return getTDValue({
                    columnValue: rowData[key],
                    rowData,
                    columnConfig: configObj,
                    tdProps: {
                        onClick: toggleExpanded
                    }
                });
            })}
        </StyledTableRow>
        {isExpanded && <StyledExpandedRow className="expanded-row">
            {/* +1 is to accomodate the expand toggle icon column */}
            <td colSpan={columnConfigs.length + 1}>
                <ExpandedRowComponent parentRecord={rowData} />
            </td>
        </StyledExpandedRow>}
    </Fragment>);
};

ExpandableTR.propTypes = {
    ExpandedRowComponent: PropTypes.any.isRequired // TODO : check for a React Component
};

const TR = (props) => {
    const { rowData, columnConfigs, isEven } = props;

    return (<StyledTableRow even={isEven}>
        {columnConfigs.map(configObj => {
            const { key } = configObj;
            return getTDValue({columnValue: rowData[key], rowData, columnConfig: configObj});
        })}
    </StyledTableRow>);
};

const Table = (props) => {
    const {
        className,
        records,
        columnConfigs,
        idAttribute,
        isExpandableTable,
        ExpandedRowComponent,
        NoDataComponent
    } = props;

    const RowComponent = isExpandableTable ? ExpandableTR : TR;
    
    if (records.length === 0) {
        return (<NoDataComponent />);
    } else {
        return (<StyledTable className={className}>
            <thead>
                <tr>
                    {/* add empty column for expand icon */}
                    {isExpandableTable && <StyledHeaderCell key="expandIcon" className="expand-column"></StyledHeaderCell>}
                    {columnConfigs.map(columnObj => {
                        const { key, label } = columnObj;
                        return (<StyledHeaderCell key={key}>{label}</StyledHeaderCell>);
                    })}
                </tr>
            </thead>
            <tbody>
                {records.map((rowData, index)=> {
                    return <RowComponent key={rowData[idAttribute]} 
                                        isEven={utils.isEven(index)}
                                        rowData={rowData} 
                                        columnConfigs={columnConfigs} 
                                        ExpandedRowComponent={ExpandedRowComponent} />
                })}
            </tbody>
        </StyledTable>)
    }
};

Table.propTypes = {
    /** Array containing table row data */
    records: PropTypes.array.isRequired,
    /** Array containing the table columns config */
    columnConfigs: PropTypes.array.isRequired,
    /** ID attribute key to use when rendering the dropdown items */
    idAttribute: PropTypes.string,
    /** set to "true" if table rows are expandable */
    isExpandableTable: PropTypes.bool,
    /** Component to be rendered on expanding a row */
    ExpandedRowComponent: PropTypes.oneOfType([
        PropTypes.instanceOf(Element),
        PropTypes.instanceOf(Component),
        PropTypes.func
    ]),
    /** Component to be rendered if the table has no data */
    NoDataComponent: PropTypes.oneOfType([
        PropTypes.instanceOf(Element),
        PropTypes.instanceOf(Component),
        PropTypes.func
    ]),
}

Table.defaultProps = {
    className: "",
    idAttribute: "id",
    isExpandableTable: false,
    NoDataComponent: DefaultNoDataComponent
};

export default Table;