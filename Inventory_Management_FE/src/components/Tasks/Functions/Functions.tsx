import { IEmployeeInfos } from "components/Home/Interfaces/Interface.ts";
import AvatarIcon from "../Components/AvatarIcon.tsx";
import React from "react";
import { ITaskInfo } from "../Interfaces/interfaces.ts";
import { taskStatus, taskStatusName } from "../Constants/Constants.ts";
import { CCol, CRow } from "@coreui/react";
import TaskCard from "../Components/TaskCard.tsx";
import TaskStatusHeading from "../Components/TaskStatusHeading.tsx";


export const AvatarIconsHandler = (employeeInfoList: Array<IEmployeeInfos>) => {

    const employeeNameList = employeeInfoList?.map((employeeInfo: any) => {
        return employeeInfo.employeeName
    })
    return (
        <AvatarIcon assignedEmployeeNameList={employeeNameList} />
    )
}



export const TaskHandler = (taskInfos: Array<ITaskInfo>) : Array<JSX.Element> => {
    const toDoTaskList: Array<JSX.Element> = [];
    const inProgressTaskList: Array<JSX.Element> = [];
    const completedTaskList: Array<JSX.Element> = [];

    //add task status headings
    toDoTaskList.push(
        <div className="task-unit">
            <TaskStatusHeading status={taskStatusName.TODO}/>
        </div>
    )
    inProgressTaskList.push(
        <div className="task-unit">
            <TaskStatusHeading status={taskStatusName.IN_PROGRESS}/>
        </div>
    )
    completedTaskList.push(
        <div className="task-unit">
            <TaskStatusHeading status={taskStatusName.COMPLETED}/>
        </div>
    )

    taskInfos?.forEach((taskInfo: ITaskInfo) => {
        if (taskStatus.TODO == taskInfo.status) {
            toDoTaskList.push(
                <div className="task-unit">
                    <TaskCard taskInfo={taskInfo}/>
                </div>
            );
        } else if (taskStatus.IN_PROGRESS == taskInfo.status) {
            inProgressTaskList.push(
                <div className="task-unit">
                    <TaskCard taskInfo={taskInfo}/>
                </div>
            );
        } else if (taskStatus.COMPLETED == taskInfo.status) {
            completedTaskList.push(
                <div className="task-unit">
                    <TaskCard taskInfo={taskInfo}/>
                </div>
            )
        }
    });

    // if(toDoTaskList.length == 0){
    //     toDoTaskList.push(
    //         <div className="task-unit-empty">
    //         </div>
    //     )
    // }else if(inProgressTaskList.length == 0){
    //     inProgressTaskList.push(
    //         <div className="task-unit-empty">
    //         </div>
    //     )
    // }else if(completedTaskList.length == 0){
    //     completedTaskList.push(
    //         <div className="task-unit-empty">
    //         </div>
    //     )
    // }

    // let maxTaskValue = 0;
    // if (maxTaskValue < toDoTaskList.length) {
    //     maxTaskValue = toDoTaskList.length;
    // }
    // if (maxTaskValue < inProgressTaskList.length) {
    //     maxTaskValue = inProgressTaskList.length;
    // }
    // if (maxTaskValue < completedTaskList.length) {
    //     maxTaskValue = completedTaskList.length
    // }

    const taskArray = [];

    //add taskBundle(to-do)
    taskArray.push(
        <div className="task-units-bundle">
            {toDoTaskList}
        </div>
    )
    //add taskBundle(in-progress)
    taskArray.push(
        <div className="task-units-bundle">
            {inProgressTaskList}
        </div>
    )
    //add taskBundle(completed)
    taskArray.push(
        <div className="task-units-bundle">
            {completedTaskList}
        </div>
    )

    return taskArray;

    //const taskRows = [];

    //apply the headings 
    // const taskStatusHeadingRow = [];
    // //add todo task status heading
    // taskStatusHeadingRow.push(
    //     <CCol>
    //         <TaskStatusHeading status={taskStatusName.TODO}/>
    //     </CCol>
    // )
    // //add in progress task heading
    // taskStatusHeadingRow.push(
    //     <CCol>
    //         <TaskStatusHeading status={taskStatusName.IN_PROGRESS}/>
    //     </CCol>
    // )
    // //add completed task heading
    // taskStatusHeadingRow.push(
    //     <CCol>
    //         <TaskStatusHeading status={taskStatusName.COMPLETED}/>
    //     </CCol>
    // )

    // taskRows.push(
    //     <CRow>
    //         {taskStatusHeadingRow}
    //     </CRow>
    // )

    //apply tasks into columns and rows
    // for (let i = 0; i < maxTaskValue; i++) {
    //     const taskRow = [];
    //     if (toDoTaskList.length > i) {
    //         taskRow.push(
    //             <CCol>
    //                 <TaskCard taskInfo={toDoTaskList[i]} />
    //             </CCol>
    //         )
    //     } else {
    //         taskRow.push(
    //             <CCol>
    //             </CCol>
    //         )
    //     }
    //     if (inProgressTaskList.length > i) {
    //         taskRow.push(
    //             <CCol>
    //                 <TaskCard taskInfo={inProgressTaskList[i]} />
    //             </CCol>
    //         )
    //     } else {
    //         taskRow.push(
    //             <CCol>
    //             </CCol>
    //         )
    //     }
    //     if (completedTaskList.length > i) {
    //         taskRow.push(
    //             <CCol>
    //                 <TaskCard taskInfo={completedTaskList[i]} />
    //             </CCol>
    //         )
    //     } else {
    //         taskRow.push(
    //             <CCol>
    //             </CCol>
    //         )
    //     }

    //     taskRows.push(
    //         <CRow>
    //             {taskRow}
    //         </CRow>
    //     )
    // }

    //return taskRows;

}