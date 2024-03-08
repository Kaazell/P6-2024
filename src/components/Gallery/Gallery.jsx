import s from "./style.module.css";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import json from "../../assets/json/logements.json";
import { useNavigate } from "react-router-dom";
export function Gallery() {
  const navigate = useNavigate();
  return (
    <div className={s.gallery}>
      {json.map((item) => (
        <div key={item.id} onClick={() => navigate("/description/" + item.id)}>
          <GalleryItem
            title={item.title}
            picture={item.pictures}
            currentData={item}
          />
        </div>
      ))}
    </div>
  );
}
