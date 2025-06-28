import { IoMdCloseCircleOutline } from "react-icons/io";

import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
export const ModalContext = createContext();
function Modal({ children }) {
  const [open, setOpen] = useState("");

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export function OpenModal({ children, name }) {
  const { setOpen } = useContext(ModalContext);
  return (
    <div>{cloneElement(children, { onClick: () => setOpen(() => name) })}</div>
  );
}
export function Window({ children, name }) {
  const { open, setOpen } = useContext(ModalContext);
  return (
    <>
      {open === name ? (
        <>
          <div
            onClick={() => setOpen("")}
            className="inset-0 fixed  bg-black/20  backdrop-blur-sm z-40"
          ></div>
          <div
            style={{ transform: "translate(-50%, -50%)" }}
            className="flex items-center justify-center top-[50%] left-[50%]  fixed border-2 border-gray-400 shadow bg-white shadow-gray-400 mt-1 z-50 "
          >
            {children}
          </div>
        </>
      ) : null}
    </>
  );
}
export function CloseBtnModal() {
  const { setOpen } = useContext(ModalContext);
  return (
    <div className="fixed top-1 right-1" onClick={() => setOpen("")}>
      <IoMdCloseCircleOutline className="text-2xl" />
    </div>
  );
}
Modal.open = OpenModal;
Modal.Window = Window;
Modal.close = CloseBtnModal;
export default Modal;
