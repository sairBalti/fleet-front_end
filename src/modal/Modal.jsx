import React, { useState } from 'react';

function Modal ({ isOpen, onClose, children })  {
  const closeModal = () => {
    onClose();
  };

  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal">
        <span className="modal-close" onClick={closeModal}>&times;</span>
        {children}
      </div>
    </div>
  ) : null;
};
export default Modal;
