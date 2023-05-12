import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactPortal from "./Portal";
import './Modal.css'
export const Modal = () => {
  const dispatch = useDispatch();
  const modalMessage = useSelector((state) => state.modalMessage);
  const modalOpen = useSelector((state) => state.modalOpen);

  const handleCloseModal = () => {
    dispatch({ type: "CERRAR_MODAL" });
  };

  useEffect(() => {
    if (modalOpen) {
      // const timer = setTimeout(() => {
      //   handleCloseModal();
      // }, 5000);
      // return () => clearTimeout(timer);
    }
  }, [modalOpen]);

  return (
    <ReactPortal wrapperId="modal-root">
      {modalOpen && (
        <div
          className="fixed inset-0 bg-opacity-75 flex items-end justify-center mb-12"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white px-8 py-4 rounded relative"
            onClick={(e) => e.stopPropagation()}
          >
              <button
                className="absolute top-0 right-2"
                onClick={handleCloseModal}
              >
                x
              </button>
            
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
    </ReactPortal>
  );
};
