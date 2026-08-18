import { useEffect, useRef, useState } from 'react';

/** Fires once when the element enters the viewport; stays true afterward (no re-hide on scroll-out). */
export function useReveal<T extends HTMLElement>(rootMargin = '0px 0px -10% 0px') {
	const ref = useRef<T | null>(null);
	const [revealed, setRevealed] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			setRevealed(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setRevealed(true);
					observer.disconnect();
				}
			},
			{ rootMargin, threshold: 0.15 },
		);
		observer.observe(node);
		return () => observer.disconnect();
	}, [rootMargin]);

	return { ref, revealed };
}
