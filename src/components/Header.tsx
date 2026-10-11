import { CtaButton } from '@/components/CtaButton';
import { LogoImage } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { es } from '@/i18n/es';
import { CaretDownIcon } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

const { nav } = es;
const services = es.home.servicios.items;
const SERVICES_HREF = '/servicios';
const ctaLabel = nav.cta;
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

type Current = 'page' | 'location' | undefined;

/** Desktop disclosure: Servicios opens its three services on click. Closes on Escape, outside press or focus leaving. */
function ServicesMenu({ pathname, current }: { pathname: string; current: Current }) {
	const [open, setOpen] = useState(false);
	const rootRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!open) return;
		const onPointer = (event: PointerEvent) => {
			if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
		};
		const onKey = (event: KeyboardEvent) => {
			if (event.key !== 'Escape') return;
			setOpen(false);
			triggerRef.current?.focus();
		};
		document.addEventListener('pointerdown', onPointer);
		window.addEventListener('keydown', onKey);
		return () => {
			document.removeEventListener('pointerdown', onPointer);
			window.removeEventListener('keydown', onKey);
		};
	}, [open]);

	const itemClass =
		'group flex flex-col gap-0.5 px-5 py-3 transition-colors hover:bg-ink hover:text-page focus-visible:bg-ink focus-visible:text-page aria-[current]:text-link hover:aria-[current]:text-page focus-visible:aria-[current]:text-page';

	return (
		<div
			ref={rootRef}
			className="relative flex"
			onBlur={(event) => {
				if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
			}}
		>
			<button
				ref={triggerRef}
				type="button"
				aria-expanded={open}
				aria-controls="menu-servicios"
				aria-current={current}
				onClick={() => setOpen((value) => !value)}
				className={cn(
					'label-mono inline-flex items-center gap-1.5 border-b-2 border-transparent pt-1.5 pb-1 text-sm tracking-[0.1em] transition hover:border-strong hover:text-link focus-visible:border-transparent',
					(current || open) && 'border-blueprint text-link hover:border-blueprint',
				)}
			>
				{nav.links[0].label}
				<CaretDownIcon
					aria-hidden="true"
					size={12}
					weight="bold"
					className={cn('transition-transform duration-200', open && 'rotate-180')}
				/>
			</button>

			{open && (
				<div
					id="menu-servicios"
					className="absolute left-0 top-[calc(50%+var(--header-h)/2-2px)] z-(--z-menu) w-[22rem] border-2 border-t-0 border-line bg-page text-ink shadow-[0_16px_32px_-16px_rgba(16,19,17,0.3)]"
				>
					<ul>
						{services.map((service) => (
							<li key={service.id} className="border-b border-line last:border-b-0">
								<a href={service.path} aria-current={pathname === service.path ? 'page' : undefined} className={itemClass}>
									<span className="font-display text-base font-bold leading-snug">{service.navLabel}</span>
									<span className="label-mono text-xs text-muted transition-colors group-hover:text-page group-focus-visible:text-page">
										{service.model}
									</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

/** Mobile disclosure: the same three services, expanded inline under Servicios. */
function MobileServices({ pathname, current, onNavigate }: { pathname: string; current: Current; onNavigate: () => void }) {
	const [open, setOpen] = useState(pathname === SERVICES_HREF || pathname.startsWith(`${SERVICES_HREF}/`));
	const subClass = 'block border-b border-line py-3 pl-4 text-base aria-[current]:text-link';

	return (
		<div>
			<button
				type="button"
				aria-expanded={open}
				aria-controls="menu-movil-servicios"
				aria-current={current}
				onClick={() => setOpen((value) => !value)}
				className="label-mono flex min-h-14 w-full items-center justify-between border-b border-line py-4 text-left text-base aria-[current]:text-link"
			>
				{nav.links[0].label}
				<CaretDownIcon
					aria-hidden="true"
					size={16}
					weight="bold"
					className={cn('transition-transform duration-200', open && 'rotate-180')}
				/>
			</button>
			{open && (
				<ul id="menu-movil-servicios">
					{services.map((service) => (
						<li key={service.id}>
							<a
								href={service.path}
								onClick={onNavigate}
								aria-current={pathname === service.path ? 'page' : undefined}
								className={subClass}
							>
								{service.navLabel}
							</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const active = useActiveSection();
	const pathname = usePathname();
	// In-page links follow the scrolled section; page links (/cases, /servicios) stay current across their sub-pages.
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
		menuRef.current?.querySelector<HTMLElement>('a, button')?.focus();

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
						<LogoImage />
					</a>

					<nav aria-label="Principal" className="ml-auto hidden items-center gap-x-8 xl:flex">
						{nav.links.map((link) =>
							link.href === SERVICES_HREF ? (
								<ServicesMenu key={link.href} pathname={pathname} current={currentOf(link.href)} />
							) : (
								<a
									key={link.href}
									href={link.href}
									aria-current={currentOf(link.href)}
									className={cn(
										'label-mono border-b-2 border-transparent pt-1.5 pb-1 text-sm tracking-[0.1em] transition hover:border-strong hover:text-link focus-visible:border-transparent',
										currentOf(link.href) && 'border-blueprint text-link hover:border-blueprint',
									)}
								>
									{link.label}
								</a>
							),
						)}
					</nav>

					<div className="flex items-center gap-3">
						<ThemeToggle className="max-xl:hidden" />
						<CtaButton variant="compact" intent="other" location="header" className="hidden whitespace-nowrap sm:inline-flex">
							{ctaLabel}
						</CtaButton>

						<button
							ref={toggleRef}
							type="button"
							aria-label={menuOpen ? nav.closeMenu : nav.openMenu}
							aria-expanded={menuOpen}
							aria-controls="menu-movil"
							onClick={() => setMenuOpen((open) => !open)}
							className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-1.5 xl:hidden"
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
						{nav.links.map((link) =>
							link.href === SERVICES_HREF ? (
								<MobileServices key={link.href} pathname={pathname} current={currentOf(link.href)} onNavigate={() => setMenuOpen(false)} />
							) : (
								<a
									key={link.href}
									href={link.href}
									onClick={() => setMenuOpen(false)}
									aria-current={currentOf(link.href)}
									className="label-mono border-b border-line py-4 text-base aria-[current]:text-link"
								>
									{link.label}
								</a>
							),
						)}
						<div className="flex items-center justify-between border-b border-line py-2">
							<span className="label-mono text-base">{nav.themeLabel}</span>
							<ThemeToggle />
						</div>
						<div className="mt-8 sm:hidden">
							<CtaButton intent="other" location="menu" className="w-full" onClick={() => setMenuOpen(false)}>
								{ctaLabel}
							</CtaButton>
						</div>
					</nav>
				</div>
			)}

			{showBar && !menuOpen && (
				<div className="fixed inset-x-0 bottom-0 z-(--z-header) border-t-2 border-line bg-page px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 sm:hidden">
					<CtaButton intent="other" location="mobile-bar" className="w-full">
						{ctaLabel}
					</CtaButton>
				</div>
			)}
		</>
	);
}
