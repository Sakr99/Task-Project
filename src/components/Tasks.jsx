import React from "react";
import NewTasks from "./NewTasks.jsx";

function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="w-full max-w-md mx-auto px-4">
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTasks onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100 space-y-4">
          {tasks.map((task) => (
            <li
              className="flex flex-wrap justify-between items-center gap-2"
              key={task.id}
            >
              <span className="text-stone-800 break-words">{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
