import { createContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  }

  const fetchUser = async () => {
    const res = await fetch("http://localhost:80/api/me", {
      headers: {
        'Authorization': token,
      },
    });
    const response = await res.json();
    if (response.data) {
      setUser({
        data: {
          id: response.data[0].id,
          email: response.data[0].email,
          nickname: response.data[0].nickname,
          image: response.data[0].image,
          admin: response.data[0].admin
        },
        loading: false,
        error: null,
      });
    } else {
      setUser({
        data: null,
        loading: false,
        error: response.message,
      });
    }
  };

  useEffect(() => {
    if (token) {
      fetchUser();
    } else {
      setUser({
        data: null,
        loading: false,
        error: null,
      });
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
