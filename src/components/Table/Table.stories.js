import React, { useState } from 'react';
import { storiesOf } from "@storybook/react";

import Table from "./Table";
import PaginatedTable from "./PaginatedTable";
import DataLoader from "../DataLoader";
import dataLoader from "../../core/dataLoader";
import { TODOS, FRUITS_LIST } from "../../../public/Constants";

const getFruitsColumnConfigs = () => {
    let columnConfigs = [{
        label: "Id",
        key: "id"
    }, {
        label: "Task Name",
        key: "name"   
    }];

    return columnConfigs;
};

const getTodosColumnConfigs = () => {
    let columnConfigs = [{
        label: "Id",
        key: "id"
    }, {
        label: "Task Name",
        key: "title"
    }, {
        label: "Status",
        key: "completed",
        valueFormatter: function({value}) {
            return value ? "Completed" : "Not Started";
        }
    }];

    return columnConfigs;
};

const getUsersColumnConfigs = () => {
    let columnConfigs = [{
        label: "Avatar",
        key: "avatar",
        valueFormatter: function({value}) {
            return <img src={value} />
        }
    }, {
        label: "First Name",
        key: "name",
        valueFormatter: function({record}) {
            const { first_name, last_name } = record;

            return `${first_name} ${last_name}`;
        }
    }];

    return columnConfigs;
};

const TODODetail = (props) => {
    const { parentRecord = {} } = props;
    const { id } = parentRecord;
    const [ todoData, setTodoData ] = useState({});
    const { title, completed } = todoData;

    dataLoader.addRequestConfig("getTodoById", {
        method: "GET",
        url: function (params) {
            return `https://jsonplaceholder.typicode.com/todos/${params.id}`
        }
    });

    const onDataLoaded = ([todoData]) => {
        setTodoData(todoData);
    };

    const requests = [{
        requestId: "getTodoById",
        params: {
            id
        }
    }];

    return (<DataLoader requests={requests} onDataLoaded={onDataLoaded}>
        <div><b>Title:</b> {title} </div>
        <div><b>Status:</b> {completed ? "Completed" : "Not Completed"} </div>
    </DataLoader>);
};

const ServerPaginatedExample = () => {
    const [ usersData, setUsersData ] = useState({});
    const { data, total } = usersData;

    dataLoader.addRequestConfig("getUsers", {
        method: "GET",
        url: "https://reqres.in/api/users"
    });

    const onDataLoaded = ([usersData]) => {
        setUsersData(usersData);
    }

    return (<PaginatedTable records={data} totalRecords={total} perPageKey="per_page" columnConfigs={getUsersColumnConfigs()}
                    paginationType="SERVER" requestId="getUsers" onDataLoaded={onDataLoaded} />);
}

storiesOf("Table", module)
    .addParameters({
        info: {
            propTablesExclude: [ServerPaginatedExample]
        }
    })
    .add("Simple Usage", () => {
        return (<Table records={FRUITS_LIST} columnConfigs={getFruitsColumnConfigs()}/>);
    })
    .add("Expanded Table", () => {
        return (<Table records={TODOS} columnConfigs={getTodosColumnConfigs()}
                        isExpandableTable={true} ExpandedRowComponent={TODODetail} />);
    })
    .add("Client Side Paginated Table", () => {
        return (<PaginatedTable records={TODOS} columnConfigs={getTodosColumnConfigs()}
                        paginationType="CLIENT" />);
    })
    .add("Server Side Paginated Table", () => <ServerPaginatedExample />)
