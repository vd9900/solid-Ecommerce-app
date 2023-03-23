import React from "react";

const MyModal = ({ children, isOpen = false, onClose }) => {
  if (isOpen) {
    return (
      <>
        <div
          onClick={onClose}
          className="fixed bg-black opacity-30 top-0 bottom-0 left-0 right-0"
        ></div>
        {children}
      </>
    );
  }
  return <></>;
};

export default MyModal;
