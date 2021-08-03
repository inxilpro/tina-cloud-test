import { defineSchema } from "@tinacms/cli";

export default defineSchema({
  collections: [
    {
      label: "Global",
      name: "global",
      path: "content/global",
      fields: [
        {
          type: "object",
          label: "Header",
          name: "header",
          fields: [
            {
              type: "object",
              label: "Nav Links",
              name: "nav",
              list: true,
              ui: {
                defaultItem: {
                  href: "home",
                  label: "Home",
                },
              },
              fields: [
                {
                  type: "string",
                  label: "Label",
                  name: "label",
                },
                {
                  type: "string",
                  label: "Link",
                  name: "href",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          label: "Footer",
          name: "footer",
          fields: [
            {
              type: "object",
              label: "Footer Links",
              name: "nav",
              list: true,
              ui: {
                defaultItem: {
                  href: "/",
                  label: "Home",
                },
              },
              fields: [
                {
                  type: "string",
                  label: "Title",
                  name: "label",
                },
                {
                  type: "string",
                  label: "URL",
                  name: "href",
                },
              ],
            },
            {
              type: "object",
              label: "Social Links",
              name: "social",
              fields: [
                {
                  type: "string",
                  label: "Facebook",
                  name: "facebook",
                },
                {
                  type: "string",
                  label: "Twitter",
                  name: "twitter",
                },
                {
                  type: "string",
                  label: "Instagram",
                  name: "instagram",
                }
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Pages",
      name: "pages",
      path: "content/pages",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
      ],
    },
  ],
});
