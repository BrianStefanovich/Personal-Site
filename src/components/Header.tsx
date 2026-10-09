import { CtaButton } from '@/components/CtaButton';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { es } from '@/i18n/es';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

const { nav } = es;
const ctaLabel = es.home.hero.cta;
const hashOf = (href: string) => href.split('#')[1];
const sectionIds = nav.links.map((link) => hashOf(link.href)).filter((id): id is string => Boolean(id));
const HEADER_PX = 72;

/** Marks the anchored section crossing a line 35% down the viewport, so the nav can highlight it. */
function useActiveSection() {
	const [active, setActive] = useState<string | null>(null);

	useEffect(() => {
		const sections = sectionIds.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
		const crossing = new Set<string>();
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) crossing.add(entry.target.id);
					else crossing.delete(entry.target.id);
				}
				setActive(sectionIds.filter((id) => crossing.has(id)).at(-1) ?? null);
			},
			{ rootMargin: '-35% 0px -64% 0px' },
		);
		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);

	return active;
}

function usePathname() {
	const [pathname, setPathname] = useState('');
	useEffect(() => setPathname(window.location.pathname.replace(/(.)\/$/, '$1')), []);
	return pathname;
}

/** True once the hero CTA has scrolled away: the phone bar takes over as the persistent CTA. */
function useHeroCtaPassed() {
	const [passed, setPassed] = useState(false);

	useEffect(() => {
		const target = document.querySelector('[data-hero-cta]');
		if (!target) return;
		const observer = new IntersectionObserver(
			([entry]) => setPassed(!entry.isIntersecting && entry.boundingClientRect.top < window.innerHeight / 2),
			{ rootMargin: `-${HEADER_PX}px 0px 0px 0px` },
		);
		observer.observe(target);
		return () => observer.disconnect();
	}, []);

	return passed;
}

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const active = useActiveSection();
	const pathname = usePathname();
	// In-page links follow the scrolled section; page links (/cases) stay current across their sub-pages.
	const currentOf = (href: string) => {
		const hash = hashOf(href);
		if (hash) return pathname === '/' && active === hash ? 'location' : undefined;
		return pathname === href || pathname.startsWith(`${href}/`) ? 'page' : undefined;
	};
	const showBar = useHeroCtaPassed();
	const menuRef = useRef<HTMLDivElement>(null);
	const toggleRef = useRef<HTMLButtonElement>(null);

	// The open menu covers the page, so the page behind it must not take focus.
	useEffect(() => {
		if (!menuOpen) return;
		const background = Array.from(document.querySelectorAll<HTMLElement>('main, footer'));
		background.forEach((el) => {
			el.inert = true;
		});
		document.documentElement.style.overflow = 'hidden';
		menuRef.current?.querySelector<HTMLElement>('a')?.focus();

		const desktop = window.matchMedia('(min-width: 80rem)');
		const closeOnDesktop = () => desktop.matches && setMenuOpen(false);
		const onKey = (event: KeyboardEvent) => {
			if (event.key !== 'Escape') return;
			setMenuOpen(false);
			toggleRef.current?.focus();
		};
		desktop.addEventListener('change', closeOnDesktop);
		window.addEventListener('keydown', onKey);
		return () => {
			background.forEach((el) => {
				el.inert = false;
			});
			document.documentElement.style.overflow = '';
			desktop.removeEventListener('change', closeOnDesktop);
			window.removeEventListener('keydown', onKey);
		};
	}, [menuOpen]);

	return (
		<>
			<header className="fixed inset-x-0 top-0 z-(--z-header) h-(--header-h) border-b-2 border-line bg-page text-ink">
				<div className="frame-width frame-pad flex h-full items-center justify-between gap-4 xl:gap-8">
					<a href="/" aria-label={nav.homeLabel} className="shrink-0">
						<Logo name={nav.name} />
					</a>

					<nav aria-label="Principal" className="ml-auto hidden items-center gap-x-8 xl:flex">
						{nav.links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								aria-current={currentOf(link.href)}
								className={cn(
									'label-mono border-b border-blueprint pb-1 text-sm tracking-[0.1em] transition hover:text-link',
									currentOf(link.href) && 'text-link',
								)}
							>
								{link.label}
							</a>
						))}
					</nav>

					<div className="flex items-center gap-3">
						<ThemeToggle className="max-xl:hidden" />
						<CtaButton variant="compact" intent="other" className="hidden whitespace-nowrap sm:inline-flex">
							{ctaLabel}
						</CtaButton>

						<button
							ref={toggleRef}
							type="button"
							aria-label={menuOpen ? nav.closeMenu : nav.openMenu}
							aria-expanded={menuOpen}
							aria-controls="menu-movil"
							onClick={() => setMenuOpen((open) => !open)}
							className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 xl:hidden"
						>
							<span className={`h-0.5 w-7 bg-ink transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
							<span className={`h-0.5 w-7 bg-ink transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
							<span className={`h-0.5 w-7 bg-ink transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
						</button>
					</div>
				</div>
			</header>

			{menuOpen && (
				<div
					ref={menuRef}
					id="menu-movil"
					className="fixed inset-0 top-(--header-h) z-(--z-menu) overflow-y-auto bg-page text-ink xl:hidden"
				>
					<nav aria-label="Principal" className="container flex flex-col pb-10 pt-4">
						{nav.links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setMenuOpen(false)}
								aria-current={currentOf(link.href)}
								className="label-mono border-b border-line py-4 text-base aria-[current]:text-link"
							>
								{link.label}
							</a>
						))}
						<div className="flex items-center justify-between border-b border-line py-2">
							<span className="label-mono text-base">{nav.themeLabel}</span>
							<ThemeToggle />
						</div>
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
