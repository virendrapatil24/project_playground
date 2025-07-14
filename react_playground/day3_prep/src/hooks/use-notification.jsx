import { useState } from "react";
import Toast from "../components/Toast";

const useNotification = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = (toastProps) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [
      ...prev,
      { id, message: toastProps.message, type: toastProps.type },
    ]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  const ToastContainer = () => (
    <div className="toast__container">
      {toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} type={toast.type} />
      ))}
    </div>
  );

  return { ToastContainer, showToast };
};

export default useNotification;
