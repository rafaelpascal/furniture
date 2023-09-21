import "./discovermore.css";
import { newpicks } from "../../assets";

const DiscoverMore = () => {
  return (
    <section className="container__container discover__container">
      <div className="discover__container-content">
        <div className="discover__container-text">
          <h6>DISCOVER MORE</h6>
          <h2>ABOUT OUR MATERIALS</h2>

          <div>
            <h6>THE TRENDY VIBE</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices
            </p>
          </div>
          <div>
            <h6>SOFT TOUCH</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices
            </p>
          </div>
          <div>
            <h6>ECO AWARENESS</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices
            </p>
          </div>
        </div>
        <div className="discover__container-image">
          <img src={newpicks} alt="" />
        </div>
      </div>
    </section>
  );
};

export default DiscoverMore;
