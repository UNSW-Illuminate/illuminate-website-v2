import React from "react";
import synergy from "../../images/projects/synergy.jpg";
import cube from "../../images/projects/cube.jpg";
import crystallise from "../../images/projects/crystallise.jpeg";
import laneway from "../../images/projects/laneway.jpg";
import pancake from "../../images/projects/pancake.jpeg";
import heartstrings from "../../images/projects/heartstrings.jpeg";
import "react-alice-carousel/lib/alice-carousel.css";
import * as styles from "./styles/MobileList.module.scss";
import { motion } from "framer-motion";
import * as Avatar from "@radix-ui/react-avatar";
import { Link } from "gatsby";

const MobileList = () => {
  const projects = [
    { img: heartstrings, link: "projects/heartstrings", name: "Heartstrings" },
    { img: laneway, link: "projects/laneway", name: "Laneway" },
    {
      img: pancake,
      link: "projects/celestial-pancake",
      name: "Celestial Pancake",
    },
    { img: synergy, link: "projects/synergy", name: "Synergy" },
    { img: crystallise, link: "projects/crystallise", name: "Crystallise" },
    { img: cube, link: "projects/cube", name: "Mondrian Cube" },
  ];

  return (
    <div id="latestProjects" className={styles.wrapper}>
      {projects.map((project) => (
        <Avatar.Root key={project}>
          <Link to={project.link}>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              style={{ position: "relative" }}
              whileTap={{ x: 20 }}
            >
              <Avatar.Image
                src={project.img}
                style={{ marginBottom: "10px" }}
              />
              <div className={styles.caption}>{project.name}</div>
            </motion.div>
          </Link>

          <Avatar.Fallback>
            <div className={styles.skeletonPhoto} />
          </Avatar.Fallback>
        </Avatar.Root>
      ))}
    </div>
  );
};

export default MobileList;
