const contentBlockSchema = {
	name: "content",
	label: "Content",
	ui: {
		defaultItem: {
			body: "Enter some content here!",
		},
	},
	fields: [
		{
			type: "string",
			ui: {
				component: "markdown",
			},
			label: "Body",
			name: "body",
		},
		{
			type: "string",
			label: "Color",
			name: "color",
			options: [
				{label: "White", value: "white"},
				{label: "Brown", value: "brown"},
				{label: "Yellow", value: "yellow"},
			],
		},
	],
};

export default contentBlockSchema;
