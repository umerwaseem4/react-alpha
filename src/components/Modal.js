import React from "react";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-white p-6 rounded-md shadow-md">
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 p-4 text-gray-600 hover:text-gray-800"
        >
          &#215;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
