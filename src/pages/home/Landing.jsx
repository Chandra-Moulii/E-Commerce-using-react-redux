import Landingpagepic from "../../assets/images/Landingpagepic.jpg";
import "../../assets/Landing.css";
const Landing = () => {
  return (
    <div className="hero">
      <img src={Landingpagepic} alt="cart" />
      <h1>
        Shop like there is <br /> <span>no tommorow</span>
      </h1>
      <p>A best place for all you home needs and appliances.</p>
      <button>
        <a href="/products">Shop Now</a>
      </button>
    </div>
  );
};

export default Landing;
