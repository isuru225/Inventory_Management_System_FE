import { take } from "redux-saga/effects";
import { priorityLevels, taskStatus } from "../Constants/Constants.ts";
import { ITaskStatus, ITaskTableData } from "../Interfaces/Interfaces.ts"
import AvatarIcon from "../Components/AvatarIcon.tsx";
import React from "react";
import moment from 'moment';

export const taskStatusHandler = (taskInfos : any) : ITaskStatus => {

    const taskStatusInfos : ITaskStatus = {
        completedTask : 0,
        inProgressTask : 0,
        todoTask : 0
    }

    let completedTaskCount = 0;
    let inProgressTaskCount = 0;
    let todoTaskCount = 0;

    taskInfos?.map((taskInfo : any)=>{
        if(taskInfo.status == taskStatus.COMPLETED){
            completedTaskCount++;
        }else if(taskInfo.status == taskStatus.IN_PROGRESS ){
            inProgressTaskCount++;
        }else if(taskInfo.status == taskStatus.TODO){
            todoTaskCount++;
        }

    })
    taskStatusInfos.completedTask = completedTaskCount;
    taskStatusInfos.inProgressTask = inProgressTaskCount;
    taskStatusInfos.todoTask = todoTaskCount;

    return taskStatusInfos;

}

export const taskPriorityLvlHandler = (taskInfo : any) : Array<number> => {
    const priorityLvl : Array<number> = [];

    let highLvl = 0;
    let mediumLvl = 0;
    let lowLvl = 0;

    taskInfo?.map((taskInfo : any)=>{
        if(taskInfo.priorityLevel == priorityLevels.HIGH){
            highLvl++;
        }else if(taskInfo.priorityLevel == priorityLevels.MEDIUM ){
            mediumLvl++;
        }else if(taskInfo.priorityLevel == priorityLevels.LOW){
            lowLvl++;
        }
    })

    priorityLvl[0] = highLvl;
    priorityLvl[1] = mediumLvl;
    priorityLvl[2] = lowLvl;

    console.log("Redmi",priorityLvl);

    return priorityLvl;
}



export const taskTableHandler = (taskInfo : any) : Array<ITaskTableData> => { 

    const taskArray = taskInfo?.map((task : any )=>{
        console.log("GnnnM",task);
        const taskTableData : ITaskTableData = {
            key : "",
            task_title : "",
            priority : 0,
            created_date : "",
            created_by : "",
            team : <></>,
        }

        taskTableData.key = task.id;
        taskTableData.task_title = task.taskTitle;
        taskTableData.priority = task.priorityLevel;
        taskTableData.created_date = moment.utc(task.createdDate).local().format('YYYY-MM-DD HH:mm:ss');
        taskTableData.created_by = task.createdEmployeeInfo.employeeName
        taskTableData.team = AvatarIconsHandler(task.assignedEmployeeInfos)

        return taskTableData;
    })

    console.log("Horn",taskArray);
    return taskArray;

}

const AvatarIconsHandler = (employeeInfoList : Array<string>) => {

    const employeeNameList = employeeInfoList?.map((employeeInfo : any)=>{
        return employeeInfo.employeeName
    }) 
    return(
        <AvatarIcon assignedEmployeeNameList={employeeNameList}/>
    )
}