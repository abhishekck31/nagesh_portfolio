import { X } from "lucide-react";
import { useEffect, useState } from "react";

const Notification = ({ onClose, onClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Slide down animation
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    const handleClick = () => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
            onClick();
        }, 300);
    };

    return (
        <div
            className={`mac-notification ${isVisible ? "mac-notification-visible" : ""}`}
            onClick={handleClick}
        >
            <span className="notification-time">now</span>
            <button
                className="notification-close"
                onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                }}
            >
                <X className="w-4 h-4" />
            </button>
            <div className="notification-text">
                <p className="notification-title">Welcome! Thanks for visiting!</p>
            </div>
        </div>
    );
};

export default Notification;
