import React, { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full p-2 border-b-2 rounded-md border-stone-300 bg-stone-100 text-stone-700 focus:outline-none focus:border-stone-600 resize-none transition-all";

  return (
    <div className="flex flex-col gap-1 my-4 w-full">
      <label className="text-sm font-semibold text-stone-600 uppercase">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </div>
  );
});

export default Input;
