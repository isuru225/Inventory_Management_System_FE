// import React from "react";
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
// import { Avatar, Card } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

// const { Meta } = Card;

// const Kard = () => {
//     return (
//         <Card
//             style={{ width: 300 }}
//             actions={[
//                 <SettingOutlined key="setting" />,
//                 <EditOutlined key="edit" />,
//                 <EllipsisOutlined key="ellipsis" />,
//             ]}
//         >
//             <Meta
//                 title="Completed Tasks"
//                 description="This is the description"
//             />
//         </Card>
//     )
// }

// export default Kard;

import React from 'react';

interface TaskCardProps {
  title: string
  contentOne: number;
  contentTwo: number;
  icon: any
}

const TaskCard: React.FC<TaskCardProps> = ({ title, contentOne, contentTwo, icon }) => {
  return (
    <div className="task-card">
      <div className="task-card-header">
        <span>{title}</span>
      </div>
      <div className="task-card-body">
        
        <div className="task-info">
          <h1>{contentOne}</h1>
          <p>{contentTwo} last month</p>
        </div>
        <div className="task-icon">
          {icon} {/* Placeholder for the icon */}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;