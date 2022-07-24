import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "xx4hw8hu",
  dataset: "production",
  useCdn: true,
});
