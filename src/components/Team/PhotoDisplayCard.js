import React from "react";
import { motion } from "framer-motion";
import * as Avatar from "@radix-ui/react-avatar";

import * as styles from "./styles/team.module.scss";


const PhotoDisplayCard = ({person}) => {

    return (

        <motion.div
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={person.name}
            className={styles.headshotWrapper}
        >

            <Avatar.Root className={styles.headshotRoot}>
                <Avatar.Image src={person.img} className={styles.headshot} />
                <Avatar.Fallback>
                    <div className={styles.skeletonHeadshot} />
                </Avatar.Fallback>
            </Avatar.Root>
            
            <div className={styles.headshotDescriptor}>
                <h2 className={styles.memberName}>{person.name}</h2>
                <h3 className={styles.role}>{person.role}</h3>
            </div>

        </motion.div>

    )
}

export default PhotoDisplayCard;