import React, { useState, useRef, useEffect } from "react";
import CIcon from "@coreui/icons-react";
import { cilBell } from "@coreui/icons";
import { connect, ConnectedProps } from "react-redux";
import { NotificationActions } from "../../../actions/Notification/index.ts";
import { notificationMessageHandler } from "./Functions/Functions.ts";
import { itemType, itemTypeName, notificationType } from "./Constants/Constants.ts";



interface Notification {

  id: string,
  itemType: number,
  notificationType: number,
  createdAt: Date,
  itemName: string,
  isRead: boolean

}
 
type props = propsFromRedux;

const BellNotification: React.FC<props> = (props) => {

  const { getNotifications, data, markMessages, markAllMessage } = props ?? {};

  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]); // Moved to state
  const dropdownRef = useRef<HTMLDivElement>(null);
  //const [notification, setNotification] = useState<Array<NotificationObject>>([]);
  const [isNotificationCountVisible, setIsNotificationCountVisible] = useState<boolean>(true);

  const markAllAsRead = () => {
    //localStorage.setItem('markallnotifyasread', JSON.stringify(false));
    markAllMessage({});
    setIsNotificationCountVisible(false);
    
  };

  useEffect(() => {
    console.log("fast", data);
    //setNotifications(notificationMessageHandler(data))
    setNotifications(data);
  }, [data])

  useEffect(()=>{
    console.log("Lion",markMessages)
    if(markMessages?.data){
      setNotifications(markMessages?.data)
    }
  },[markMessages?.data])

  // Close dropdown if clicked outside
  useEffect(() => {
    localStorage.setItem('markallnotifyasread', JSON.stringify(false));

    //get all the notifications
    getNotifications({});

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  const itemTypeHandler = (itemTypeIndex: number) => {
    switch (itemTypeIndex) {
      case itemType.RAW_DRUG:
        return itemTypeName.RAW_DRUG
      case itemType.FINISHED_DRUG:
        return itemTypeName.FINISHED_DRUG
      default:
        return itemTypeName.NONE;
    }
  }

  const notificationCountHandler = (): number => {
    let count = 0;
    notifications?.forEach(notification => {
      if (!notification?.isRead) {
        count++;
      }
    });

    return count;
  }

  const notificationTimeHandler = (createdAt: Date): string => {
    const currentDateTime: Date = new Date();
    const createdDateTime: Date = new Date(createdAt)
    const diffMs = currentDateTime.getTime() - createdDateTime.getTime();

    // convert to seconds, minutes, hours, days
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    // remainder calculations
    const hours = diffHours % 24;
    const minutes = diffMinutes % 60;
    const seconds = diffSeconds % 60;

    if (diffDays <= 0 && hours <= 0 && minutes <= 0) {
      return "Just Now"
    } else if (diffDays <= 0 && hours <= 0) {
      return `${minutes} min Ago`
    } else if (diffDays <= 0) {
      return `${hours} hours Ago`
    } else {
      return `${diffDays} days Ago`
    }

  }

  return (
    <div className="notification-dropdown" ref={dropdownRef}>
      <div className="bell-icon" onClick={() => setIsOpen(!isOpen)}>
        <CIcon icon={cilBell} size="lg" />
        {notificationCountHandler() > 0 && <span className="notification-badge">
          {notificationCountHandler()}
        </span>}
        {/* {notifications?.some(group => group.itemList?.length > 0) &&
          JSON.parse(localStorage.getItem('markallnotifyasread') || 'false') && <span className="notification-badge">
            {notifications?.reduce((total, group) => {
              const count = Array.isArray(group.itemList) ? group.itemList.length : 0;
              return total + count;
            }, 0)}
          </span>
        } */}
      </div>

      {isOpen && (
        <div className="bell-dropdown-menu">
          <div className="bell-dropdown-header">
            <span className="header-title">Notifications</span>
            {/* <div className="dnd-switch">
              <label>Do Not Disturb</label>
              <input type="checkbox" />
            </div> */}
          </div>


          <div className="notifications-container">
            {notifications?.map((item, itemIndex) => (
              <div key={itemIndex} className="notification-group">
                <h6 className="group-title">{itemTypeHandler(item.itemType)}</h6>
                <ul className="notifications-list">
                  <li
                    key={0}
                    className={`notification-card ${item.isRead ? "read" : "unread"}`}
                  >
                    <span className="message">
                      {item?.notificationType == notificationType.REOREDER
                        ? `${item.itemName} is less than reorder point.`
                        : `${item.itemName} is going to be expired in 7 days.`}
                    </span>

                    {/* Vertical Separator */}
                    <span className="separator" />

                    {/* Time */}
                    <span className="time">
                      {notificationTimeHandler(item.createdAt)}
                    </span>

                    {/* Read/Unread Status */}
                    <span className="status">
                      {item.isRead ? "Read" : "Unread"}
                    </span>
                  </li>
                </ul>

              </div>
            ))}
          </div>

          <button className="mark-read-btn" onClick={markAllAsRead}>
            Mark all as read
          </button>
        </div>
      )}
    </div>
  );

};

const mapStateToProps = (state: any) => {
  const { NotificationReducer } = state;
  const { data, isLoading, markMessages } = NotificationReducer;
  return {
    data,
    isLoading,
    markMessages
  }
}



const mapDispatchToProps = {
  getNotifications: NotificationActions.notifications.get,
  markAllMessage: NotificationActions.messages.mark
}



const connector = connect(mapStateToProps, mapDispatchToProps);
type propsFromRedux = ConnectedProps<typeof connector>
export default connector(BellNotification);

