function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return date.toLocaleDateString("es", { day: "numeric", month: "short", year: "numeric" });
}

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <button
        type="button"
        className="check"
        aria-label={task.done ? "Marcar como pendiente" : "Marcar como completada"}
        onClick={() => onToggle(task.id)}
      >
        {task.done ? "●" : "○"}
      </button>
      <span className={task.done ? "title done" : "title"}>{task.title}</span>
      <time className="created" dateTime={task.createdAt}>
        {formatDate(task.createdAt)}
      </time>
      <button
        type="button"
        className="delete"
        aria-label="Eliminar tarea"
        onClick={() => onDelete(task.id)}
      >
        ✕
      </button>
    </li>
  );
}
