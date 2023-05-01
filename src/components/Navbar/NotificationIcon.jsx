import IconWithCount from "./IconWithCount";
import { RiNotificationLine } from "react-icons/ri";

const NotificationIcon = () => {
  return (
    <IconWithCount count={2}>
      <RiNotificationLine />
    </IconWithCount>
  );
};

export default NotificationIcon;
