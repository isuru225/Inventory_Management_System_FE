export interface IProject {
    id : string,
    projectName : string,
    description : string,
    projectTasks : Array<any>,
    applicationUsers : Array<any>
    technologies : Array<string>
}

export interface IEmployeeInfos {
    employeeId : string,
    employeeName : string,
    email : string,
    phoneNumber : string
}
