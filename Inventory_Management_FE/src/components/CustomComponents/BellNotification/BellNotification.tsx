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
}

type props = propsFromRedux;

const initialNotifications: Notification[] = [
  { id: 1, message: "New inspection assigned: QW0001 - Pepsi Asia", time: "Now", isNew: true },
  { id: 2, message: "New inspection assigned: AR5567 - Pepsi Europe", time: "1h ago", isNew: true },
  { id: 3, message: "Inspection import has been successfully created", time: "4h ago", isNew: true },
  { id: 4, message: "Terms of use was updated tempus", time: "05 May 2019", isNew: false },
];

const BellNotification: React.FC<props> = (props) => {

  const { getNotifications, data } = props ?? {};

  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications); // Moved to state
  const dropdownRef = useRef<HTMLDivElement>(null);

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({ ...notification, isNew: false }))
    );
  };

  useEffect(()=>{
    console.log("fast",data);
    setNotifications(notificationMessageHandler(data))
  },[])

  // Close dropdown if clicked outside
  useEffect(() => {

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
        {notifications.filter((n) => n.isNew).length > 0 && (
          <span className="notification-badge">
            {notifications.filter((n) => n.isNew).length}
          </span>
        )}
      </div>

      {isOpen && (
        <div className="bell-dropdown-menu">
          <div className="bell-dropdown-header">
            <span>Notifications</span>
            <div className="dnd-switch">
              <label>Do not disturb</label>
              <input type="checkbox" />
            </div>
          </div>

          <ul className="notifications-list">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`notification-item ${notification.isNew ? "new" : ""}`}
              >
                <span>{notification.message}</span>
                <span className="time">{notification.time}</span>
              </li>
            ))}
          </ul>

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
    getNotifications : NotificationActions.notifications.get
}



const connector = connect(mapStateToProps, mapDispatchToProps);
type propsFromRedux = ConnectedProps<typeof connector>
export default connector(BellNotification);

