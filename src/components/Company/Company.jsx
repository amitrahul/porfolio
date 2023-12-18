import React from "react";
import styles from "./Company.module.css";
const Company = ({ companyLogo, workingPeriod, role }) => {
  return (
    <div className={styles.company}>
      <img src={companyLogo} alt="company" className={styles.companyLogo} />
      <div className={styles.companyInfo}>
        <div className={styles.designation}>{role}</div>
        <div className={styles.workingPeriod}>{workingPeriod}</div>
      </div>
    </div>
  );
};

export default Company;
