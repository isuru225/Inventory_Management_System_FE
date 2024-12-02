import React, { useEffect } from "react";
import TaskCard from "./Components/TaskCard.tsx";
import { connect, ConnectedProps } from "react-redux";
import { TasksActions } from "../../actions/Tasks/Tasks.ts";
import { ITaskInfo } from "./Interfaces/interfaces.ts";
import { CContainer, CRow } from "@coreui/react";
import { TaskHandler } from "./Functions/Functions.tsx";
import { Button } from "antd";



type props = propsFromRedux;

const Tasks: React.FC<props> = (props) => {

    const { data, isLoading, getProjectTasks } = props;

    useEffect(() => {
        getProjectTasks({
            projectId: "66f2c964630dff2676eb1f07"
        })
    }, [])

    return (
        <>
            <div className="project-title">

            </div>
            <div className="task-create-btn">
                <Button type="primary">
                    Create Task
                </Button>
            </div>
            <hr/>
            <div className={"task-card-panel"}>
                {TaskHandler(data)}
            </div>
        </>
    )
}

const mapStateToProps = (state: any) => {
    const { TasksReducer } = state;
    const { data, isLoading } = TasksReducer;

    return {
        data,
        isLoading
    }
}

const mapDispatchToProps = {
    getProjectTasks: TasksActions.projectSpecificTasks.get
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type propsFromRedux = ConnectedProps<typeof connector>;
export default connector(Tasks);
