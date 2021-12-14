import { ReactComponent as Chronometer } from "../../assets/svg/jam_chronometer.svg";
import { ReactComponent as Level } from "../../assets/svg/level.svg";
import { ReactComponent as Distance } from "../../assets/svg/distance.svg";
import { useNavigate } from "react-router-dom";

import "./Hikings.scss";

const Card = ({ hiking }) => {
  const navigate = useNavigate();

  const level = ["Easy", "Medium", "Hard", "Hardcore"];

  const showDetails = () => {
    navigate(`/view/${hiking.id}`);
  };

  return (
    <article onClick={showDetails} className="card">
      <img className="card_img_top" alt={hiking.name} src={hiking.image}></img>
      <div className="card__container">
        <p className="card__level">{level[hiking.level]}</p>
        <h5 className="card__name"> {hiking.name} </h5>
        <div className="card__icons">
          <Chronometer />
          <p>
            {(hiking.duration - (hiking.duration % 60)) / 60 +
              "h" +
              (hiking.duration % 60 < 10
                ? "0" + (hiking.duration % 60)
                : hiking.duration % 60)}
          </p>
          <Level />
          <p>{hiking.elevation_gain} m</p>
          <Distance />
          <p>{hiking.distance} km</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
