import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button onClick={onClick} className="px-2 py-1 border rounded hover:bg-gray-200">
    {children}
  </button>
);
