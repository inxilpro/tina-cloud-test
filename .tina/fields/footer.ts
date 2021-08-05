const footerField = {
	type: "object",
	label: "Footer",
	name: "footer",
	fields: [
		{
			type: "object",
			label: "Sections",
			name: "links",
			list: true,
			ui: {
				defaultItem: {
					uuid: "",
					title: "Footer Section",
					items: [{uuid: "", label: "Home", href: "/"}]
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
					label: "Section Title",
					name: "title",
				},
				{
					type: "object",
					label: "Links",
					name: "items",
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
							label: "Link Title",
							name: "label",
						},
						{
							type: "string",
							label: "Link URL",
							name: "href",
						},
					],
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
};

export default footerField;
