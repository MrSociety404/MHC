import { ReactComponent as Chronometer } from "../../assets/svg/jam_chronometer.svg";
import { ReactComponent as Level } from "../../assets/svg/level.svg";
import { ReactComponent as Distance } from "../../assets/svg/distance.svg";
import { useNavigate } from "react-router-dom";

import "./Hikings.scss";
import { useEffect, useState } from "react";

const Card = ({ hiking }) => {
  const navigate = useNavigate();

  const [duration, setDuration] = useState(parseInt(hiking.duration));
  const [level, setLevel] = useState(parseInt(hiking.level))

  const showDetails = () => {
    navigate(`/view/${hiking.id}`);
  };

  useEffect(() => {
    if (duration < 60) {
      setDuration(`${duration}min`);
    } else {
      const hours = Math.floor(duration / 60);
      let minutes = duration % 60;
      minutes = minutes < 10 ? `0${minutes}` : minutes
      setDuration(`${hours}h${minutes}`);
    }

    switch (level) {
      case 1:
        setLevel('Medium')
        break;
      case 2:
        setLevel('Hard')
        break;
      case 3:
        setLevel('Hardcore')
        break;
      default:
        setLevel('Easy')
        break;
    }
  }, [])

  return (
    <article onClick={showDetails} className="card">
      <img className="card_img_top" alt={hiking.name} src={hiking.image}></img>
      <div className="card__container">
        <p className="card__level">{level}</p>
        <h5 className="card__name"> {hiking.name} </h5>
        <div className="card__icons">
          <Chronometer />
          <p>{duration}</p>
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
