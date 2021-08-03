const headerField = {
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
};

export default headerField;
