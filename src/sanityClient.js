import { createClient } from "@sanity/client";

export default createClient({
  projectId: "xx4hw8hu",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01", // Use a specific API version
});
