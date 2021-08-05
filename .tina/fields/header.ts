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
					uuid: "",
					label: "Home",
					href: "/",
				},
			},
			fields: [
				{
					type: "string",
					label: "ID",
					name: "uuid",
					ui: {
						component: "uuid",
					}
				},
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
