import {
  FiCheckCircle,
  FiHeart,
  FiInfo,
} from "react-icons/fi";

function Toast({ message, show, type = "success" }) {
  const getIcon = () => {
    if (type === "favorite") {
      return <FiHeart />;
    }

    if (type === "info") {
      return <FiInfo />;
    }

    return <FiCheckCircle />;
  };

  return (
    <div
      className={`toast ${show ? "toast-show" : ""}`}
      role="status"
      aria-live="polite"
    >
      {getIcon()}
      <span>{message}</span>
    </div>
  );
}

export default Toast;