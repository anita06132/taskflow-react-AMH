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
