import React from "react";
import { motion } from "framer-motion";

import PhotoDisplayCard from "./PhotoDisplayCard";
import DepartmentDisplayCard from "./DepartmentDisplayCard";
import {teamData, depData} from "./data";
import "../generalStyles.scss";
import * as styles from "./styles/team.module.scss";
import teamBanner from '../../images/team/ourTeam.png'


const TeamPhotos = () => {
  const [selected, setSelected] = React.useState("Executive");
  const [open, setOpen] = React.useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  return (

    <div className={styles.wrapper}>
      <motion.h1
        className="pageHeading"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >

        <div className={styles.ourTeamBanner}
             style={{
              backgroundImage: `url(${teamBanner})`,
              backgroundPosition: `center center`,
              backgroundRepeat: `no-repeat`,}}>
          Our Team
        </div>

      </motion.h1>

      <motion.h2
        className=""
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >

        <div className={styles.subTeamHeading}
            style={{backgroundImage: `url()`}}>
          Team Leads
        </div>
      </motion.h2>

              
      <div>
        {teamData?.Executive.map((person) => (
        <PhotoDisplayCard person={person}/>
        ))}
      </div>



      <motion.h2
        className=""
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className={`${styles.subTeamHeading} ${styles.technicalLeadsHeading}`}>
          Technical Leads
        </div>
      
      </motion.h2>

      <div  className={styles.teamPhotoContainer}>
          {teamData?.Design.map((person) => (
            <PhotoDisplayCard person={person}/>
            ))}
          {teamData?.Technical.map((person) => (
          <PhotoDisplayCard person={person}/>
        ))}
        </div>



      <motion.h2
        className=""
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className={styles.subTeamHeading}>
          Our Departments
        </div>
      </motion.h2>

      <div className={styles.DepDisplayContainer}>
        {depData?.departments.map((department) => (
        <DepartmentDisplayCard department={department}/>
        ))}
      </div>


      {/* <motion.div
        className={styles.container}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
      </motion.div> */}



    </div>

  );
};

export default TeamPhotos;

// const MobileYearSelector = ({ portfolios, selected, setSelected }) => {
//   return (
//     <Select.Root
//       defaultValue={selected}
//       onValueChange={(portfolio) => {
//         setSelected(portfolio);
//       }}
//     >
//       <Select.Trigger className={styles.mobileTrigger}>
//         <Select.Value value={selected} />
//         <Select.Icon>
//           <FiChevronDown />
//         </Select.Icon>
//       </Select.Trigger>

//       <Select.Portal>
//         <Select.Content>
//           <motion.div initial={{ y: -10 }} animate={{ y: 0 }}>
//             <Select.ScrollUpButton />
//             <Select.Viewport className={styles.mobileContent}>
//               {Object.keys(portfolios).map((portfolio) => (
//                 <Select.Item
//                   value={portfolio}
//                   key={portfolio}
//                   className={styles.mobileItem}
//                 >
//                   <Select.ItemText>{portfolio}</Select.ItemText>
//                   <Select.ItemIndicator>
//                     <FiCheck />
//                   </Select.ItemIndicator>
//                 </Select.Item>
//               ))}
//             </Select.Viewport>
//             <Select.ScrollDownButton />
//           </motion.div>
//         </Select.Content>
//       </Select.Portal>
//     </Select.Root>
//   );
// };
