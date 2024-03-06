import { useNavigate } from "react-router-dom";
import s from "./style.module.css";

export function GalleryItem({ key, title, picture }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/description")} className={s.galleryItem}>
      <img src={picture} alt="" />
      <span key={key}>{title}</span>
    </div>
  );
}
