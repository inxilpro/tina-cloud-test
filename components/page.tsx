import React from "react";
import type {PagesDocument} from "../.tina/__generated__/types";

export default function Page(props: PagesDocument) {
	return (
		<div className="relative py-16 bg-white overflow-hidden">
			<div className="relative px-4 sm:px-6 lg:px-8">
				
				<h1 className="my-12 text-4xl max-w-prose font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
					{props.data.title}
				</h1>
				
				<div className="text-xl prose-xl max-w-prose">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
						occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
					
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
						occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			
			</div>
		</div>
	)
}
