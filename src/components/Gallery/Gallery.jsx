import s from "./style.module.css";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import json from "../../assets/json/logements.json";
import { useNavigate } from "react-router-dom";
export function Gallery() {
  const navigate = useNavigate();
  console.log(json);
  return (
    <div className={s.gallery}>
      {json.map((item) => (
        <div
          className={s.galleryItem_container}
          key={item.id}
          onClick={() => navigate("/description/" + item.id)}
        >
          <GalleryItem
            key={item.id}
            title={item.title}
            picture={item.pictures}
            currentData={item}
          />
        </div>
      ))}
    </div>
  );
}
