export const notificationMessageHandler = (data : Array<any>) : Array<any> => {
    const notification = data?.map((itemName : string , index : number)=>{
        return {
            id: index,
            message : `current inventory level of ${itemName} is less than reorder point`,
            time: "Now", 
            isNew: true
        } 
    })

    return notification;
}