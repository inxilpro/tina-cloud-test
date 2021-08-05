const footerField = {
	type: "object",
	label: "Footer",
	name: "footer",
	fields: [
		{
			type: "object",
			label: "Links",
			name: "links",
			list: true,
			ui: {
				defaultItem: {
					title: "Footer Section",
					items: [{label: "Home", href: "/"}]
				},
			},
			fields: [
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
					fields: [
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
