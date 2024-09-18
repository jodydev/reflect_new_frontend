import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import SubDropdown from "./SubDropdown";

export default function MenuItem(item) {
  const location = useLocation();

      return item.submenu ? (
        <li className="navbar__item navbar__item--has-children nav-fade">
          <button aria-label="dropdown menu" className="navbar__dropdown-label">
            {item.title}
          </button>
          <ul className="navbar__sub-menu">
            {item.submenu.map((subItem, index) => (
              <Fragment key={index}>
                {subItem.subInSub ? (
                  <SubDropdown subItem={subItem} key={index} />
                ) : (
                  <li key={index}>
                    <Link
                      to={subItem.path}
                      className={location.pathname === subItem.path ? " active-sub" : ""}
                    >
                      {subItem.title}
                    </Link>
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        </li>
      ) : (
        <li className="navbar__item nav-fade">
          <Link
            to={item.path}
            className={location.pathname === item.path ? " active-it" : ""}
          >
            {item.title}
          </Link>
        </li>
      );
    };
