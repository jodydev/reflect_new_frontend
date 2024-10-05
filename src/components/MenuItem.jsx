import { Link, useLocation } from "react-router-dom";
import SubDropdown from "./SubDropdown";

export default function MenuItem({ title, path, submenu }) {
  const location = useLocation();

  return (
    <li className={`navbar__item ${submenu ? "navbar__item--has-children" : ""} nav-fade`}>
      {submenu ? (
        <>
          <button
            id="dropdown menu"
            aria-label="dropdown menu"
            className="navbar__dropdown-label"
          >
            {title}
          </button>
          <ul className="navbar__sub-menu">
            {submenu.map((subItem) => (
              <li key={subItem.title}>
                {subItem.subInSub ? (
                  <SubDropdown subItem={subItem} />
                ) : (
                  <Link
                    to={subItem.path}
                    className={location.pathname === subItem.path ? "active-sub" : ""}
                  >
                    {subItem.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link
          to={path}
          className={location.pathname === path ? "active-it" : ""}
        >
          {title}
        </Link>
      )}
    </li>
  );
}
