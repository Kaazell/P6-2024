import { useState } from "react";
import { ChevronUp } from "react-bootstrap-icons";
import s from "./style.module.css";
export function DropdownButton({ buttonText }) {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { id: 1, label: "Climatisation" },
    { id: 2, label: "Wi-Fi" },
    { id: 3, label: "Cuisines" },
    { id: 3, label: "Cuisines" },
    { id: 3, label: "Cuisines" },
    { id: 3, label: "Cuisines" },
    { id: 3, label: "Cuisines" },
    { id: 3, label: "Cuisines" },
    { id: 3, label: "Cuisines" },
    { id: 3, label: "Cuisines" },
    { id: 3, label: "Cuisines" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={s.container}>
      <button className={s.button_title} onClick={toggleDropdown}>
        {buttonText}
        <ChevronUp
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </button>
      <div className={`${s.list} ${isOpen ? s.open : ""}`}>
        {options.map((option) => (
          <p key={option.id}>{option.label}</p>
        ))}
      </div>
    </div>
  );
}
