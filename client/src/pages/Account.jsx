import { useContext } from "react";
import { UserContext } from "../context";
import { Link } from "react-router-dom";

// Assets
import "./Account.scss";
import { ReactComponent as AccountIllu } from "../assets/svg/account.svg";
import Modal from "../components/Modal/Modal";
import Input from "../components/Modal/Input";
import Button from "../components/Common/Button";

const Account = () => {

  const [state, setState] = useContext(UserContext);

  return (
    <main className="account">
      <Modal title="Profile">
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
        />
        <Input
          type="password"
          label="passwordConfirm"
          labelText="Password Confirmation"
          placeholder="Confirm your password here"
        />
        <Button content="Update" />
        <p className="connect__more">
          Change your mind?
          <Link to="/tracks" className="connect__action">
            Cancel here
          </Link>{" "}
        </p>
      </Modal>
      <AccountIllu className='account__illu' />
    </main>
  );
};

export default Account;
