import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarData from '../../data/navbar-data';
import Logo from '../../assets/images/logo_black.webp'; 
import MenuItem from '../MenuItem';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {

  useEffect(() => {
    const handleResizeHeader = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResizeHeader);
    return () => {
      window.removeEventListener('resize', handleResizeHeader);
    };
  }, [setIsMenuOpen]);

  let logoSrc = Logo;

  useEffect(() => {
    const parentItems = document.querySelectorAll('.navbar__item--has-children');

    parentItems.forEach((parentItem) => {
      const childItems = parentItem.querySelectorAll('.active-sub');

      if (childItems.length > 0) {
        parentItem.classList.add('active-parent');
      }
    });
  }, []);

  return (
    <Fragment>
      <div
        className={`mobile-menu d-block d-xl-none ${isMenuOpen ? 'show-menu' : ''}`}
      >
        <nav className="mobile-menu__wrapper">
          <div className="mobile-menu__header nav-fade">
            <div className="logo">
              <Link to="/" aria-label="home page" title="logo">
                <img src={logoSrc} alt="Logo" />
              </Link>
            </div>
            <button
              id='close-mobile-menu'
              aria-label="close mobile menu"
              className="close-mobile-menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div className="mobile-menu__list">
            <ul className="navbar__list">
              {NavbarData.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </ul>
          </div>
          <div className="mobile-menu__social social nav-fade">
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
              aria-label="share us on linkedin"
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
        </nav>
      </div>
      <div
        className={`mobile-menu__backdrop ${isMenuOpen ? 'mobile-menu__backdrop-active' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </Fragment>
  );
};

export default MobileMenu;
