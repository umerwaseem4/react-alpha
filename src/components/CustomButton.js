import React, { useState } from "react";

import Modal from "../components/Modal";

const CustomButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(`name: ${name}`);
    console.log(`email: ${email}`);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button
        onClick={openModal}
        className="w-44 h-16 flex-shrink-0 rounded-full bg-white shadow-2xl"
      >
        <span className="font-bold">{"Let's Talk"}</span>
      </button>

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>Enter your email and name to hear from us.</p>

        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Enter your Name"
            className="border border-gray-300 p-2 mb-4 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your Email"
            className="border border-gray-300 p-2 mb-4 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="w-44 h-16 self-center rounded-full bg-white shadow-2xl"
          >
            <span className="font-bold">Contact Us</span>
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default CustomButton;
