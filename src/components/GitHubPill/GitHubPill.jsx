import React from "react";
import { FaGithub } from "react-icons/fa";
import styles from "./GitHubPill.module.css";
const GitHubPill = ({ pillText }) => {
  return (
    <button className={styles.pillWrapper}>
      <FaGithub size={30} />
      <p>{pillText}</p>
    </button>
  );
};

export default GitHubPill;
