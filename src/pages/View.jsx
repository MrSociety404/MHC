//Svg

import { ReactComponent as Edit } from "../assets/svg/edit.svg";
import { ReactComponent as Delete } from "../assets/svg/delete.svg";

//Sass
import "./View.scss";

import Button from "../components/Common/Button";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Common/Loading";
import CardDetails from "../components/Tracks/CardDetails";
import UserDetails from "../components/Tracks/UserDetails";

const View = () => {
  const [hiking, setHiking] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchHikingDetails(id);
  }, []);

  const fetchHikingDetails = async (id) => {
    const response = await axios.get(
      "https://server-mhc.herokuapp.com/api/hiking/" + id
    );
    if (response.status === 200) {
      setHiking(response.data.data[0]);
    }
  };

  const handleDelete = async () => {
    const response = await axios.delete(
      "https://server-mhc.herokuapp.com/api/hiking/" + id
    );
    if (response.status === 200) {
      navigate("/tracks");
    }
  };

  return (
    <>
      {hiking ? (
        <div className="container">
          <img className="view_img" alt="hiker" src={hiking.image} />
          <h1 className="view_title">{hiking.name}</h1>
          <UserDetails hiking={hiking} />
          <CardDetails hiking={hiking} />
          <div className="description">
            <h3 className="description_title">Description</h3>
            <div className="description_icons">
              <Link to={`/manage/${hiking.id}`}>
                <Edit />
              </Link>
              <Delete onClick={handleDelete} />
            </div>
          </div>
          <p className="card_p">{hiking.description}</p>
          <Button content="See Other" />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default View;
