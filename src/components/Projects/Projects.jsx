import React, { useState } from "react";
import styles from "./Projects.module.css";
import Card from "../Crad/Card";
import { projectData } from "../../utils/projectData";
const Projects = () => {
  const [listOfProjects, setListOfProjects] = useState(projectData);
  console.log(projectData);
  return (
    <div className={styles.projectWrapper} id="project">
      <header className={styles.ProjectsHeader}>Recent Projects</header>
      <div className={styles.cardList}>
        {listOfProjects.map((data) => {
          return (
            <Card
              key={data.id}
              project={data.project}
              js={data.js}
              html={data.html}
              css={data.css}
              date={data.date}
              repoName={data.repoName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
