import Button from "../components/Common/Button";
import Artboard from "../assets/images/Artboard.png";

import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <main className="landingPage">
      <div>
        <h1 className="landingPage__title">We offer high quality</h1>
        <h2 className="landingPage__subtitle">Adventure Tours and Holidays</h2>
        <p className="landingPage__desc">
          Come and dive into the big hiking adventure ! Hundreds of hikers already
          enrolled
        </p>
        <Button content="LET'S GO"/>
      </div>
      <img src={Artboard} alt="landing" className="landingPage__illu" />
    </main>
  );
};

export default LandingPage;
