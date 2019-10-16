import React, { useState } from "react";
import Dropdown,  { SelectArrow} from "../Form/Dropdown";
import styled, { css } from "styled-components";
import utils from "../../core/utils";

const StyledWrapper = styled.div`
    background-color: rgba(148, 170, 202, 0.14);
    text-align: right;
    font-size: 14px;
    padding: 5px;

    .per-page-count {
        display: inline-block;
    }

    .form-el-cont {
        margin: 0;
    }

    .inline-modal-btn {
        background: transparent;
        padding: 0;
    }
`;

const StyledNavDiv = styled.div`
    display: inline-block;
    border-radius: 12px;
    border: solid 1px #8399ae;
    background-color: #f6f7f9;
    vertical-align: middle;
    margin-left: 15px;
    overflow: hidden;
`;

const StyledAnchor = styled.a`
    padding: 0 5px;
    text-decoration: none;
    color: inherit;

    &:first-child {
        border-right: solid 1px #8399ae;
    }

    ${props => props.disabled && css`
        color: #ccc;
        pointer-events: none;
        cursor: not-allowed;
    `}
`;

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
    
        return (<div>{summaryString}<SelectArrow className="select-arrow"></SelectArrow></div>);
    }

    const changePage = (moveUnit) => {
        onPageConfigChanged({
            ...pageConfig,
            pageNo: pageNo + moveUnit
        });
    };

    let isLeftNavDisbaled = (pageNo <= 1);
    let isRightNavDisbaled = (pageNo >= Math.ceil(total / +perPageCount));

    return (<StyledWrapper className="paginate-wrapper">
        <Dropdown name="perPageCount" 
            showLabel={false} className="per-page-count" 
            options={pageSizeList} 
            onChange={onPerPageChanged} 
            renderSelectionSummary={renderSelectionSummary} />{`of ${total}`}
        <StyledNavDiv className="paginate-nav">
            <StyledAnchor href="javacsript:void(0)" 
                onClick={() => changePage(-1)} 
                disabled={isLeftNavDisbaled}>
                {"<"}
            </StyledAnchor>
            <StyledAnchor href="javacsript:void(0)" 
                onClick={() => changePage(1)}
                disabled={isRightNavDisbaled}>
                {">"}
            </StyledAnchor>
        </StyledNavDiv>
    </StyledWrapper>)
};

export default PaginationComponent;