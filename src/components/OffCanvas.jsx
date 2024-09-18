import { Link }  from "react-router-dom";
import Logo from "../assets/images/logo.png";

const OffCanvas = (isOpen, setIsOpen) => {
  return (
    <>
      <div
        className={"offcanvas-info" + (isOpen ? " offcanvas-info-active" : " ")}
      >
        <div className="offcanvas-info__inner">
          <div className="offcanvas-info__intro">
            <div className="offcanvas-info__logo">
              <Link to="/">
                {/* <Image src={logo} alt="Image" priority /> */}
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <h4>Intelligent Conversations Made Simple</h4>
          </div>
          <div className="offcanvas-info__content">
            <h5>Contact Us</h5>
            <ul>
              <li>
                <Link to="mailto:Aikeu@example.com">Aikeu@example.com</Link>
              </li>
              <li>
                <Link to="tel:1880-480-555-0103">+1 880 (480) 555-0103</Link>
              </li>
              <li>
                <Link
                  to="https://www.google.com/maps/place/Kentucky,+USA/@37.8172108,-87.087054,8z/data=!3m1!4b1!4m6!3m5!1s0x8842734c8b1953c9:0x771f6f4ec5ccdffc!8m2!3d37.8393332!4d-84.2700179!16zL20vMDQ5OHk?entry=ttu"
                  target="_blank"
                >
                  4517 Washington Ave. Manchester, Kentucky 39495
                </Link>
              </li>
            </ul>
          </div>
          <div className="offcanvas-info__form">
            <h5>Subscribe to newsletter</h5>
            <form action="#" method="post" autoComplete="off">
              <div className="subscribe-form">
                <input
                  type="email"
                  name="subscribe-newsletter"
                  id="subscribeNewsletter"
                  placeholder="Email"
                  required
                />
                <button
                  type="submit"
                  aria-label="subscribe newsletter"
                  title="subscribe newsletter"
                >
                  <i className="material-symbols-outlined">send</i>
                </button>
              </div>
            </form>
          </div>
          <div className="offcanvas-info__footer">
            <p className="tertiary-text">Follow Us :</p>
            <div className="social">
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                aria-label="share us on facebook"
                title="facebook"
              >
                <i className="bi bi-facebook"></i>
              </Link>
              <Link
                to="https://www.twitter.com/"
                target="_blank"
                aria-label="share us on twitter"
                title="twitter"
              >
                <i className="bi bi-twitter"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/"
                target="_blank"
                aria-label="share us on pinterest"
                title="linkedin"
              >
                <i className="bi bi-linkedin"></i>
              </Link>
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                aria-label="share us on instagram"
                title="instagram"
              >
                <i className="bi bi-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="close-offcanvas-info"
          aria-label="close offcanvas info"
          onClick={() => setIsOpen(false)}
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
      <div
        className={
          "offcanvas-info-backdrop " +
          (isOpen ? " offcanvas-info-backdrop-active" : " ")
        }
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
};

export default OffCanvas;
