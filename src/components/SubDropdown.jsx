import { Link, useLocation } from "react-router-dom";

export default function SubDropdown(subItem) {
  const location = useLocation();

  return (
    <li className="navbar__item navbar__item--has-children">
      <button
        id="dropdown menu"
        aria-label="dropdown menu"
        className="navbar__dropdown-label navbar__dropdown-label-sub"
      >
        {subItem.title}
      </button>
      <ul className="navbar__sub-menu navbar__sub-menu__nested">
        {subItem.subInSub.map((subInSubItem, index) => (
          <li key={index}>
            <Link
              to={subInSubItem.path}
              className={
                location.pathname === subInSubItem.path ? " active-sub" : ""
              }
            >
              {subInSubItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
