import Modal from "../components/Modal/Modal";

// Assets
import "./Connect.scss";
import { ReactComponent as ConnectIllu } from "../assets/svg/loginIllu.svg";
import Input from "../components/Modal/Input";
import Button from "../components/Common/Button";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <main className="connect">
      <Modal title="Login">
        <p className="connect__headline">Need to discover hicking club ? Signin now!</p>
        <Input
          type="email"
          label="email"
          labelText="Email"
          placeholder="Your email here"
          error={true}
          errMsg="Invalid Email !"
        />
        <Input
          type="password"
          label="password"
          labelText="Password"
          placeholder="Your password here"
        />
        <Button content="Login" />
        <p className="connect__more">
          Not registered yet?
          <Link to="/register" className="connect__action">Create an Account</Link>{" "}
        </p>
      </Modal>
      <ConnectIllu className="connect__illu" />
    </main>
  );
};

export default Connect;
