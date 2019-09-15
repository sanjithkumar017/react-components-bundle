import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

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
    const { rowData, columnConfigs, ExpandedRowComponent } = props;
    const [ isExpanded, setIsExpanded ] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (<Fragment>
        <tr className="parent-row">
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
        </tr>
        {isExpanded && <tr className="expanded-row">
            <td colSpan={columnConfigs.length}>
                <ExpandedRowComponent parentRecord={rowData} />
            </td>
        </tr>}
    </Fragment>);
};

ExpandableTR.propTypes = {
    ExpandedRowComponent: PropTypes.any.isRequired // TODO : check for a React Component
};

const TR = (props) => {
    const { rowData, columnConfigs } = props;

    return (<tr>
        {columnConfigs.map(configObj => {
            const { key } = configObj;
            return getTDValue({columnValue: rowData[key], rowData, columnConfig: configObj});
        })}
    </tr>);
};

const Table = (props) => {
    const {
        records,
        columnConfigs,
        expandableTable,
        ExpandedRowComponent
    } = props;

    const RowComponent = expandableTable ? ExpandableTR : TR;

    // TODO : Handle no data available case
    // TODO : Add pagination support

    return (<table>
        <thead>
            <tr>
                {columnConfigs.map(columnObj => {
                    const { key, label } = columnObj;
                    return (<th key={key}>{label}</th>);
                })}
            </tr>
        </thead>
        <tbody>
            {records.map(rowData => {
                return <RowComponent key={rowData.id} rowData={rowData} columnConfigs={columnConfigs} ExpandedRowComponent={ExpandedRowComponent} />
            })}
        </tbody>
    </table>)
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
    expandableTable: false
}

export default Table;