import {useEffect, useState} from "react";

export const SCROLL_UP = `up`;

export const SCROLL_DOWN = `down`;

const defaultConfig = {
	threshold: 50,
};

export default function useScrollDirection(config = defaultConfig) {
	const {threshold} = config;
	const [direction, setDirection] = useState(null);
	
	useEffect(() => {
		let lastOffset = window.pageYOffset;
		let updating = false;
		
		const update = () => {
			const offset = window.pageYOffset;
			
			if (Math.abs(offset - lastOffset) < threshold) {
				updating = false;
				return;
			}
			
			setDirection(offset > lastOffset ? SCROLL_DOWN : SCROLL_UP);
			lastOffset = offset > 0 ? offset : 0;
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
	}, [threshold]);
	
	return direction;
};
