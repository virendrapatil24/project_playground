const Toast = ({ message, type }) => {
  return (
    <div className={`toast__message ${type}`}>
      <span>icon</span>
      <span>{message}</span>
      <span style={{ cursor: "pointer" }}>x</span>
    </div>
  );
};

export default Toast;
