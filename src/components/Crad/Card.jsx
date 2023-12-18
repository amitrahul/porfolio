import React from "react";
import styles from "./Card.module.css";
import { FaGithub } from "react-icons/fa";
import GitHubPill from "../GitHubPill/GitHubPill";
import { Link } from "react-router-dom";
const Card = ({ project, js, css, html, date, repoName }) => {
  const repo = "https://github.com/amitrahul/" + repoName;
  return (
    <div className={styles.cardWrapper}>
      <header className={styles.projectName}>{project}</header>
      <div className={styles.gitHubWrapper}>
        <Link to={repo} target="_blank">
          <GitHubPill pillText="Clone Project" />
        </Link>
        <Link to={repo} target="_blank">
          <GitHubPill pillText="Repo" />
        </Link>
      </div>
      <div className={styles.lineBreak}></div>
      <div className={styles.language}>
        <p> Languages:</p>
        <p className={styles.lan}>JavaScript : {js}</p>
        <p className={styles.lan}>CSS : {css}</p>
        <p className={styles.lan}>HTML : {html}</p>
      </div>
      <div className={styles.cardDateWrapper}>
        <div className={styles.star}>
          <Link to={repo} target="_blank">
            <FaGithub size={30} />
            <p>Stars</p>
          </Link>
        </div>
        <p className={styles.date}>Updated on {date}</p>
      </div>
    </div>
  );
};

export default Card;
