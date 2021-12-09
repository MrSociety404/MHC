import { useContext, useState } from "react";
import {UserContext} from '../context'
import { Link, useNavigate } from "react-router-dom";

// Assets
import "./Connect.scss";
import { ReactComponent as ConnectIllu } from "../assets/svg/loginIllu.svg";
import Modal from "../components/Modal/Modal";
import Input from "../components/Modal/Input";
import Button from "../components/Common/Button";

const Register = () => {
  const [emailInput, setEmailInput] = useState("");
  const [nicknameInput, setNicknameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordConfInput, setPasswordConfInput] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [state, setState] = useContext(UserContext);

  const navigate = useNavigate();

  const onSubmitHandling = async () => {
    if (!emailInput) {
      setErrMsg("Email is missing");
    } else if (!nicknameInput) {
      setErrMsg("Nickname is missing");
    } else if (!passwordInput) {
      setErrMsg("Password is missing");
    } else if (!passwordConfInput) {
      setErrMsg("Confirm your password");
    } else {
      if(passwordConfInput === passwordInput) {
        const res = await fetch("http://localhost:80/api/user", {
          mode: "cors",
          method: "POST",
          body: JSON.stringify({
            email: emailInput,
            password: passwordInput,
            image: imageInput,
            passwordInput: passwordInput,
            nickname: nicknameInput
          }),
        });
        const response = await res.json();
        if (response.message !== "User created !") {
          setErrMsg(response.message);
          setPasswordInput("");
          setPasswordConfInput("");
        } else {
          localStorage.setItem("token", response.token);
          const user = {
            id: response.data[0].id,
            email: response.data[0].email,
            nickname: response.data[0].nickname,
            image: response.data[0].image,
            admin: response.data[0].admin,
          }
          setState({data: user , loading: false, error: null})
          navigate("/");
        }
      } else {
        setErrMsg("Password must be the same");
      }
    }
  };

  return (
    <main className="connect">
      <Modal title="Signup" onSubmitEvent={onSubmitHandling}>
        <p className="connect__headline">
          Need to discover hicking club ? Join us now!
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
          type="text"
          label="nickname"
          labelText="Nickname"
          placeholder="Your nickname here"
          value={nicknameInput}
          setValue={setNicknameInput}
          error={errMsg === "Nickname is missing" ? true : false}
        />
        <Input
          type="text"
          label="image"
          labelText="Image Link"
          placeholder="Your image link here"
          value={imageInput}
          setValue={setImageInput}
        />
        <Input
          type="password"
          label="password"
          labelText="Password"
          placeholder="Your password here"
          value={passwordInput}
          setValue={setPasswordInput}
          error={errMsg === "Password is missing" ? true : false}
        />
        <Input
          type="password"
          label="passwordConfirm"
          labelText="Password Confirmation"
          placeholder="Confirm your password here"
          value={passwordConfInput}
          setValue={setPasswordConfInput}
          error={errMsg === "Confirm your password" ? true : false}
        />
        <p className="connect__errMsg">{errMsg}</p>
        <Button content="Signup" />
        <p className="connect__more">
          Already an Account?
          <Link to="/login" className="connect__action">
            Signin here
          </Link>
        </p>
      </Modal>
      <ConnectIllu className="connect__illu" />
    </main>
  );
};

export default Register;
