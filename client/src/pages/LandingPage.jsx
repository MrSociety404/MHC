import Button from "../components/Common/Button";
import Artboard from "../assets/images/Artboard.png";
import { Link } from "react-router-dom";

import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <main className="landingPage">
      <div>
        <h1 className="landingPage__title">We offer high quality</h1>
        <h2 className="landingPage__subtitle">Adventure Tours and Holidays</h2>
        <p className="landingPage__desc">
          Come and dive into the big hiking adventure ! Hundreds of hikers
          already enrolled
        </p>
        <Link to="/tracks" >
          <Button content="LET'S GO" />
        </Link>
      </div>
      <img src={Artboard} alt="landing" className="landingPage__illu" />
    </main>
  );
};

export default LandingPage;
