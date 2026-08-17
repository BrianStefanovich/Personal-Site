import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

import { LogoMark } from '@/components/icons/LogoMark';
import { buttonVariants } from '@/components/ui/button';
import { getTranslations } from '@/i18n';
import { cn } from '@/lib/utils';

export default function Header() {
	const { nav, brand } = getTranslations();
	const [open, setOpen] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false);
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur-[6px] md:bg-background/90">
			<div className="container flex h-16 items-center justify-between gap-3 md:h-20">
				<a href="/" className="flex shrink-0 items-center gap-3">
					<LogoMark className="size-[41px]" />
					<span className="hidden font-display text-2xl leading-6 font-bold text-foreground md:inline">
						{brand.name}
					</span>
				</a>

				<nav aria-label="Principal" className="hidden flex-1 justify-center gap-6 lg:flex xl:gap-9">
					{nav.links.map((link) =>
						'children' in link ? (
							<div key={link.label} className="relative">
								<button
									type="button"
									aria-expanded={servicesOpen}
									aria-controls="submenu-servicios"
									aria-label={servicesOpen ? nav.closeServicios : nav.openServicios}
									onClick={() => setServicesOpen((value) => !value)}
									className="inline-flex items-center gap-1 font-display text-base leading-6 font-semibold tracking-[0.05em] text-nav uppercase transition-colors hover:text-foreground"
								>
									{link.label}
									<ChevronDown aria-hidden size={14} className={cn('transition-transform', servicesOpen && 'rotate-180')} />
								</button>
								<div
									id="submenu-servicios"
									hidden={!servicesOpen}
									className="absolute top-full left-0 flex min-w-[240px] flex-col gap-1 border border-line bg-surface p-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"
								>
									{link.children.map((child) => (
										<a
											key={child.href}
											href={child.href}
											onClick={() => setServicesOpen(false)}
											className="rounded-[2px] px-3 py-2 font-display text-sm leading-6 font-semibold text-foreground normal-case hover:bg-black/5"
										>
											{child.label}
										</a>
									))}
								</div>
							</div>
						) : (
							<a
								key={link.href}
								href={link.href}
								className="font-display text-base leading-6 font-semibold tracking-[0.05em] text-nav uppercase transition-colors hover:text-foreground"
							>
								{link.label}
							</a>
						),
					)}
				</nav>

				<div className="flex shrink-0 items-center gap-2">
					<a href="/contacto" className={cn(buttonVariants({ size: 'sm' }), 'md:hidden')}>
						{nav.cta}
					</a>
					<a href="/contacto" className={cn(buttonVariants({ size: 'sm' }), 'hidden md:inline-flex')}>
						{nav.cta}
					</a>
					<button
						type="button"
						aria-expanded={open}
						aria-controls="menu-movil"
						aria-label={open ? nav.closeMenu : nav.openMenu}
						onClick={() => setOpen((value) => !value)}
						className="inline-flex size-10 items-center justify-center rounded-[2px] text-foreground lg:hidden"
					>
						{open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
					</button>
				</div>
			</div>

			<nav
				id="menu-movil"
				aria-label="Principal"
				hidden={!open}
				className="border-t border-line bg-background lg:hidden"
			>
				<ul className="container flex flex-col py-2">
					{nav.links.map((link) =>
						'children' in link ? (
							<li key={link.label}>
								<button
									type="button"
									aria-expanded={mobileServicesOpen}
									aria-controls="submenu-servicios-movil"
									onClick={() => setMobileServicesOpen((value) => !value)}
									className="flex w-full items-center justify-between py-3 font-display text-base leading-6 font-semibold tracking-[0.05em] text-nav uppercase"
								>
									{link.label}
									<ChevronDown
										aria-hidden
										size={16}
										className={cn('transition-transform', mobileServicesOpen && 'rotate-180')}
									/>
								</button>
								<ul id="submenu-servicios-movil" hidden={!mobileServicesOpen} className="flex flex-col pb-2 pl-4">
									{link.children.map((child) => (
										<li key={child.href}>
											<a
												href={child.href}
												onClick={() => setOpen(false)}
												className="block py-2 font-display text-sm leading-6 font-semibold text-nav normal-case"
											>
												{child.label}
											</a>
										</li>
									))}
								</ul>
							</li>
						) : (
							<li key={link.href}>
								<a
									href={link.href}
									onClick={() => setOpen(false)}
									className="block py-3 font-display text-base leading-6 font-semibold tracking-[0.05em] text-nav uppercase"
								>
									{link.label}
								</a>
							</li>
						),
					)}
				</ul>
			</nav>
		</header>
	);
}
