import React, { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import * as styles from "./styles/team.module.scss";


const DepartmentDisplayCard = ({department}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (

        <motion.div
            className={styles.DepDisplayCard}
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{
                scale: 1.05,
                transition: {duration: 0.3},
 
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            layout 

            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${department.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}}
        >
            <motion.div>
                <motion.h2  
                    key={department.depName}
                    className={styles.DepHeading}
                    initial={{y: -20}}
                    animate={{ y: isHovered ? -30 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                    {department.depName}
                </motion.h2>

                <AnimatePresence mode="wait"> 
                    {isHovered && (
                        <motion.p
                            key={department.depDescription}
                            layout="position" 
                            className={styles.DepDescription}>
                            {department.depDescription}
                        </motion.p>
                    )}

                </AnimatePresence>
            </motion.div>
        </motion.div>

    )
}

export default DepartmentDisplayCard;