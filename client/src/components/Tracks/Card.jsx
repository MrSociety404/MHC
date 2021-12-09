import { ReactComponent as Chronometer } from "../../assets/svg/jam_chronometer.svg";
import {ReactComponent as Level } from "../../assets/svg/level.svg";
import {ReactComponent as Distance } from "../../assets/svg/distance.svg";
import { Link } from "react-router-dom";

import "./Hikings.scss";

const Card=()=> {

         
    return(
        <div className="hikings">
            <Link to="/View">
        <h2>ALL THE HIKINGS</h2>
            </Link>
            <div className="card">
            <img className="card_img_top" alt="hike" src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
            <div className="container">
            <p className="level">Très difficile</p>
            <h5>Vallée de la mort</h5>
            <div className="icons">
            <Chronometer />
            <p>2h15</p>
            <Level />
            <p>78m</p>
            <Distance />
            <p>6km</p>
            </div>

            </div>

        </div>
        </div>
    )


}

export default Card;