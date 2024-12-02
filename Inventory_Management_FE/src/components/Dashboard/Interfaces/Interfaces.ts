export interface ITaskStatus {
    completedTask: number,
    inProgressTask: number,
    todoTask: number
}

export interface ITaskTableData {
    key: string,
    task_title: string,
    priority: number,
    created_date: string,
    created_by: string,
    team: JSX.Element,
}