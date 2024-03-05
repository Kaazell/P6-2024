import { useState } from "react";
import s from "./style.module.css";
export function DropdownButton({ buttonText }) {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={s.container}>
      <button className={s.button_title} onClick={toggleDropdown}>
        {buttonText}
      </button>
      {isOpen && (
        <ul>
          {options.map((option) => (
            <li key={option.id}>{option.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
