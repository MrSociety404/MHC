import { useContext, useState } from "react";
import { UserContext } from "../context";
import { Link } from "react-router-dom";

// Assets
import "./Account.scss";
import { ReactComponent as AccountIllu } from "../assets/svg/account.svg";
import Modal from "../components/Modal/Modal";
import Input from "../components/Modal/Input";
import Button from "../components/Common/Button";
import axios from "axios";

const Account = () => {
  const [state] = useContext(UserContext);

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordConfInput, setPasswordConfInput] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const onSubmitHandling = async () => {
    if (passwordInput && passwordConfInput) {
      if (passwordInput === passwordConfInput) {
        await axios.patch(
          `https://server-mhc.herokuapp.com/api/user/${state.data.id}`,
          {
            password: passwordConfInput,
          }
        );
        setErrMsg("");
      } else {
        setErrMsg("Password must be the same");
      }
    } else {
      setErrMsg("Required fields are empty");
    }
  };

  return (
    <main className="account">
      <Modal title="Profile" onSubmitEvent={onSubmitHandling}>
        <img src={state.data.image} alt="avatar" className="account__avatar" />
        <Input
          type="text"
          label="nickname"
          labelText="Nickname"
          disabled={true}
          placeholder="Your nickname here"
          value={state.data.nickname}
        />
        <Input
          type="email"
          label="email"
          labelText="Email"
          placeholder="Your email here"
          disabled={true}
          value={state.data.email}
        />
        <Input
          type="password"
          label="password"
          labelText="Password"
          placeholder="Your password here"
          value={passwordInput}
          setValue={setPasswordInput}
          error={errMsg ? true : false}
        />
        <Input
          type="password"
          label="passwordConfirm"
          labelText="Password Confirmation"
          placeholder="Confirm your password here"
          value={passwordConfInput}
          setValue={setPasswordConfInput}
          error={errMsg ? true : false}
        />
        <p className="connect__errMsg">{errMsg}</p>
        <Button content="Update" />
        <p className="connect__more">
          Change your mind?
          <Link to="/tracks" className="connect__action">
            Cancel here
          </Link>{" "}
        </p>
      </Modal>
      <AccountIllu className="account__illu" />
    </main>
  );
};

export default Account;
