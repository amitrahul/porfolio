import React from "react";
import styles from "./Experiences.module.css";
import Crio from "../../assets/crio.png";
import SixSigma from "../../assets/sixsigma.png";
import Company from "../Company/Company";
const Experiences = () => {
  return (
    <div className={styles.experienceWrapper}>
      <header className={styles.experience}>Experiences</header>
      <div className={styles.companies}>
        <Company
          companyLogo={Crio}
          role={"Software Developer Intern"}
          workingPeriod={"Nov 2022 - Present"}
        />
        <Company
          companyLogo={SixSigma}
          role={"Software Test Engineer"}
          workingPeriod={"Jan 2022 - June 2022"}
        />
      </div>
    </div>
  );
};

export default Experiences;
