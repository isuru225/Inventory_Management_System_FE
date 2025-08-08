import React, { useState, useRef, useEffect } from "react";
import CIcon from "@coreui/icons-react";
import { cilBell } from "@coreui/icons";
import { connect, ConnectedProps } from "react-redux";
import { NotificationActions } from "../../../actions/Notification/index.ts";
import { notificationMessageHandler } from "./Functions/Functions.ts";

interface Notification {
  id: number;
  message: string;
  time: string;
  isNew: boolean;
  itemType: string
}

interface NotificationObject {
  itemType: string,
  itemList: Array<string>
}

type props = propsFromRedux;

// const initialNotifications: Notification[] = [
//   { id: 1, message: "New inspection assigned: QW0001 - Pepsi Asia", time: "Now", isNew: true, itemType: 'raw_drug'},
//   { id: 2, message: "New inspection assigned: AR5567 - Pepsi Europe", time: "1h ago", isNew: true, itemType: 'raw_drug' },
//   { id: 3, message: "Inspection import has been successfully created", time: "4h ago", isNew: true, itemType: 'raw_drug' },
//   { id: 4, message: "Terms of use was updated tempus", time: "05 May 2019", isNew: false, itemType: 'raw_drug' }
// ];

const BellNotification: React.FC<props> = (props) => {

  const { getNotifications, data } = props ?? {};

  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]); // Moved to state
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [notification, setNotification] = useState<Array<NotificationObject>>([]);
  const [isNotificationCountVisible, setIsNotificationCountVisible] = useState<boolean>(true);

  const markAllAsRead = () => {
    localStorage.setItem('markallnotifyasread',JSON.stringify(false));
    setIsNotificationCountVisible(false)
    // setNotifications((prevNotifications) =>
    //   prevNotifications.map((notification) => ({ ...notification, isNew: false }))
    // );
  };

  useEffect(() => {
    console.log("fast", data);
    //setNotifications(notificationMessageHandler(data))
    setNotification(data)
  }, [data])

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

  return (
    <div className="notification-dropdown" ref={dropdownRef}>
      <div className="bell-icon" onClick={() => setIsOpen(!isOpen)}>
        <CIcon icon={cilBell} size="lg" />
        {notification?.some(group => group.itemList?.length > 0) &&
          JSON.parse(localStorage.getItem('markallnotifyasread') || 'false') && <span className="notification-badge">
            {notification?.reduce((total, group) => {
              const count = Array.isArray(group.itemList) ? group.itemList.length : 0;
              return total + count;
            }, 0)}
          </span>
        }
      </div>

      {isOpen && (
        <div className="bell-dropdown-menu">
          <div className="bell-dropdown-header">
            <span className="header-title">Notifications</span>
            <div className="dnd-switch">
              <label>Do Not Disturb</label>
              <input type="checkbox" />
            </div>
          </div>

          <div className="notifications-container">
            {notification?.map((group, groupIndex) => (
              <div key={groupIndex} className="notification-group">
                <h6 className="group-title">{group.itemType}</h6>
                <ul className="notifications-list">
                  {group.itemList?.map((itemName, index) => (
                    <li key={index} className="notification-card">
                      <span className="message">{`current inventory level of ${itemName} is less than reorder point`}</span>
                      <span className="time">Just now</span>
                    </li>
                  ))}
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
  const { data, isLoading } = NotificationReducer;
  return {
    data,
    isLoading
  }
}



const mapDispatchToProps = {
  getNotifications: NotificationActions.notifications.get
}



const connector = connect(mapStateToProps, mapDispatchToProps);
type propsFromRedux = ConnectedProps<typeof connector>
export default connector(BellNotification);

