import React from "react";
import styles from "./Skill.module.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillBar from "../SkillBar/SkillBar";
import { skillSet, softskillSet } from "../../utils/SkillSet";
const Skills = () => {
  return (
    <div className={styles.skillWrapper} id="skill">
      <header className={styles.skillHeader}>Skills</header>
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="home" title="Technical Skills">
          <div className={styles.skillBarWrapper}>
            {skillSet.map((skil) => {
              return (
                <SkillBar key={skil.id} skill={skil.skill} bar={skil.bar} />
              );
            })}
          </div>
        </Tab>
        <Tab eventKey="profile" title="Soft Skills">
          <div className={styles.skillBarWrapper}>
            {softskillSet.map((skil) => {
              return (
                <SkillBar key={skil.id} skill={skil.skill} bar={skil.bar} />
              );
            })}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Skills;
