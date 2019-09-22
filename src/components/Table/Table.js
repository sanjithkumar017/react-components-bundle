import React, { Fragment, useState } from "react";
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
`;

const StyledExpandedRow = styled.tr`
    background-color: #ecf2f4;
`;

const getTDValue = ({ columnValue, rowData, columnConfig, tdProps = {}}) => {
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
            <td colSpan={columnConfigs.length}>
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
        expandableTable,
        ExpandedRowComponent
    } = props;

    const RowComponent = expandableTable ? ExpandableTR : TR;

    // TODO : Handle no data available case
    // TODO : Add pagination support

    return (<StyledTable className={className}>
        <thead>
            <tr>
                {columnConfigs.map(columnObj => {
                    const { key, label } = columnObj;
                    return (<StyledHeaderCell key={key}>{label}</StyledHeaderCell>);
                })}
            </tr>
        </thead>
        <tbody>
            {records.map((rowData, index)=> {
                return <RowComponent key={rowData.id} 
                                    isEven={utils.isEven(index)}
                                    rowData={rowData} 
                                    columnConfigs={columnConfigs} 
                                    ExpandedRowComponent={ExpandedRowComponent} />
            })}
        </tbody>
    </StyledTable>)
};

Table.propTypes = {
    /** Array containing table row data */
    records: PropTypes.array,
    /** Array containing the table columns config */
    columnConfigs: PropTypes.array.isRequired,
    /** set to "true" if table rows are expandable */
    expandableTable: PropTypes.bool,
    /** Component to be rendered on expanding a row */
    ExpandedRowComponent: PropTypes.oneOfType([
        PropTypes.instanceOf(Element),
        PropTypes.func
    ])
}

Table.defaultProps = {
    className: "",
    expandableTable: false
}

export default Table;