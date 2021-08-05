import contentBlock from "../blocks/content";

const pagesCollection = {
	label: "Page",
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
				contentBlock
			],
		},
	],
};

export default pagesCollection;
