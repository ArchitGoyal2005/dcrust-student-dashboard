import { NavLink, useLocation } from "react-router-dom";
import { logo } from "../static";
import { useTheme } from "../Contexts/ThemeContext";
import { useClerk } from "@clerk/clerk-react";

function Header() {
  const { toggleSideMenu, headerActive, toggleTheme, darkTheme } = useTheme();
  const location = useLocation();
  const { signOut } = useClerk();

  return (
    <header className={headerActive ? "active" : ""}>
      <div className="logo" title="University Management System">
        <img src={logo} alt="Logo" />
        <h2>DCRUST</h2>
      </div>
      <div className="navbar">
        <NavLink to="/">
          <span className="material-icons-sharp">home</span>
          <h3>Home</h3>
        </NavLink>
        <NavLink to="/timetable">
          <span className="material-icons-sharp">today</span>
          <h3>Time Table</h3>
        </NavLink>
        <NavLink to="/exam">
          <span className="material-icons-sharp">grid_view</span>
          <h3>Examination</h3>
        </NavLink>
        {/* <NavLink to="/change-password">
          <span className="material-icons-sharp">password</span>
          <h3>Change Password</h3>
        </NavLink> */}
        <button
          onClick={() => signOut({ redirectUrl: "/login" })}
          style={{
            border: "none",
            backgroundColor: "inherit",
            display: "flex",
          }}
        >
          <span className="material-icons-sharp">logout</span>
        </button>
      </div>
      {location.pathname === "/" && (
        <div id="profile-btn" onClick={toggleSideMenu}>
          <span className="material-icons-sharp">person</span>
        </div>
      )}
      <div className="theme-toggler" onClick={toggleTheme}>
        <span className={`material-icons-sharp ${darkTheme ? "" : "active"}`}>
          light_mode
        </span>
        <span className={`material-icons-sharp ${darkTheme ? "active" : ""}`}>
          dark_mode
        </span>
      </div>
    </header>
  );
}

export default Header;
