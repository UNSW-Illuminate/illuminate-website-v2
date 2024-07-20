import React, { useState } from "react";
import "../generalStyles.scss";
import * as styles from "./styles/team.module.scss";
import departments from "./department_data";

const Departments = () => {
  const [mouseHover, setMouseHover] = useState(false);
  const handleMouseEnter = () => {
    setMouseHover(true);
  };

  const handleMouseLeave = () => {
    setMouseHover(false);
  };

  return (
    <div className={styles.departmentsContainer}>
      <div className={styles.heading}>Our Departments</div>
      <div className={styles.departmentContainer}>
        {departments.map((department) => (
          <div
            className={styles.departmentBox}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={department.img} className={styles.departmentImage} />
            <div className={styles.departmentTextNoHover}>
              {!mouseHover && (
                <div className={styles.departmentHeading}>
                  {department.name}
                </div>
              )}
            </div>
            <div className={styles.departmentTextHover}>
              {mouseHover && (
                <div className={styles.departmentHoverBox}>
                  <div className={styles.departmentHeadingHover}>
                    {department.name}
                  </div>
                  <div className={styles.departmentTextHover}>
                    {department.description}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
