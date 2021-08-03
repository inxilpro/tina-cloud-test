const footerField = {
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
			label: "Footer Sections",
			name: "categories",
			fields: [
				{
					type: "object",
					label: "Solutions",
					name: "solutions",
					list: true,
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
					label: "Support",
					name: "support",
					list: true,
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
