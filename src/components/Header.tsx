import { CtaButton } from '@/components/CtaButton';
import { es } from '@/i18n/es';
import { useEffect, useState } from 'react';

const { nav } = es;

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [pastThreshold, setPastThreshold] = useState(false);

	useEffect(() => {
		const onScroll = () => setPastThreshold(window.scrollY > window.innerHeight * 0.18);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
		return () => {
			document.documentElement.style.overflow = '';
		};
	}, [menuOpen]);

	return (
		<>
			<header className="fixed inset-x-0 top-0 z-40 border-b border-fog bg-porcelain">
				<div className="container flex h-16 items-center justify-between">
					<a href="/" className="flex items-center gap-2.5 font-display text-[0.95rem] font-bold tracking-tight text-carbon">
						<img src="/images/logo-mark.svg" alt="" width={26} height={26} className="shrink-0" />
						<span>{nav.name}</span>
					</a>

					<nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
						{nav.links.map((link) => (
							<a key={link.href} href={link.href} className="eyebrow transition-colors hover:text-blueprint">
								{link.label}
							</a>
						))}
					</nav>

					<div className="hidden md:block">
						<CtaButton intent="other">{nav.cta}</CtaButton>
					</div>

					<button
						type="button"
						aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
						aria-expanded={menuOpen}
						onClick={() => setMenuOpen((open) => !open)}
						className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
					>
						<span
							className={`h-px w-6 bg-carbon transition-transform duration-200 ${menuOpen ? 'translate-y-[3.5px] rotate-45' : ''}`}
						/>
						<span
							className={`h-px w-6 bg-carbon transition-transform duration-200 ${menuOpen ? '-rotate-45' : ''}`}
						/>
					</button>
				</div>
			</header>

			{menuOpen && (
				<div className="fixed inset-0 top-16 z-30 bg-porcelain md:hidden">
					<nav aria-label="Principal" className="container flex flex-col gap-1 pt-8">
						{nav.links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setMenuOpen(false)}
								className="eyebrow border-b border-fog py-4 text-base"
							>
								{link.label}
							</a>
						))}
						<div className="pt-8">
							<CtaButton intent="other" onClick={() => setMenuOpen(false)}>
								{nav.cta}
							</CtaButton>
						</div>
					</nav>
				</div>
			)}

			{/* Discreet mobile CTA bar — appears once the visitor has left the hero (guia_website.md §10). */}
			<div
				className={`tech-frame-dark fixed inset-x-0 bottom-0 z-40 border-t bg-carbon transition-transform duration-300 md:hidden ${
					pastThreshold && !menuOpen ? 'translate-y-0' : 'translate-y-full'
				}`}
			>
				<CtaButton intent="other" className="w-full justify-center rounded-none py-4">
					{nav.cta}
				</CtaButton>
			</div>
		</>
	);
}
