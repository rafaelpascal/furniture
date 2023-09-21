import "./newarrivals.css";
import { mew1, mew2, mew3, mew4, mew5, mew6 } from "../../assets";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { useEffect, useState } from "react";
const Newarrivals = () => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <section className="container">
      <div className="newarrivals__container">
        <p>SHOP OUR</p>
        <h2>NEW ARRIVALS</h2>

        <div className="newarrivals__images">
          <div style={{ padding: "0", margin: "0" }}>
            <div
              className="new__img"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="heart__eye">
                <button className="heart__eye-btn">
                  <AiOutlineHeart />
                </button>
                <button className="heart__eye-btn">
                  <AiOutlineEye />
                </button>
              </div>
              <img src={mew1} alt="" />
              <div className="addto__cart">
                {hover && <button className="addtocart">Add to Cart</button>}
              </div>
            </div>
            <div className="desc__price">
              <h4 style={{ padding: "0", margin: "0" }}>GREEN VITO</h4>
              <h3 style={{ padding: "0", margin: "0" }}> $760</h3>
            </div>
          </div>
          <div style={{ padding: "0", margin: "0" }}>
            <div className="new__img">
              <div className="heart__eye">
                <button className="heart__eye-btn">
                  <AiOutlineHeart />
                </button>
                <button className="heart__eye-btn">
                  <AiOutlineEye />
                </button>
              </div>
              <img src={mew2} alt="" />
              <div className="addto__cart">
                <button className="addtocart">Add to Cart</button>
              </div>
            </div>
            <div className="desc__price">
              <h4 style={{ padding: "0", margin: "0" }}>GREEN VITO</h4>
              <h3 style={{ padding: "0", margin: "0" }}> $760</h3>
            </div>
          </div>
          <div style={{ padding: "0", margin: "0" }}>
            <div className="new__img">
              <div className="heart__eye">
                <button className="heart__eye-btn">
                  <AiOutlineHeart />
                </button>
                <button className="heart__eye-btn">
                  <AiOutlineEye />
                </button>
              </div>
              <img src={mew3} alt="" />
              <div className="addto__cart">
                <button className="addtocart">Add to Cart</button>
              </div>
            </div>
            <div className="desc__price">
              <h4 style={{ padding: "0", margin: "0" }}>GREEN VITO</h4>
              <h3 style={{ padding: "0", margin: "0" }}> $760</h3>
            </div>
          </div>
          <div style={{ padding: "0", margin: "0" }}>
            <div className="new__img">
              <div className="heart__eye">
                <button className="heart__eye-btn">
                  <AiOutlineHeart />
                </button>
                <button className="heart__eye-btn">
                  <AiOutlineEye />
                </button>
              </div>
              <img src={mew4} alt="" />
              <div className="addto__cart">
                <button className="addtocart">Add to Cart</button>
              </div>
            </div>
            <div className="desc__price">
              <h4 style={{ padding: "0", margin: "0" }}>GREEN VITO</h4>
              <h3 style={{ padding: "0", margin: "0" }}> $760</h3>
            </div>
          </div>
          <div style={{ padding: "0", margin: "0" }}>
            <div className="new__img">
              <div className="heart__eye">
                <button className="heart__eye-btn">
                  <AiOutlineHeart />
                </button>
                <button className="heart__eye-btn">
                  <AiOutlineEye />
                </button>
              </div>
              <img src={mew5} alt="" />
              <div className="addto__cart">
                <button className="addtocart">Add to Cart</button>
              </div>
            </div>
            <div className="desc__price">
              <h4 style={{ padding: "0", margin: "0" }}>GREEN VITO</h4>
              <h3 style={{ padding: "0", margin: "0" }}> $760</h3>
            </div>
          </div>
          <div style={{ padding: "0", margin: "0" }}>
            <div className="new__img">
              <div className="heart__eye">
                <button className="heart__eye-btn">
                  <AiOutlineHeart />
                </button>
                <button className="heart__eye-btn">
                  <AiOutlineEye />
                </button>
              </div>
              <img src={mew6} alt="" />
              <div className="addto__cart">
                <button className="addtocart">Add to Cart</button>
              </div>
            </div>
            <div className="desc__price">
              <h4 style={{ padding: "0", margin: "0" }}>GREEN VITO</h4>
              <h3 style={{ padding: "0", margin: "0" }}> $760</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newarrivals;
