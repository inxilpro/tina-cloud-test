import headerField from "../fields/header";
import footerField from "../fields/footer";

const globalCollection = {
	label: "Global",
	name: "global",
	path: "content/global",
	fields: [
		headerField,
		footerField,
	],
};

export default globalCollection;
