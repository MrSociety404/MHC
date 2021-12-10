import { useContext, useState } from "react";
import { UserContext } from "../context";
import { Link, useNavigate } from "react-router-dom";

// Assets
import "./Connect.scss";
import { ReactComponent as ConnectIllu } from "../assets/svg/loginIllu.svg";
import Modal from "../components/Modal/Modal";
import Input from "../components/Modal/Input";
import Button from "../components/Common/Button";
import axios from "axios";

const Connect = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [state, setState] = useContext(UserContext);

  const navigate = useNavigate();

  const onSubmitHandling = async () => {
    if (!emailInput) {
      setErrMsg("Email is missing");
    } else if (!passwordInput) {
      setErrMsg("Password is missing");
    } else {
      const {data: response} = await axios.post("http://localhost:80/api/auth", {
        email: emailInput,
        password: passwordInput,
      });
      console.log(response);
      if (response.message !== "Authentificated User !") {
        setErrMsg(response.message);
        setPasswordInput("");
      } else {
        localStorage.setItem("token", response.token);
        const user = {
          id: response.data[0].id,
          email: response.data[0].email,
          nickname: response.data[0].nickname,
          image: response.data[0].image,
          admin: response.data[0].admin,
        };
        setState({ data: user, loading: false, error: null });
        navigate("/");
      }
    }
  };

  return (
    <main className="connect">
      <Modal title="Login" onSubmitEvent={onSubmitHandling}>
        <p className="connect__headline">
          Need to discover hicking club ? Signin now!
        </p>
        <Input
          type="email"
          label="email"
          labelText="Email"
          placeholder="Your email here"
          value={emailInput}
          setValue={setEmailInput}
          error={errMsg === "Email is missing" ? true : false}
        />
        <Input
          type="password"
          label="password"
          labelText="Password"
          value={passwordInput}
          setValue={setPasswordInput}
          placeholder="Your password here"
          error={errMsg === "Password is missing" ? true : false}
        />
        <p className="connect__errMsg">{errMsg}</p>
        <Button content="Login" />
        <p className="connect__more">
          Not registered yet?
          <Link to="/register" className="connect__action">
            Create an Account
          </Link>{" "}
        </p>
      </Modal>
      <ConnectIllu className="connect__illu" />
    </main>
  );
};

export default Connect;
