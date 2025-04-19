import React from "react";

function Button({
  children,
  size = "md",
  color = "stone",
  disabled = false,
  ...props
}) {
  const sizeClasses = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const colorClasses = {
    stone:
      "bg-stone-700 text-stone-300 hover:bg-stone-600 hover:text-stone-100",
    blue: "bg-blue-700 text-white hover:bg-blue-600",
    red: "bg-red-700 text-white hover:bg-red-600",
    green: "bg-green-700 text-white hover:bg-green-600",
  };

  const selectedSize = sizeClasses[size];
  const selectedColor = colorClasses[color];

  return (
    <button
      className={`${selectedSize} ${selectedColor} rounded-md ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
