import React from "react";
import Link from "next/link";
import type {GlobalHeader} from "../.tina/__generated__/types";

export default function Header(props: GlobalHeader) {
	const {nav} = props;
	return (
		<header className="bg-white text-brown-800 flex-shrink-0 shadow-lg border-b border-brown-100 fixed w-full z-50">
			<nav className="container px-4 sm:px-6 lg:px-8" aria-label="Top">
				<div className="w-full py-6 flex items-center justify-between border-b border-brown-100 lg:border-none">
					<div className="flex items-center">
						<Link href="/">
							<a>
							<span className="sr-only">
								Workflow
							</span>
								<img
									className="h-10 w-auto"
									src="https://tailwindui.com/img/logos/workflow-mark.svg?color=black"
									alt=""
								/>
							</a>
						</Link>
						<div className="hidden ml-10 space-x-8 lg:block">
							{nav.map((link) => (
								<a key={link.label} href={link.href} className="text-base font-medium transform transition-transform hover:opacity-80 hover:-translate-y-2">
									{link.label}
								</a>
							))}
						</div>
					</div>
					<div className="ml-10 space-x-4">
						<a
							href="#"
							className="inline-block bg-yellow-500 py-2 px-4 border border-transparent rounded-md text-base font-medium hover:bg-opacity-75"
						>
							Get in touch
						</a>
						<a
							href="#"
							className="inline-flex items-center justify-center py-2 px-4 border border-transparent rounded-md text-base font-medium text-orange-600 hover:bg-yellow-50 whitespace-nowrap"
						>
							Log In
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>
					</div>
				</div>
				<div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
					{nav.map((link) => (
						<a key={link.label} href={link.href} className="text-base font-medium hover:text-indigo-50">
							{link.label}
						</a>
					))}
				</div>
			</nav>
		</header>
	)
}
