import s from "./style.module.css";
import json from "../../assets/json/logements.json";
import { useState } from "react";
import ChevronLeft from "../../assets/images/chevron-left.svg";
import ChevronRight from "../../assets/images/chevron-right.svg";
import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import { DropdownButton } from "../DropdownButton/DropdownButton";

export function Description({ key, title, picture, currentData }) {
  const appart = json.filter((obj) => obj.id === "c67ab8a7");
  const photos = appart[0].pictures;

  // L'état initial est 0, pour la première image du tableau.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className={s.container}>
        <img
          className={s.ChevronLeft}
          onClick={prevImage}
          src={ChevronLeft}
          alt=""
          width={100}
        />
        <img className={s.banner} src={photos[currentImageIndex]} alt="props" />
        <img
          className={s.ChevronRight}
          onClick={nextImage}
          src={ChevronRight}
          alt=""
          width={100}
        />
      </div>
      <div className={s.main_container}>
        <div className={s.upper_section}>
          <div>
            <h1>Cozy loft on the Canal Saint-Martin</h1>
            <h2>Paris, Île de France</h2>
            <div className={s.tags}>
              <div>Cozy</div>
              <div>Canal</div>
              <div>Paris 10</div>
            </div>
          </div>
          <div className={s.author_stars_container}>
            <div className={s.author}>
              <div className={s.author_name}>Alexandre Dumas</div>
              <div className={s.profile_pic}></div>
            </div>
            <FiveStarRating />
          </div>
        </div>
        <div className={s.lower_section}>
          <DropdownButton buttonText={"Description"} />
          <DropdownButton buttonText={"Equipement"} />
        </div>
      </div>
    </div>
  );
}
