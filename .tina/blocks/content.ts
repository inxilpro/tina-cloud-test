const contentBlock = {
	name: "content",
	label: "Content",
	ui: {
		defaultItem: {
			uuid: "",
			body: "Enter some content here!",
			color: "white",
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
