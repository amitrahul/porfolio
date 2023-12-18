import React from "react";
import styles from "./SkillBar.module.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const SkillBar = ({ skill, bar }) => {
  return (
    <>
      <div className={styles.skill}>
        <div className={styles.skillName}>{skill}</div>
        <ProgressBar now={bar} />
      </div>
    </>
  );
};

export default SkillBar;
