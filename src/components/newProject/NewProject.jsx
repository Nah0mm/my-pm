import Input from "../UI/Input";
import { useRef } from "react";

import Modal from '../modal/Modal'

export default function NewProject({ handleCancel, getAddedProject }) {
  const modal=useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleAdd = () => {
    const enteredTitle = title.current.value;
    const enteredDesc = description.current.value;
    const enteredDate = dueDate.current.value;

    if (
      enteredDate.trim() === '' ||
      enteredTitle.trim() === '' ||
      enteredDesc.trim() === ''
    ) {
      modal.current.open()
    } else {
      const addedProject = {
        id: Math.random(),
        title: enteredTitle,
        description: enteredDesc,
        dueDate: enteredDate,
      };
      getAddedProject(addedProject);
    }
  };
  return (
    <>
    <Modal ref={modal}>
      <h2 className="font-bold text-zinc-700">Invalid input</h2>
      <p className="my-3 text-zinc-700">Ooops....you forgot to enter a value</p>
      </Modal>
    <div className="w-[35rem] h-full">
      <menu className="flex items-center gap-2 justify-end">
        <li className="px-2">
          <button
            className="p-2 rounded-lg text-zinc-700 w-[5rem] font-bold hover:bg-red-900 hover:text-zinc-200"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </li>
        <li className="px-2">
          <button
            className="p-2 bg-zinc-700 text-zinc-200 w-[5rem] rounded-lg font-bold hover:bg-zinc-950"
            onClick={handleAdd}
          >
            Save
          </button>
        </li>
      </menu>
      <div className="flex flex-col items-center">
        <Input labelName="Title" ref={title} type="text" />
        <Input
          labelName="Description"
          isTextArea={true}
          ref={description}
          type="text"
        />
        <Input labelName="Due Date" ref={dueDate} type="date" />
      </div>
    </div>
    </>
  );
}
