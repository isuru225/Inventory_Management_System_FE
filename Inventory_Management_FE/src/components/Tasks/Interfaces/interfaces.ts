export interface ITaskInfo {
    id : string,
    projectId : string,
    taskTitle : string,
    createdDate : string,
    dueDate : string,
    description : string,
    status : number,
    priorityLevel : number,
    createdEmployeeInfo : IEmployeeInfo,
    assignedEmployeeInfos : Array<IEmployeeInfo>
}

interface IEmployeeInfo {
    employeeId : string,
    employeeName : string,
    email : string,
    phoneNumber : string
}

export interface IPopUpPosition {
    left? : string,
    right? : string
}