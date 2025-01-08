import tasklist from "../../assets/tasklist.png";
export default function NoProject({setAddProject}) {
  return (
    <div className="w-[35rem] h-full text-center p-7">
      <img src={tasklist} className="object-contain w-32 h-32 mx-auto" />
      <div className="items-center">
        <h2 className="font-bold">No Projects Selected</h2>
        <p>Select or add a new project to start</p>
        <p className="my-3 text-zinc-200">
          <button className="bg-zinc-700 text-zinc-200 p-3 font-bold rounded-lg hover:bg-zinc-950" onClick={setAddProject}>Create a project</button>
        </p>
      </div>
    </div>
  );
}
