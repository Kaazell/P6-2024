import { useState } from "react";
import { ChevronUp } from "react-bootstrap-icons";
import s from "./style.module.css";
export function AboutItem() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={s.container}>
      <button className={s.button_title} onClick={toggleDropdown}>
        AboutItem
        <ChevronUp
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </button>
      <div className={`${s.list} ${isOpen ? s.open : ""}`}>hello</div>
    </div>
  );
}
