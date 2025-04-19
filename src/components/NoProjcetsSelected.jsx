import React from "react";
import image from "../assets/no-projects.png";
import Button from "./Button";

function NoProjcetsSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-full max-w-md mx-auto px-4">
      <img
        src={image}
        className="w-20 h-20 object-contain mx-auto"
        alt="An empty task list"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}

export default NoProjcetsSelected;
