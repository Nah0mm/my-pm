import Tasks from "../tasks/Tasks";

export default function Project({ project, handleBack, handleDelete }) {
  const classes =
    "px-4 py-2 bg-zinc-700 text-zinc-200 font-bold rounded-sm hover:bg-zinc-950 ";
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] h-full">
      <menu className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <p className="text-zinc-500">{formattedDate}</p>
        </div>
        <button
          className="h-11 px-3 text-zinc- font-bold rounded-md text-zinc-200 bg-zinc-800 hover:bg-zinc-950 "
          onClick={() => handleDelete(project.id)}
        >
          Delete
        </button>
      </menu>
      <div className="text-zinc-950 flex flex-col mt-4 ">
        <div className="flex py-4">
          <p className="whitespace-pre-wrap">{project.description}</p>
        </div>
        <div className="flex py-4">
          <Tasks />
        </div>
      </div>
    </div>
  );
}
