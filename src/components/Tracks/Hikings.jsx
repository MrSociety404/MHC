import "./Hikings.scss";

//Import cards
import Card from "./Card.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from '../Common/Loading'
import Button from '../Common/Button'
import { useNavigate } from "react-router-dom";

const Hikings = () => {
  const [hikings, setHikings] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchHikings();
  }, []);

  const fetchHikings = async () => {
    const response = await axios.get("http://localhost:80/api/hiking", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (response.status === 200) {
      setHikings(response.data.data);
      setIsFetching(false);
    }
  };

  const goCreate = () => {
    navigate('/manage')
  }

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : (
        <main className="hikings">
          <div className="hikings__box">
            <h2 className="hikings__title">ALL THE HIKINGS</h2>
            <Button to="/manage" className="hikings__btn" onClick={goCreate} content='ADD YOURS' />
          </div>
          <section className="hikings__list">
            {hikings.map(hiking => (
              <Card key={hiking.id} hiking={hiking} />
            ))}
          </section>
        </main>
      )}
    </>
  );
};

export default Hikings;
