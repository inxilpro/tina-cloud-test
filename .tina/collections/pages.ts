import contentBlockSchema from "../blocks/content";

const pagesCollection = {
	label: "Pages",
	name: "pages",
	path: "content/pages",
	fields: [
		{
			type: "string",
			label: "Title",
			name: "title",
		},
		{
			type: "object",
			label: "Sections",
			name: "sections",
			list: true,
			templates: [
				contentBlockSchema
			],
		},
	],
};

export default pagesCollection;
