import React, { useEffect } from "react";

const MyModal = ({ children, isOpen = false, onClose, className }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (isOpen) {
    return (
      <div className={className}>
        <div
          onClick={onClose}
          className="fixed bg-black opacity-30 top-0 bottom-0 left-0 right-0"
        ></div>
        {children}
      </div>
    );
  }
  return <></>;
};

export default MyModal;
