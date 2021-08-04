import React from "react";
import Markdown from "react-markdown";
// import { useForm } from "tinacms";
// import { InlineForm } from "react-tinacms-inline";
import type {PagesDocument, PagesSections} from "../.tina/__generated__/types";

export default function Page(props: PagesDocument) {
	return (
		<div className="relative overflow-hidden">
			
			<div className={`bg-brown-400 py-12 pt-36 text-white px-4 sm:px-0`}>
				<div className={`container`}>
					<h1 className="text-4xl max-w-prose font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
						{props.data.title}
					</h1>
				</div>
			</div>
			
			{props.data.sections.map((section, i) => (
				<PagesSection key={i} {...section} />
			))}
			
			<div className={`container`}>
				<pre
					className={`bg-gray-600 rounded p-4 text-white font-mono my-6`}
					children={JSON.stringify(props, null, 2)}
				/>
			</div>
		
		</div>
	)
}

function PagesSection(props: PagesSections)
{
	return (
		<div className={`py-8 px-4 sm:px-0 ${'yellow' === props.color ? 'bg-yellow-500 text-white font-semibold' : ''}`}>
			<div className={`container flex`}>
				<div className={`max-w-prose prose-2xl`}>
					<Markdown>{props.body}</Markdown>
				</div>
				{!!props.image?.src && (
					<img className={`max-w-[33%]`} src={props.image.src} alt={props.image.alt} />
				)}
			</div>
		</div>
	);
}
