export default {
  name: "member",
  title: "Member",
  type: "document",
  fields: [
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      description: "e.g. Sanojan",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subcom",
      description: "e.g. software",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
