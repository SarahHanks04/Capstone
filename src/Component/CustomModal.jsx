import React from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";

const CustomModal = ({ isOpen, onRequestClose, title, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-900"
      overlayClassName="fixed inset-0 z-40 bg-black bg-opacity-30"
    >
      <div className="relative bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-auto">
        <motion.button
          onClick={onRequestClose}
          className="absolute top-4 right-4 px-4 py-2 bg-[#13162d] text-white rounded-full focus:outline-none"
          whileTap={{ rotate: 360 }}
        >
          X
        </motion.button>

        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <div className="text-gray-600 mt-4">{children}</div>
      </div>
    </Modal>
  );
};

export default CustomModal;
