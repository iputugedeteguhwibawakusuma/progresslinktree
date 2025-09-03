import { useEffect, useState } from "react";

interface ToastNotificationProps {
  message: string;
  isVisible: boolean;
  onHide: () => void;
  type?: "success" | "error";
}

export function ToastNotification({ 
  message, 
  isVisible, 
  onHide, 
  type = "success" 
}: ToastNotificationProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  if (!isVisible) return null;

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div 
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 ${bgColor} text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 z-50`}
      data-testid="toast-notification"
    >
      <i className={`fas ${type === "success" ? "fa-check" : "fa-times"} mr-2`}></i>
      <span>{message}</span>
    </div>
  );
}
