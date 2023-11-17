"use client";

import { ReactNode, useEffect, useState } from "react";
import ReactDom from "react-dom";
import CloseIcon from "../icons/CloseIcon";

interface ModalProps {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, children, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!open) return null;

  const modalStyle =
    "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50";
  const overlayStyle =
    "fixed flex top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-50";
  const closeButtonStyle =
    "absolute top-2 right-2 text-white hover:text-red-800";

  return mounted
    ? ReactDom.createPortal(
        <>
          <div className={overlayStyle} />
          <div className={modalStyle}>
            <button className={closeButtonStyle} onClick={onClose}>
              <CloseIcon />
            </button>
            {children}
          </div>
        </>,
        document.getElementById("portal")!
      )
    : null;
};

export default Modal;
