export enum priorityLevels {
    HIGH = 1,
    MEDIUM = 2,
    LOW = 3
}

export enum taskStatus {
    COMPLETED = 1,
    IN_PROGRESS = 2,
    TODO = 3
}

export const initTaskStatus = {
    completedTask: 0,
    inProgressTask : 0,
    todoTask : 0
}

export const initTaskPriorityLvl = {
    high : 0,
    medium : 0,
    low : 0
}

export const AvatarIconColorCode = ["#2ecc71","#f4d03f","#3498db","#af7ac5","#e74c3c"];