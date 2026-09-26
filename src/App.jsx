import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import TaskCounter from "./components/TaskCounter";
import { useTasks } from "./hooks/useTasks";

export default function App() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();

  return (
    <>
      <header>
        <h1>Mis Tareas</h1>
        <p className="subtitle">Lo que tengo que sacar esta semana</p>
      </header>

      <main>
        <NewTaskForm onAdd={addTask} />

        {/* controles de la lista */}

        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        <TaskCounter tasks={tasks} />
      </main>

      <footer>
        <p id="credits">Hecho por Anita</p>
      </footer>
    </>
  );
}
