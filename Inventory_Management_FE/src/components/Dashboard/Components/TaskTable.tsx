import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { ITaskTableData } from '../Interfaces/Interfaces';

interface DataType {
  key: string;
  task_title: string;
  priority: number;
  created_date: string;
  created_by: string;
  team : any;
  tags: string[];
}

type propsFromParent = {
  tableData : Array<ITaskTableData>
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Task Title',
    dataIndex: 'task_title',
    key: 'task_title',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Priority Level',
    dataIndex: 'priority',
    key: 'priority',
  },
  {
    title: 'Created Date',
    dataIndex: 'created_date',
    key: 'created_date',
  },
  {
    title: 'Created By',
    dataIndex: 'created_by',
    key: 'created_by',
  },
  {
    title: 'Team',
    dataIndex: 'team',
    key: 'team',
  },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  // {
  //   title: 'Action',
  //   key: 'action',
  //   render: (_, record) => (
  //     <Space size="middle">
  //       <a>Invite {record.name}</a>
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },
];


const TaskTable : React.FC<propsFromParent> = ({tableData}) => {
  console.log("Necto",tableData);
    return (
        <>
            <Table columns={columns} dataSource={tableData}/>
        </>
    )
}

export default TaskTable;