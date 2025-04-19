import React from "react";
import Tasks from "./Tasks";

function SelectedProject({
  project,
  onDleted,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedData = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-full max-w-[35rem] mt-16 px-4 mx-auto">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-600">
            {project.title}
          </h1>
        </div>
        <p className="mt-2 text-stone-400">{formattedData}</p>
        <p className="mt-2 text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
      <button
        className="px-6 py-2 bg-stone-800 rounded-md hover:bg-stone-950 text-stone-50"
        onClick={onDleted}
      >
        Delete
      </button>
    </div>
  );
}

export default SelectedProject;
