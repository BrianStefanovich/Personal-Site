import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { LogoMark } from '@/components/icons/LogoMark';
import { buttonVariants } from '@/components/ui/button';
import { getTranslations } from '@/i18n';
import { cn } from '@/lib/utils';

export default function Header() {
	const { nav, brand } = getTranslations();
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur-[6px] md:bg-background/90">
			<div className="container flex h-16 items-center justify-between gap-3 md:h-20">
				<a href="#top" className="flex shrink-0 items-center gap-3">
					<LogoMark className="size-[41px]" />
					<span className="hidden font-display text-2xl leading-6 font-bold text-foreground md:inline">
						{brand.name}
					</span>
				</a>

				<nav aria-label="Principal" className="hidden flex-1 justify-center gap-6 lg:flex xl:gap-9">
					{nav.links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="font-display text-base leading-6 font-semibold tracking-[0.05em] text-nav uppercase transition-colors hover:text-foreground"
						>
							{link.label}
						</a>
					))}
				</nav>

				<div className="flex shrink-0 items-center gap-2">
					<a href="#contacto" className={cn(buttonVariants({ size: 'sm' }), 'md:hidden')}>
						{nav.ctaMobile}
					</a>
					<a href="#contacto" className={cn(buttonVariants({ size: 'sm' }), 'hidden md:inline-flex')}>
						{nav.ctaDesktop}
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
					{nav.links.map((link) => (
						<li key={link.href}>
							<a
								href={link.href}
								onClick={() => setOpen(false)}
								className="block py-3 font-display text-base leading-6 font-semibold tracking-[0.05em] text-nav uppercase"
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
