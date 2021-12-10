import "./Manage.scss";
import { ReactComponent as Chevron } from "../assets/svg/chevron.svg";
import { ReactComponent as ManageIllu } from "../assets/svg/manage.svg";
import axios from 'axios'

import Modal from "../components/Modal/Modal";
import Input from "../components/Modal/Input";
import { useEffect, useState } from "react";
import Button from "../components/Common/Button";
import { Link, useParams } from "react-router-dom";

const Manage = () => {
  const [hikingName, setHikingName] = useState("");
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState("");
  const [elevation, setElevation] = useState(0);
  const [image, setImage] = useState("");
  const [level, setLevel] = useState(0);
  const [description, setDescription] = useState("");
  const [errMsg, setErrMsg] = useState("")

  const {id} = useParams();

  
  useEffect(() => {
    if (id) {
      fetchHiking(id)
    } 
  }, [id])

  const onSubmitHandling = () => {
    if(!hikingName) {
      setErrMsg("Name your hiking track");
    } else if (!description) {
      setErrMsg("Give a description to your hiking track");
    } else {
      setErrMsg("");
      // Check 
      if(level < 0 || level > 3) setLevel(0)

      const durationArr = duration.split(':');
      const totalDur = (parseInt(durationArr[0])*60) + parseInt(durationArr[1]);
      let response = false
      if (id) {
        response = edithiking(totalDur, id)
      } else {
        response = addHiking(totalDur)
      }
      if (response) {
        setHikingName('')
        setDistance(0)
        setDuration('')
        setElevation(0)
        setImage('')
        setLevel(0)
        setDescription('')
      }
    }
  }

  const addHiking = async (totalDur) => {
    const response = await axios.post('http://localhost:80/api/hiking', {
      name: hikingName,
      level,
      distance,
      duration: totalDur,
      description,
      elevation_gain: elevation,
      image
    })
    return response.status === 200 
  }

  const edithiking = async (totalDur, id) => {
    const response = await axios.patch('http://localhost:80/api/hiking/'+id, {
      name: hikingName,
      level,
      distance,
      duration: totalDur,
      description,
      elevation_gain: elevation,
      image
    })
    return response.status === 200 
  }

  const fetchHiking = async (id) => {
    const response = await axios.get('http://localhost:80/api/hiking/'+id)
    if (response.status === 200) {
      const {data: hiking} = response
    
      const hours = Math.floor(hiking.data[0].duration/60);
      const minutes = hiking.data[0].duration % 60
      const duration = `${hours < 10 ? '0'+hours : hours}:${minutes < 10 ? '0'+minutes : minutes}`

      setHikingName(hiking.data[0].name)
      setDistance(hiking.data[0].distance)
      setDuration(duration)
      setElevation(hiking.data[0].elevation_gain)
      setImage(hiking.data[0].image)
      setLevel(hiking.data[0].level)
      setDescription(hiking.data[0].description)
    }
  }

  return (
    <main className="manage">
      <Modal title={id ? "Edit hiking": "New hiking"} onSubmitEvent={onSubmitHandling}>
        <p className="connect__headline">
          Did you take a hike that is not on our site? good choice, add it here!
        </p>
        <Input
          label="name"
          labelText="Name"
          type="text"
          placeholder="Name your hiking track"
          setValue={setHikingName}
          value={hikingName}
          error={errMsg === 'Name your hiking track' ? true : false}
        />
        <div className="input">
          <label htmlFor="level" className="input__label">
            Level
          </label>
          <div className="input__box">
            <select
              name="level"
              id="leve"
              className="input__inpt"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="0">Easy</option>
              <option value="1">Medium</option>
              <option value="2">Hard</option>
              <option value="3">Hardcore</option>
            </select>
            <Chevron className="input__icon" />
          </div>
        </div>
        <Input
          label="distance"
          labelText="Distance km"
          type="number"
          placeholder="0 km"
          setValue={setDistance}
          value={distance}
        />
        <Input
          label="duration"
          labelText="Duration"
          type="time"
          placeholder="120 min"
          setValue={setDuration}
          value={duration}
        />
        <Input
          label="elevation"
          labelText="Elevation gain"
          type="number"
          placeholder="124 m"
          setValue={setElevation}
          value={elevation}
        />
        <Input
          label="image"
          labelText="Image link"
          placeholder="Ex: https://imgur.com/"
          type="text"
          setValue={setImage}
          value={image}
        />
        <div className="input">
          <label htmlFor="description" className="input__label">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            className={`input__inpt ${errMsg === 'Give a description to your hiking track' ? "error" : ""}`}
            placeholder="Your description here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <p className="connect__errMsg">{errMsg}</p>
        <Button content={id ? "Edit" : "add"} />
        <p className="connect__more">
          Change your mind ?
          <Link to="/" className="connect__action">
          Cancel here
          </Link>
        </p>
      </Modal>
      <ManageIllu className='manage__illu' />
    </main>
  );
};

export default Manage;
