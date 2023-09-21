import "./stockholm.css";
import {
  Stockholm1,
  Stockholm2,
  Stockholm3,
  Stockholm4,
  Stockholm5,
} from "../../assets";
import { useEffect, useState } from "react";

const Stockholm = () => {
  const [divHover, setDivHover] = useState(false);

  const handleMouseEnter = () => {
    setDivHover(true);
  };

  const handleMouseLeave = () => {
    setDivHover(false);
  };

  return (
    <section className="container">
      <div className="stockholm__container">
        <p>SHOP OUR</p>
        <h2>STOCKHOLM COLLECTION</h2>

        <div className="stockholm__container-content">
          <div className="stockholm__container-img">
            <img src={Stockholm1} alt="" />
          </div>
          <div className="stockholm__container-otjer-img">
            <div>
              <div
                className="image__stock"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={Stockholm2} alt="" />
                <div className="write__up">
                  <h3 className="write__up-h2">SPIDER CHAIR</h3>
                  <h6 className="write__up-p">Retro designer piece</h6>
                  {/* <div className="slide-div"> */}
                  <p
                    className={`write__up-p-price ${
                      divHover ? "write__up-p-hover" : ""
                    }`}
                  >
                    $350
                  </p>
                  <button
                    className={`write__up-btn ${
                      divHover ? "addtocartbtn" : ""
                    }`}
                  >
                    <p className="write__up-p">Add to cart</p>
                  </button>
                  {/* </div> */}
                </div>
              </div>
              <div
                className="image__stock"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={Stockholm3} alt="" />
                <div className="write__up">
                  <h3 className="write__up-h2">SPIDER CHAIR</h3>
                  <h6 className="write__up-p">Retro designer piece</h6>
                  {/* <div className="slide-div"> */}
                  <p
                    className={`write__up-p-price ${
                      divHover ? "write__up-p-hover" : ""
                    }`}
                  >
                    $350
                  </p>
                  <button
                    className={`write__up-btn ${
                      divHover ? "addtocartbtn" : ""
                    }`}
                  >
                    <p className="write__up-p">Add to cart</p>
                  </button>
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div>
              <div
                className="image__stock"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={Stockholm4} alt="" />
                <div className="write__up">
                  <h3 className="write__up-h2">SPIDER CHAIR</h3>
                  <h6 className="write__up-p">Retro designer piece</h6>
                  {/* <div className="slide-div"> */}
                  <p
                    className={`write__up-p-price ${
                      divHover ? "write__up-p-hover" : ""
                    }`}
                  >
                    $350
                  </p>
                  <button
                    className={`write__up-btn ${
                      divHover ? "addtocartbtn" : ""
                    }`}
                  >
                    <p className="write__up-p">Add to cart</p>
                  </button>
                  {/* </div> */}
                </div>
              </div>
              <div
                className="image__stock"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={Stockholm5} alt="" />
                <div className="write__up">
                  <h3 className="write__up-h2">SPIDER CHAIR</h3>
                  <h6 className="write__up-p">Retro designer piece</h6>
                  {/* <div className="slide-div"> */}
                  <p
                    className={`write__up-p-price ${
                      divHover ? "write__up-p-hover" : ""
                    }`}
                  >
                    $350
                  </p>
                  <button
                    className={`write__up-btn ${
                      divHover ? "addtocartbtn" : ""
                    }`}
                  >
                    <p className="write__up-p">Add to cart</p>
                  </button>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stockholm;
