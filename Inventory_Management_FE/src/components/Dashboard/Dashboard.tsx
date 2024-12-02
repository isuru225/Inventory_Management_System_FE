import React, { useEffect, useState } from "react"
import TaskStatus from "./Components/TaskStatus.tsx"
import { connect, ConnectedProps } from "react-redux"
import { DashboardActions } from "../../actions/Dashboard/Dashboard.ts";
import { CheckCircleOutlined, GlobalOutlined, FieldTimeOutlined, FileSyncOutlined } from '@ant-design/icons';
import PriorityDoughnutChart from "./Components/PriorityDoughnutChart.tsx";
import PriorityBarChart from "./Components/PriorityBarChart.tsx";
import { taskPriorityLvlHandler, taskStatusHandler, taskTableHandler } from "./Functions/Functions.tsx";
import { ITaskStatus } from "./Interfaces/Interfaces.ts";
import { initTaskStatus } from "./Constants/Constants.ts";
import { CRow, CCol } from "@coreui/react";
import TaskTable from "./Components/TaskTable.tsx";

type props = PropsFromRedux;

const Dashboard: React.FC<props> = (props) => {
    const { data, isLoading, getProjectTasks } = props;
    const [taskStatusInfo, setTaskStatusInfo] = useState<ITaskStatus>(initTaskStatus);

    console.log("Duck", data);
    useEffect(() => {
        getProjectTasks({
            projectId: "66f2c964630dff2676eb1f07"
        })
    }, [])

    useEffect(() => {
        if (data != null && data != undefined && data.length > 0) {
            setTaskStatusInfo(taskStatusHandler(data));
        }
    }, [data])

    return (
        <>
            <div className="task-card-container">
                <TaskStatus title={"Total Tasks"} contentOne={data?.length} contentTwo={11} icon={<GlobalOutlined className="icon-total-task" />} />
                <TaskStatus title={"Completed Tasks"} contentOne={taskStatusInfo.completedTask} contentTwo={11} icon={<CheckCircleOutlined className="icon-complete-task" />} />
                <TaskStatus title={"Task In Progress"} contentOne={taskStatusInfo.inProgressTask} contentTwo={11} icon={<FieldTimeOutlined className="in-progress-task" />} />
                <TaskStatus title={"TODO Tasks"} contentOne={taskStatusInfo.todoTask} contentTwo={11} icon={<FileSyncOutlined className="todo-task" />} />
            </div>
            <br/>
            <div>
                <h1>
                    TASK STATUS
                </h1>
            </div>
            <hr/>
            <br/>
            <CRow>
                <CCol xs={6}>
                    <PriorityBarChart priorityLvl={taskPriorityLvlHandler(data)} />
                </CCol>
                <CCol xs={6}>
                    <PriorityDoughnutChart priorityLvl={taskPriorityLvlHandler(data)} />
                </CCol>
            </CRow>
            <h1>
                TASK IN BREIF
            </h1>
            <TaskTable tableData={taskTableHandler(data)}/>
        </>
    )
}


const mapStateToProps = (state: any) => {
    const { DashboardReducer } = state;
    const { data, isLoading } = DashboardReducer

    return {
        data,
        isLoading
    }
}

const mapDispatchToProps = {
    getProjectTasks: DashboardActions.projectSpecificTasks.get
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(Dashboard);
