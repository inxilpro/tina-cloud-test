import React from "react";
import Markdown from "react-markdown";
import type {PagesDocument} from "../.tina/__generated__/types";

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
				<div className={`py-8 px-4 sm:px-0 ${'yellow' === section.color ? 'bg-yellow-500 text-white font-semibold prose-2xl' : 'prose-lg'}`}>
					<div className={`container`} key={i}>
						<div className={`max-w-prose`}>
							<Markdown>{section.body}</Markdown>
						</div>
					</div>
				</div>
			))}
			
			{/*<div className={`container`}>*/}
			{/*	<pre*/}
			{/*		className={`bg-gray-600 rounded p-4 text-white font-mono my-6`}*/}
			{/*		children={JSON.stringify(props, null, 2)}*/}
			{/*	/>*/}
			{/*</div>*/}
		
		</div>
	)
}
