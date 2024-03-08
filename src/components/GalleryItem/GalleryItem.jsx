import { useNavigate } from "react-router-dom";
import s from "./style.module.css";
import { Description } from "../Description/Description";

export function GalleryItem({ key, title, picture, currentData }) {
  const navigate = useNavigate();
  return (
    <div
      key={key}
      onClick={() => (
        <Description
          title={title}
          picture={picture}
          currentData={currentData}
        />
      )}
      className={s.galleryItem}
    ></div>
  );
}
