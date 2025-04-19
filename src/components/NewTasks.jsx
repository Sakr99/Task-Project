import React, { useState } from "react";

function NewTasks({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  const handleChenge = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl mx-auto px-4">
      <input
        type="text"
        className="w-full sm:w-auto flex-1 px-3 py-2 rounded-md bg-stone-200 text-stone-700"
        onChange={handleChenge}
        value={enteredTask}
        placeholder="Enter a task"
      />
      <button
        onClick={handleClick}
        className="w-full sm:w-auto px-6 py-2 bg-stone-400 rounded-md text-stone-800 hover:bg-stone-500 transition-colors"
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTasks;
