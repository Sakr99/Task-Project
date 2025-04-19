import Input from "./Input";
import React, { useRef } from "react";
import Modal from "./Modal";

function NewProject({ onAdd, onCansel }) {
  const title = useRef();
  const description = useRef();
  const dueData = useRef();
  const modal = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueData = dueData.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueData === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueData: enteredDueData,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-full max-w-xl mx-auto px-4 mt-16">
        <Input type="text" ref={title} label="Title" />
        <Input type="text" ref={description} label="Description" textarea />
        <Input type="date" ref={dueData} label="Due Date" />
        <menu className="flex flex-col sm:flex-row items-center justify-end gap-4 my-4">
          <li className="w-full sm:w-auto">
            <button
              className="w-full sm:w-auto px-6 py-2 bg-stone-200 rounded-md text-stone-800 hover:bg-red-700 hover:text-stone-50"
              onClick={onCansel}
            >
              Cancel
            </button>
          </li>
          <li className="w-full sm:w-auto">
            <button
              className="w-full sm:w-auto px-6 py-2 bg-stone-800 rounded-md hover:bg-green-700 text-stone-50"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
      </div>
    </>
  );
}


export default NewProject;
