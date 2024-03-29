import s from "./style.module.css";
import json from "../../assets/json/logements.json";
import { useState } from "react";
import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import { DropdownButton } from "../DropdownButton/DropdownButton";
import { useParams } from "react-router-dom";

export function Description() {
  const { id } = useParams();
  const currentItem = json.find((item) => item.id === id); // Trouver l'élément correspondant dans votre JSON
  console.log(currentItem.id);
  const photos = currentItem.pictures;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!currentItem) {
    return <div>Item non trouvé</div>; // Gérer l'absence de données comme vous le souhaitez
  }

  // L'état initial est 0, pour la première image du tableau.
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
      <div key={currentItem.id} className={s.container}>
        <img className={s.banner} src={photos[currentImageIndex]} alt="props" />
        <button className={s.leftButton} onClick={prevImage}>
          <i className="fa-solid fa-chevron-left fa-2xl"></i>
        </button>
        <p className={s.currentSlide}>
          {currentImageIndex + 1} / {photos.length}
        </p>
        <button className={s.rightButton} onClick={nextImage}>
          <i className="fa-solid fa-chevron-right fa-2xl"></i>
        </button>
      </div>

      <div className={s.main_container}>
        <div className={s.upper_section}>
          <div>
            <h1>{currentItem.title}</h1>
            <h2>{currentItem.location}</h2>
            <div className={s.tags}>
              {currentItem.tags.map((tag, index) => (
                <div key={index}>{tag}</div>
              ))}
            </div>
          </div>
          <div className={s.author_stars_container}>
            <div className={s.author}>
              <div className={s.author_name}>{currentItem.host.name}</div>
              <div className={s.profile_pic}>
                <img src={currentItem.host.picture} alt="" />
              </div>
            </div>
            <FiveStarRating rating={currentItem.rating} />
          </div>
        </div>
        <div className={s.lower_section}>
          <DropdownButton
            buttonText={"Description"}
            description={currentItem.description}
          />
          <DropdownButton
            buttonText={"Equipement"}
            equipement={currentItem.equipments}
          />
        </div>
      </div>
    </div>
  );
}
