import Button from "../UI/Button";

export default function Sidebar({ setAddProject, projects,getDetails }) {
  return (
    <div className="w-1/3 h-full p-7 text-zinc-200 text-xl bg-zinc-950">
      <h2 className="font-bold">My Projects</h2>
      <p className="my-4">
        <Button onClick={setAddProject}>+ Add Projects</Button>
      </p>
      <ul className="mt-7">
        {projects.map((project) => (
          <li key={project.id}>
            <button
              className="rounded-lg mt-2 p-3 bg-zinc-950 flex justify-start text-zinc-200 w-full hover:bg-zinc-700"
              onClick={()=>getDetails(project.id)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
