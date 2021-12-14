import axios from "axios";
import { useEffect, useState } from "react";
import "./UserDetails.scss";

const UserDetails = ({ hiking }) => {
  const [user, setUser] = useState(null);
  const date = new Date(hiking.created_at);
  const dateOption = { weekday: "short", day: "numeric", month: "short" };

  useEffect(() => {
    fetchUser(hiking.id_user);
  }, [hiking.id_user]);

  const fetchUser = async (id) => {
    const response = await axios.get(
      "https://server-mhc.herokuapp.com/api/user/" + id
    );
    if (response.status === 200) {
      setUser(response.data.data[0]);
    }
  };

  return (
    <>
      {user ? (
        <div className="userDetails">
          <img
            src={user.image}
            alt={user.nickname}
            className="userDetails__img"
          />
          <div className="userDetails__box">
            <h3 className="userDetails__username">{user.nickname}</h3>
            <p className="userDetails__date">
              {" "}
              {date.toLocaleString("en-US", dateOption)}{" "}
            </p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default UserDetails;
