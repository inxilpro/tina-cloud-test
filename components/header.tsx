import React, {Fragment, useEffect, useRef, useState} from "react";
import Link from "next/link";
import {Popover, Transition} from '@headlessui/react'
import type {GlobalHeader} from "../.tina/__generated__/types";

export default function Header(props: GlobalHeader) {
	return <Popover
		children={({open}) => <PopoverHeader open={open} headerProps={props} />}
	/>;
}

function PopoverHeader({open, headerProps}) {
	const headerRef = useRef(null);
	const [headerHeight, setHeaderHeight] = useState(0);
	
	useEffect(() => {
		setHeaderHeight(headerRef.current.offsetHeight ?? 0);
	}, [open, headerRef.current]);
	
	const {nav} = headerProps;
	
	return (
		<>
			<header ref={headerRef} className="bg-white text-brown-800 flex-shrink-0 shadow-lg border-b border-brown-100 fixed w-full z-10">
				<nav className="container px-4 sm:px-6 lg:px-8" aria-label="Top">
					<div className="w-full py-6 flex items-center justify-between">
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
						<div className="hidden lg:block ml-10 space-x-4">
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
						<div className="lg:hidden ml-10">
							<Popover.Button className={`inline-block`}>
								{open ? (
									<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
									</svg>
								) : (
									<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
									</svg>
								)}
							</Popover.Button>
						</div>
					</div>
				</nav>
			</header>
			<Transition
				show={open}
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-12 scale-110"
				enterTo="opacity-100 translate-y-0 scale-100"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0 scale-100"
				leaveTo="opacity-0 translate-y-12 scale-110"
			>
				<Popover.Panel
					static
					className="fixed z-50 right-0 bottom-0 left-0 transform"
					style={{top: `${headerHeight - 7}px`}}
				>
					<div
						className="absolute inset-0 p-8 bg-brown-600 border border-brown-700 text-white flex flex-col justify-around items-center rounded-t-lg transform shadow-menu"
						aria-hidden="true"
					>
						{nav.map((link) => (
							<a key={link.label} href={link.href} className="text-4xl font-medium transform transition-transform hover:opacity-80 hover:-translate-y-2">
								{link.label}
							</a>
						))}
					</div>
				</Popover.Panel>
			</Transition>
		</>
	)
}
