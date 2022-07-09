export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      description: "e.g. Celestial Pancake",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      description: "I recommend autogenerating this via the 'Generate' button",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
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
      name: "location",
      title: "Location",
      type: "string",
      description: "e.g. Vivid",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "materials",
      title: "Materials",
      description: "e.g. LED lights",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "creationDate",
      title: "Creation Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
  orderings: [
    {
      title: "Creation Date",
      name: "creationDate",
      by: [{ field: "creationDate", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      event: "event",
      creationDate: "creationDate",
      materials: "materials",
      mainImage: "mainImage",
    },
  },
};
