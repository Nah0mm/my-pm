export default function Button({ children, ...props }) {
  return (
    <button className="p-3 bg-zinc-800 rounded-lg hover:bg-zinc-200 hover:text-zinc-950" {...props}>
      {children}
    </button>
  );
}
