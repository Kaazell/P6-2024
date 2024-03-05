import s from "./style.module.css";
import { GalleryItem } from "../GalleryItem/GalleryItem";

export function Gallery() {
  return (
    <div className={s.gallery}>
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
    </div>
  );
}
