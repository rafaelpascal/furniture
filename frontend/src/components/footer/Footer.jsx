import "./footer.css";
import { mainLogo } from "../../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container__container">
      <div className="footer__container">
        <div className="footer__Name">
          <img src={mainLogo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <div className="footer__menu">
          <ul>
            <li>
              <Link>ABOUT US</Link>
            </li>
            <li>
              <Link>CONTACT US</Link>
            </li>
            <li>
              <Link>GET IN TOUCH</Link>
            </li>
            <li>
              <Link>FAQ PAGE</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>MAIN HOME </Link>
            </li>
            <li>
              <Link>ABOUT ME</Link>
            </li>
            <li>
              <Link>ABOUT US</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>FACEBOOK</Link>
            </li>
            <li>
              <Link>INSTAGRAM </Link>
            </li>
            <li>
              <Link>TWITTER</Link>
            </li>
            <li>
              <Link>LINKEDIN</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
