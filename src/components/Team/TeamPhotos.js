import React from "react";
import { motion } from "framer-motion";

import PhotoDisplayCard from "./PhotoDisplayCard";
import DepartmentDisplayCard from "./DepartmentDisplayCard";

import {teamData, depData} from "./data";
import "../generalStyles.scss";
import * as styles from "./styles/team.module.scss";
import teamBanner from '../../images/team/ourTeam.png'


const TeamPhotos = () => {

  return (

    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

      <div className={styles.wrapper}>

        <div 
          className={`${styles.ourTeamBanner} pageHeading`}
          style={{
            backgroundImage: `url(${teamBanner})`,
            backgroundPosition: `center center`,
            backgroundRepeat: `no-repeat`,
            }}
        >
          Our Team
        </div>

        <div 
          className={styles.subTeamHeading}
        >
          Team Leads
        </div>

        {/* Create team lead photo cards */}
        <div>
          {teamData?.Executive.map((person) => (
          <PhotoDisplayCard key={person.name} person={person}/>
          ))}
        </div>


        <div className={`${styles.subTeamHeading} ${styles.technicalLeadsHeading}`}>
          Technical Leads
        </div>

        {/* Create technical lead photo cards */}
        <div  
          className={styles.teamPhotoContainer}
        >
          {teamData?.Design.map((person) => (
            <PhotoDisplayCard key={person.name} person={person}/>
          ))}
          {teamData?.Technical.map((person) => (
            <PhotoDisplayCard key={person.name} person={person}/>
          ))}
        </div>

        <div 
          className={styles.subTeamHeading}>
          Our Departments
        </div>

        <div 
          className={styles.DepDisplayContainer}>
          {/* Create department information cards */}
          {depData?.departments.map((department) => (
          <DepartmentDisplayCard key={department.depName} department={department}/>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default TeamPhotos;
