export default function Project({
  project,
  handleBack,
  handleEdit,
  handleDelete,
}) {
  const classes =
    "px-4 py-2 bg-zinc-700 text-zinc-200 font-bold rounded-sm hover:bg-zinc-950 ";
  return (
    <div className="w-[35rem] h-full">
      <menu className="flex gap-8 items">
        <div>
          <button className={classes} onClick={handleBack}>
            Back
          </button>
        </div>
        <div className="flex items-end gap-4 mx-20">
          <li>
            <button className={classes} onClick={handleEdit}>
              Edit
            </button>
          </li>
          <li>
            <button
              className="px-4 py-2 text-zinc- font-bold rounded-sm hover:bg-red-950 hover:text-zinc-200"
              onClick={() => handleDelete(project.id)}
            >
              Delete
            </button>
          </li>
        </div>
      </menu>
      <div className="text-zinc-950 flex flex-col mt-8 ">
        <div className="flex py-4 font-bold">
            <h2 className="uppercase">Title:</h2>
            <h2 className="px-3">{project.title}</h2>
        </div>
        <div className="flex py-4 font-bold">
            <h2 className="uppercase">Description:</h2>
            <h2 className="px-3">{project.description}</h2>
        </div>
        <div className="flex py-4 font-bold">
            <h2 className="uppercase">Due Date:</h2>
            <h2 className="px-3">{project.dueDate}</h2>
        </div>
      </div>
    </div>
  );
}
