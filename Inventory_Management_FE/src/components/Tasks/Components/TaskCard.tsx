import React, { useState, useRef, useEffect } from 'react';
import { IPopUpPosition, ITaskInfo } from '../Interfaces/interfaces.ts';
import { priority, priorityLevels, taskMenuOptions } from '../Constants/Constants.ts';
import moment from 'moment';
import { AvatarIconsHandler } from '../Functions/Functions.tsx';

type propsFromRedux = {
    taskInfo: ITaskInfo
}

const TaskCard: React.FC<propsFromRedux> = ({ taskInfo }) => {
    const { taskTitle, priorityLevel, dueDate, createdDate, assignedEmployeeInfos } = taskInfo;

    const [taskOptionsVisibility, setTaskOptionsVisibility] = useState<boolean>(false);
    const [popupPosition, setPopupPosition] = useState<IPopUpPosition>({ left: '100%' });
    const menuRef = useRef<HTMLDivElement | null>(null);
    const popupRef = useRef<HTMLDivElement>(null);

    console.log("Doom", taskTitle);
    console.log("Doom22", taskInfo);

    let priorityLvl = priority.NONE;
    let priorityLableClassName = "priority-label";

    switch (priorityLevel) {
        case priorityLevels.HIGH:
            priorityLvl = priority.HIGH
            priorityLableClassName = priorityLableClassName + "-high"
            break;
        case priorityLevels.MEDIUM:
            priorityLvl = priority.MEDIUM
            priorityLableClassName = priorityLableClassName + "-medium"
            break;
        case priorityLevels.LOW:
            priorityLvl = priority.LOW
            priorityLableClassName = priorityLableClassName + "-low"
            break;
        default:
            priorityLvl = priority.NONE
            priorityLableClassName = priorityLableClassName
    }

    console.log("Kits", priorityLableClassName);

    const toggleMenu = () => {
        setTaskOptionsVisibility(!taskOptionsVisibility);
    };

    useEffect(() => {
        if (taskOptionsVisibility && menuRef.current && popupRef.current) {
            const menuRect = menuRef.current.getBoundingClientRect();
            const popupRect = popupRef.current.getBoundingClientRect();
            const windowWidth = window.innerWidth;

            // Check if popup will overflow the right edge of the window
            if (menuRect.right + popupRect.width > windowWidth) {
                setPopupPosition({ right: '100%' }); // Show popup to the left
            } else {
                setPopupPosition({ left: '100%' }); // Show popup to the right
            }
        }
    }, [taskOptionsVisibility]);

    return (
        <div className="task-container">
            <div className="task-header">
                <div className={priorityLableClassName}>{priorityLvl}</div>
                <div className="task-menu" onClick={toggleMenu} ref={menuRef}>
                    ⋮
                    {taskOptionsVisibility && (
                        <div className="task-menu-popup" style={{ ...popupPosition }} ref={popupRef}>
                            <ul>
                                <li>{taskMenuOptions.OPEN_TASK}</li>
                                <li>{taskMenuOptions.EDIT}</li>
                                <li>{taskMenuOptions.ADD_SUB_TASK}</li>
                                <li>{taskMenuOptions.DUPLICATE}</li>
                                <li>{taskMenuOptions.Delete}</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            {/* {
                taskOptionsVisibility && (
                    <div className="task-menu-popup">
                        <ul>
                            <li>{taskMenuOptions.OPEN_TASK}</li>
                            <li>{taskMenuOptions.EDIT}</li>
                            <li>{taskMenuOptions.ADD_SUB_TASK}</li>
                            <li>{taskMenuOptions.DUPLICATE}</li>
                            <li>{taskMenuOptions.Delete}</li>
                        </ul>
                    </div>
                )
            } */}

            <div className="task-title">
                <span>{taskTitle}</span>
                <span className="task-date">{moment.utc(dueDate).local().format('YYYY-MM-DD')}</span>
            </div>
            <hr />
            <div className="task-infos">
                <div className="icons">
                    <span>🗨 4</span>
                    <span>📄 3</span>
                    <span>📋 0/2</span>
                </div>

                <div className="avatars">
                    {AvatarIconsHandler(assignedEmployeeInfos)}
                </div>
            </div>
            <hr />
            <div className="subtask-section">
                <div className="task-title">
                    <span>Blog App Dashboard</span>
                    <span className="task-date">{moment.utc(createdDate).local().format('YYYY-MM-DD')}</span>
                </div>

                <span className="tag">Design</span>
            </div>

            <div className="add-subtask">+ ADD SUBTASK</div>
        </div>
    );
};

export default TaskCard;
