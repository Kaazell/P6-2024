import { useNavigate } from "react-router-dom";
import s from "./style.module.css";

export function GalleryItem() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/description")} className={s.galleryItem}>
      <span>Titre de la location</span>
    </div>
  );
}
