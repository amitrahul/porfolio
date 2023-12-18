import React from "react";
import styles from "./NavBar.module.css";
import { HashLink as Link } from "react-router-hash-link";
const resumeLink =
  "https://drive.google.com/file/d/1qIuyiM2nr998X5ZoPFdvnBPZIt_sNYec/view";
const NavBar = () => {
  return (
    <div className={styles.navSection}>
      <nav className={styles.navWrapper}>
        <ul>
          <Link to="#info" smooth>
            <li> {"<Rahul />"}</li>
          </Link>
          <Link to="#project" smooth>
            <li>Projects</li>
          </Link>
          <Link to={resumeLink} target="_blank">
            <li>Resume</li>
          </Link>
          <Link to="#about" smooth>
            <li>About</li>
          </Link>
          <Link to="#skill" smooth>
            <li>Skills</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
