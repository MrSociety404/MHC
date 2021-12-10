//Svg
import {ReactComponent as Difficulty} from "../assets/svg/difficulty.svg";
import { ReactComponent as Chronometer } from "../assets/svg/jam_chronometer.svg";
import {ReactComponent as Level } from "../assets/svg/level.svg";
import {ReactComponent as Distance } from "../assets/svg/distance.svg";
import {ReactComponent as Edit} from "../assets/svg/edit.svg";
import {ReactComponent as Delete} from "../assets/svg/delete.svg";


//Sass
import "./View.scss";

import Button from "../components/Common/Button";

const View = () => {
  return (
    <div className="container">
      <img className="view_img" alt="hiker" src="https://images.unsplash.com/photo-1458442310124-dde6edb43d10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
      <h1 className="view_title">Promenade de Petit Modave</h1>
      <div className="card">
        <h2 className="card_title">Details</h2>
        <div className="card_icons">
          <div className="card_details">
            <p>
            <Chronometer className="card_details_icons"/>Duration
            </p>
            <p>1h25</p>
          </div>
          <div className="card_details">
            <p>
            <Difficulty className="card_details_icons"/>Difficulty
            </p>
            <p>Easy</p>
          </div>
          </div>
          <div className="card_icons">
          <div className="card_details">
            <p>
            <Level className="card_details_icons"/>Level
            </p>
            <p>105m</p>
          </div>
          <div className="card_details">
            <p>
            <Distance className="card_details_icons"/>Distance
            </p>
            <p>25km</p>
          </div>
          </div>
      </div>
      <div className="description">
        <h3 className="description_title">Description</h3><div className="description_icons"><Edit/><Delete/></div>
        
      
      </div> 
       <p className="card_p">Au départ du Château de Modave, cette promenade permet de découvrir la partie Sud de la réserve naturelle de Modave ainsi que la vallée du Hoyoux. Vous découvrirez également le hameau de Tibiémont, le gué du Val, le site de l'ancien château de Survillers et son très beau point de vue. Un beau sentier forestier (la drève boisée) vous ramènera doucement vers le château. Cette balade est reconnue par le Commissariat général au Tourisme de Wallonie (Belgique)</p>
      <Button content="See Other"/>
    </div>
  )
}

export default View;