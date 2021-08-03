const contentBlock = {
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
			type: "object",
			label: "Image",
			name: "image",
			fields: [
				{
					name: "src",
					label: "Image",
					type: "image",
				},
				{
					name: "alt",
					label: "Assistive Text",
					type: "string",
				},
			],
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

export default contentBlock;
