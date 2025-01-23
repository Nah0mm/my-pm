import DeleteIcon from "@mui/icons-material/Delete";
export default function Task({ taskItem, handleDelete }) {
  return (
    <div className="flex w-[33rem] justify-between py-3">
      <p>{taskItem.task}</p>
      <button onClick={() => handleDelete(taskItem.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}
