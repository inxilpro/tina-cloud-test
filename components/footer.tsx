import React from "react";
import type {GlobalFooter} from "../.tina/__generated__/types";

export default function Footer(props: GlobalFooter) {
	const {social, links} = props;
	return (
		<footer className="bg-gray-900 text-white flex-shrink-0">
			<div className="container py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
				<div className={`xl:flex justify-between`}>
					<div className={`space-y-8 sm:space-y-0 sm:flex sm:space-x-12`}>
						<div className={`flex-shrink-0 pr-12`}>
							<p className={`font-semibold mb-1`}>
								Company Name
							</p>
							<address className={`text-sm not-italic`}>
								Company Address<br />
								Philadelphia, PA 19103
							</address>
							<div className={`flex flex-col space-y-1 mt-3 text-sm`}>
								<div className={`flex items-center`}>
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
										<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
									</svg>
									(800) 555-5555
								</div>
								<div className={`flex items-center`}>
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round"
										      strokeLinejoin="round"
										      strokeWidth={2}
										      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
									info@us.com
								</div>
							</div>
						</div>
						
						<div className={`space-y-8 sm:space-y-0 sm:flex sm:space-x-12 sm:ml-auto`}>
							{ links.map(({ uuid, title, items }) => (
								<div key={ uuid }>
									<p className={`text-sm font-semibold opacity-60 tracking-wider uppercase`}>
										{ title }
									</p>
									<nav className="" aria-label="Solutions">
										{items.map(({ uuid, label, href }) => (
											<div key={uuid} className="pb-1">
												<a href={href} className="text-base text-white hover:text-yellow-500">
													{label}
												</a>
											</div>
										))}
									</nav>
								</div>
							))}
						</div>
					</div>
					
					<div className={`flex-shrink mt-6 xl:mt-0`}>
						<p className={`text-sm font-semibold opacity-60 tracking-wider uppercase`}>
							Subscribe to our newsletter
						</p>
						<p className="mt-1 text-base xl:max-w-sm">
							The latest news, articles, and resources, sent to your inbox weekly.
						</p>
						<form className="mt-4 sm:flex sm:max-w-sm">
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								type="email"
								name="email-address"
								id="email-address"
								autoComplete="email"
								required
								className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
								placeholder="Enter your email"
							/>
							<div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
								<button
									type="submit"
									className="w-full bg-yellow-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-500"
								>
									Subscribe
								</button>
							</div>
						</form>
					</div>
					
				</div>
				<div className={`flex flex-row-reverse justify-between items-center mt-6`}>
					<div className="mt-8 flex justify-center space-x-6">
						{Object.entries(social).map(([name, href]) => (
							<a key={name} href={href} className="text-white hover:text-yellow-500">
								<span className="sr-only">{name}</span>
								<SocialIcon name={name} className="h-6 w-6" aria-hidden="true" />
							</a>
						))}
					</div>
					<p className="mt-8 text-center text-sm">
						&copy; {new Date().getFullYear()} All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

function SocialIcon({name, ...props}) {
	switch (name) {
		case "twitter":
			return (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
				</svg>
			);
		
		case "instagram":
			return (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
						clipRule="evenodd"
					/>
				</svg>
			);
		
		case "facebook":
			return (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
						clipRule="evenodd"
					/>
				</svg>
			);
		
		default:
			return name;
	}
}
