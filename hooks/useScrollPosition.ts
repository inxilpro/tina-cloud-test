import {useEffect, useState} from "react";

export const TOP = 'top';
export const BOTTOM = 'bottom';

export default function useScrollPosition(callback: Function) {
	const [lastOffset, setLastOffset] = useState(null);
	
	useEffect(() => {
		let updating = false;
		
		const update = () => {
			const offset = window.pageYOffset;
			
			// Short circuit if nothing has changed
			if (offset === lastOffset) {
				updating = false;
				return;
			}
			
			if (0 >= offset) {
				callback(offset, TOP);
			} else if ((window.innerHeight + offset) >= document.body.offsetHeight) {
				callback(offset, BOTTOM);
			} else {
				callback(offset, null);
			}
			
			setLastOffset(offset);
			updating = false;
		};
		
		const onScroll = () => {
			if (!updating) {
				updating = true;
				window.requestAnimationFrame(update);
			}
		};
		
		window.addEventListener("scroll", onScroll);
		
		return () => window.removeEventListener("scroll", onScroll);
	}, [callback]);
};
