import s from "./style.module.css";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import { useNavigate } from "react-router-dom";
import json from "../../assets/json/logements.json";

export function Gallery() {
  const navigate = useNavigate();
  return (
    <div className={s.gallery}>
      {json.map((item) => (
        <GalleryItem
          key={item.id}
          title={item.title}
          picture={item.pictures[0]}
        />
      ))}
    </div>
  );
}
