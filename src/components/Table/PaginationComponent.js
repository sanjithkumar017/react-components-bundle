import React from "react";
import Dropdown from "../Form/Dropdown";
import utils from "../../core/utils";

const PaginationComponent = (props) => {
    const {
        pageSizeList,
        pageConfig,
        onPageConfigChanged
    } = props;

    const { perPageCount, pageNo, total } = pageConfig;

    const onPerPageChanged = (perPage) => {
        onPageConfigChanged({
            ...pageConfig,
            pageNo: 1,
            perPageCount: +perPage,
        });
    };

    const renderSelectionSummary = () => {
        const pagIndex = utils.getPagIndex(pageConfig);
        const { start, end } = pagIndex;
        const summaryString = `${start + 1}-${end}`;
    
        return (<div>{summaryString}<span className="RCB-select-arrow"></span></div>);
    }

    const changePage = (moveUnit) => {
        onPageConfigChanged({
            ...pageConfig,
            pageNo: pageNo + moveUnit
        });
    };

    let isLeftNavDisbaled = (pageNo <= 1);
    let isRightNavDisbaled = (pageNo >= Math.ceil(total / +perPageCount));

    return (<div className="RCB-paginate-wrapper">
        <Dropdown name="perPageCount" 
            showLabel={false} className="RCB-per-page-count" 
            options={pageSizeList} 
            onChange={onPerPageChanged} 
            renderSelectionSummary={renderSelectionSummary} />{`of ${total}`}
        <div className="RCB-paginate-nav">
            <a href="javacsript:void(0)" className={`RCB-page-nav ${isLeftNavDisbaled ? "disabled" : ""}`}
                onClick={() => changePage(-1)}>
                {"<"}
            </a>
            <a href="javacsript:void(0)" className={`RCB-page-nav ${isRightNavDisbaled ? "disabled" : ""}`}
                onClick={() => changePage(1)}>
                {">"}
            </a>
        </div>
    </div>)
};

export default PaginationComponent;