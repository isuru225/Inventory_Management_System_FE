import React from 'react';
import { Avatar, Tooltip } from 'antd';
import { AvatarIconColorCode } from '../Constants/Constants.ts';

type props = {
    assignedEmployeeNameList: Array<string>
}


const AvatarIcon: React.FC<props> = ({ assignedEmployeeNameList }) => {

    let counter = -1;

    const result = assignedEmployeeNameList?.map((employeeName: string) => {
        const name = employeeName;
        // Split the name by spaces
        const nameParts = name.split(' ');

        // Get the first letter of the first name and last name
        const firstInitial = nameParts[0]?.charAt(0).toUpperCase() || '';
        const lastInitial = nameParts.length > 1 ? nameParts[nameParts.length - 1].charAt(0).toUpperCase() : '';

        counter++;

        if(counter >= assignedEmployeeNameList.length){
            counter = 0;
        }

        return (
            <Tooltip title={employeeName} placement="top">
                <Avatar style={{ backgroundColor: AvatarIconColorCode[counter] }}>
                    {firstInitial + lastInitial}
                </Avatar>
            </Tooltip>
        )
    })
    return (
        <>
            <Avatar.Group
                max={{
                    count: 2,
                    style: { color: '#f56a00', backgroundColor: '#fde3cf' },
                }}

            >
                {result}
            </Avatar.Group>
        </>
    )

};

export default AvatarIcon;