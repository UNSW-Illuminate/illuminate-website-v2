import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
});
