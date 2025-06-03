import { addToast, ToastProps } from "@heroui/toast";

type CustomToastProps = {
  title?: string;
  description: string;
  color?: ToastProps["color"];
  duration?: number;
  placement?: "top-right";
};

export const heroToast = ({
  title = "Notification",
  description,
  color = "primary",
  duration = 3000,
  placement = "top-right",
}: CustomToastProps) => {
  addToast({
    title,
    description,
    color,
    timeout: duration,
  });
};
