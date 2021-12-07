import "./Account.scss";

import { ReactComponent as AccountIllu } from "../assets/svg/account.svg";
import Modal from "../components/Modal/Modal";
import Input from "../components/Modal/Input";
import Button from "../components/Common/Button";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <main className="account">
      <Modal title="Profile">
        <img src="https://images.unsplash.com/photo-1586022045315-1cdd6493045c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="avatar" className="account__avatar" />
        <Input
          type="text"
          label="nickname"
          labelText="Nickname"
          placeholder="Your nickname here"
        />
        <Input
          type="email"
          label="email"
          labelText="Email"
          placeholder="Your email here"
          disabled={true}
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
