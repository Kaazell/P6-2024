import s from "./style.module.css";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import { useNavigate } from "react-router-dom";

export function Gallery() {
  const navigate = useNavigate();
  return (
    <div className={s.gallery}>
      <GalleryItem onClick={navigate} />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
    </div>
  );
}
