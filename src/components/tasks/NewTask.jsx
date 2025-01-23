import { useRef } from "react";
import Modal from "../modal/Modal";


export default function NewTask({ getTask }) {
  
    const taskRef=useRef()
    const modalRef=useRef
  const handleClick=()=>{
    const task=taskRef.current.value;
    if(task.trim()===''){
      
      return;
    }
    getTask({task:task,id:Math.random()})
  }

  

  return (
    <>
    <div className="flex gap-3 mb-4">
      <input
        type="text"
        ref={taskRef}
        className="p-2 border-2 border-zinc-800 rounded-sm"
      />
      <button
        className="bg-zinc-800 text-zinc-200 p-2 hover:bg-zinc-900 rounded-sm"
        onClick={handleClick}
      >
        Save
      </button>
    </div>
    </>
  );
}
