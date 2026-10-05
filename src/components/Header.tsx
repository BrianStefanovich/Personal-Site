import { CtaButton } from '@/components/CtaButton';
import { Logo } from '@/components/Logo';
import { es } from '@/i18n/es';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const { nav } = es;
const ctaLabel = es.home.hero.cta;
const sectionIds = nav.links.map((link) => link.href.slice(1));

/** Tracks which anchored section sits under the header, so the nav can mark it. */
function useActiveSection() {
	const [active, setActive] = useState<string | null>(null);

	useEffect(() => {
		const sections = sectionIds.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
		const update = () => {
			const line = window.innerHeight * 0.35;
			const current = sections.filter((el) => el.getBoundingClientRect().top <= line).at(-1);
			const inside = current && current.getBoundingClientRect().bottom > line;
			setActive(inside ? current.id : null);
		};
		update();
		window.addEventListener('scroll', update, { passive: true });
		return () => window.removeEventListener('scroll', update);
	}, []);

	return active;
}

/** The persistent CTA on phones, where the header has no room for it: appears after the first screen. */
function useScrolledPast(px: number) {
	const [past, setPast] = useState(false);

	useEffect(() => {
		const update = () => setPast(window.scrollY > px);
		update();
		window.addEventListener('scroll', update, { passive: true });
		return () => window.removeEventListener('scroll', update);
	}, [px]);

	return past;
}

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const active = useActiveSection();
	const showBar = useScrolledPast(640);

	useEffect(() => {
		document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
		if (!menuOpen) return;
		const onKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setMenuOpen(false);
		};
		window.addEventListener('keydown', onKey);
		return () => {
			document.documentElement.style.overflow = '';
			window.removeEventListener('keydown', onKey);
		};
	}, [menuOpen]);

	return (
		<>
			<header className="fixed inset-x-0 top-0 z-(--z-header) h-(--header-h) border-b-2 border-line bg-page text-ink">
				<div className="container flex h-full items-center justify-between gap-4">
					<a href="#inicio" aria-label={nav.homeLabel} className="shrink-0">
						<Logo name={nav.name} descriptor={nav.descriptor} />
					</a>

					<nav aria-label="Principal" className="hidden items-center gap-x-8 xl:flex">
						{nav.links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								aria-current={active === link.href.slice(1) ? 'location' : undefined}
								className={cn(
									'label-mono text-sm underline underline-offset-8 transition hover:text-link',
									active === link.href.slice(1) && 'text-link',
								)}
							>
								{link.label}
							</a>
						))}
					</nav>

					<div className="flex items-center gap-3">
						<CtaButton variant="compact" intent="other" className="hidden whitespace-nowrap sm:inline-flex">
							{ctaLabel}
						</CtaButton>

						<button
							type="button"
							aria-label={menuOpen ? nav.closeMenu : nav.openMenu}
							aria-expanded={menuOpen}
							aria-controls="menu-movil"
							onClick={() => setMenuOpen((open) => !open)}
							className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 xl:hidden"
						>
							<span
								className={`h-0.5 w-7 bg-ink transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
							/>
							<span className={`h-0.5 w-7 bg-ink transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
							<span
								className={`h-0.5 w-7 bg-ink transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
							/>
						</button>
					</div>
				</div>
			</header>

			{menuOpen && (
				<div id="menu-movil" className="fixed inset-0 top-(--header-h) z-(--z-menu) overflow-y-auto bg-page text-ink xl:hidden">
					<nav aria-label="Principal" className="container flex flex-col pb-10 pt-4">
						{nav.links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setMenuOpen(false)}
								aria-current={active === link.href.slice(1) ? 'location' : undefined}
								className="label-mono border-b border-line py-4 text-base aria-[current]:text-link"
							>
								{link.label}
							</a>
						))}
						<div className="mt-8 sm:hidden">
							<CtaButton intent="other" className="w-full" onClick={() => setMenuOpen(false)}>
								{ctaLabel}
							</CtaButton>
						</div>
					</nav>
				</div>
			)}

			{showBar && !menuOpen && (
				<div className="fixed inset-x-0 bottom-0 z-(--z-header) border-t-2 border-line bg-page px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 sm:hidden">
					<CtaButton intent="other" className="w-full">
						{ctaLabel}
					</CtaButton>
				</div>
			)}
		</>
	);
}
