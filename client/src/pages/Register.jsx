import Modal from "../components/Modal/Modal";

// Assets
import "./Connect.scss";
import { ReactComponent as ConnectIllu } from "../assets/svg/loginIllu.svg";
import Input from "../components/Modal/Input";
import Button from "../components/Common/Button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="connect">
      <Modal title="Signup">
        <p className="connect__headline">Need to discover hicking club ? Join us now!</p>
        <Input
          type="email"
          label="email"
          labelText="Email"
          placeholder="Your email here"
        />
        <Input
          type="text"
          label="nickname"
          labelText="Nickname"
          placeholder="Your nickname here"
        />
        <Input
          type="text"
          label="image"
          labelText="Image Link"
          placeholder="Your image link here"
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
        <Button content="Login" />
        <p className="connect__more">
          Already an Account?
          <Link to="/login" className="connect__action">Signin here</Link>
        </p>
      </Modal>
      <ConnectIllu className="connect__illu" />
    </main>
  );
};

export default Register;
