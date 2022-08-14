import React, { useState, useEffect } from "react";
import sanityClient from "../../sanityClient.js";
import * as styles from "./styles/articlePage.module.scss";
import { wrapper } from "./styles/projects.module.scss";
import { motion } from "framer-motion";
import Template from "../Template/template";
import YearSelector from "./YearSelector.js";
import { graphql, navigate } from "gatsby";
import ImageGallery from "react-image-gallery";

const ArticlePage = ({ data }) => {
  const article = data.allSanityProject.edges[0].node;
  console.log(article);
  const photos = article.gallery.map((photo) => {
    return {
      original: photo.asset.publicUrl,
      thumbnail: photo.asset.publicUrl,
      originalHeight: "400px",
      thumbnailHeight: "70x",
    };
  });
  return (
    <Template currentPage="projects">
      <div className={wrapper}>
        <YearSelector
          selectedYear="2018"
          setSelectedYear={(year) => navigate("/projects", { state: { year } })}
        />
        {article && (
          <div>
            <motion.h2
              className={styles.heading}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {article.title}
            </motion.h2>
            <motion.div
              className={styles.body}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {article.body.map((paragraph) => (
                <div className={styles.paragraph}>
                  {paragraph._rawChildren[0].text}
                </div>
              ))}
            </motion.div>
            <motion.div
              className={styles.galleryWrapper}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <ImageGallery
                styles={{ marginTop: "px" }}
                items={photos}
                autoPlay
                showFullscreenButton={false}
              />
            </motion.div>
          </div>
        )}
      </div>
    </Template>
  );
};

export default ArticlePage;

export const query = graphql`
  query ProjectDetails($slug: String!) {
    allSanityProject(filter: { slug: { current: { eq: $slug } } }) {
      edges {
        node {
          title
          slug {
            current
          }
          location
          creationDate
          materials
          body {
            _key
            _type
            style
            list
            _rawChildren
          }
          gallery {
            _key
            _type
            asset {
              publicUrl
            }
          }
        }
      }
    }
  }
`;
