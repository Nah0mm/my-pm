import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";


const Modal = forwardRef(function Modal({ children }, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialogRef} className="backdrop:bg-zinc-800/90 bg-zinc-200 rounded-md shadow-md p-4">{children}
    <form method="dialog" className="text-right">
        <button className="p-2 bg-zinc-800 text-zinc-200 rounded-md hover:bg-zinc-950">Close</button>
    </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});


export default Modal