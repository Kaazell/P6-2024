import { useState } from "react";
import s from "./style.module.css";
export function DropdownButton({ buttonText }) {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { id: 1, label: "Climatisation" },
    { id: 2, label: "Wi-Fi" },
    { id: 3, label: "Cuisines" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={s.container}>
      <button className={s.button_title} onClick={toggleDropdown}>
        {buttonText}
      </button>
      {isOpen && (
        <div className={s.list}>
          {options.map((option) => (
            <p key={option.id}>{option.label}</p>
          ))}
        </div>
      )}
    </div>
  );
}
