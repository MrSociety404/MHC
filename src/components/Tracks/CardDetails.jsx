import { ReactComponent as Difficulty } from "../../assets/svg/difficulty.svg";
import { ReactComponent as Chronometer } from "../../assets/svg/jam_chronometer.svg";
import { ReactComponent as Level } from "../../assets/svg/level.svg";
import { ReactComponent as Distance } from "../../assets/svg/distance.svg";
import { useEffect, useState } from "react";

const CardDetails = ({ hiking }) => {
  const [level, setLevel] = useState();
  const [duration, setDuration] = useState();

  useEffect(() => {
    switch (hiking.level) {
      case 1:
        setLevel("Medium");
        break;
      case 2:
        setLevel("Hard");
        break;
      case 3:
        setLevel("Hardcore");
        break;

      default:
        setLevel("Easy");
        break;
    }

    if (hiking.duration <= 60) {
      setDuration(`${hiking.duration}min`);
    } else {
      const hours = Math.floor(hiking.duration / 60);
      let minutes = hiking.duration % 60;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      setDuration(`${hours}h${minutes}`);
    }
  }, [hiking.duration, hiking.level]);

  return (
    <div className="card">
      <h2 className="card_title">Details</h2>
      <div className="card_icons">
        <div className="card_details">
          <p>
            <Chronometer className="card_details_icons" />
            Duration
          </p>
          <p>{duration}</p>
        </div>
        <div className="card_details">
          <p>
            <Difficulty className="card_details_icons" />
            Difficulty
          </p>
          <p>{level}</p>
        </div>
      </div>
      <div className="card_icons">
        <div className="card_details">
          <p>
            <Level className="card_details_icons" />
            Elevation Gain
          </p>
          <p>{hiking.elevation_gain}m</p>
        </div>
        <div className="card_details">
          <p>
            <Distance className="card_details_icons" />
            Distance
          </p>
          <p>{hiking.distance}km</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
