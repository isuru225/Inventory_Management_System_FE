import { notificationDateRange } from "../Constants/Constants.ts";

export const notificationMessageOrderHandler = (data: Array<any>): Array<any> => {
    const notifications = data;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const sevenDaysBack = new Date(today);
    sevenDaysBack.setDate(today.getDate() - notificationDateRange.NO_OF_DAYS);
    sevenDaysBack.setHours(0, 0, 0, 0);

    const notificationWithin7daysFromToday = notifications.filter((notification: any) => {
        const notificationDate = new Date(notification?.createdAt);
        notificationDate.setHours(0, 0, 0, 0);
        if (notificationDate >= sevenDaysBack && notificationDate <= today) {
            return notification;
        }
    })

    notificationWithin7daysFromToday.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return notificationWithin7daysFromToday;
}

export const notificationMarkedUnmarkedStateHandler = (itemId: string): string => {
    const alreadyMarkedNotificationsIds = JSON.parse(localStorage.getItem("markedNotifications") || "[]");
    if (alreadyMarkedNotificationsIds?.includes(itemId)) {
        return "read";
    }

    return "unread";
}