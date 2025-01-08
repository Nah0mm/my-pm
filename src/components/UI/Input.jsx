import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { labelName, isTextArea = false, ...props },
  ref
) {
  const classes =
    "bg-zinc-200 text-zinc-950 p-3 focus:outline-none focus:bg-zinc-200 focus:text-zinc-900 focus:outline-zinc-700";
  return !isTextArea ? (
    <div className="p-2 m-2 flex flex-col w-full uppercase">
      <label>
        <p className="font-bold">{labelName}</p>
      </label>
      <input className={classes} ref={ref} {...props} />
    </div>
  ) : (
    <div className="p-2 m-2 flex flex-col w-full uppercase">
      <label>
        <p className="font-bold">{labelName}</p>
      </label>
      <textarea className={classes} ref={ref} {...props} />
    </div>
  );
});

export default Input;
