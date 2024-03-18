import { useNavigate } from "react-router-dom";
import s from "./style.module.css";

export function GalleryItem({ title, picture, currentData }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/description", { state: { title, picture, currentData } });
  };
  return (
    <div className={s.galleryItem} onClick={handleClick}>
      <img src={picture[0]} alt={title} />
      <span>{title}</span>
    </div>
  );
}
