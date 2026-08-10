import { getTranslations } from '@/i18n';

export default function Footer() {
	const { brand, footer } = getTranslations();

	return (
		<footer className="relative border-t-2 border-line bg-line px-5 pt-[26px] pb-6 text-center md:border-t-0 md:bg-[#f1ede5] md:px-10 md:py-16">
			<span aria-hidden className="absolute top-0 left-1/2 hidden h-[3px] w-16 -translate-x-1/2 bg-accent md:block" />

			<div className="container flex flex-col items-center gap-2 md:gap-8">
				<div className="hidden flex-col items-center gap-4 md:flex">
					<img
						src="/images/footer-mark.webp"
						alt=""
						width={48}
						height={48}
						aria-hidden
						className="size-12 opacity-80 grayscale"
					/>
					<p className="font-mono text-base leading-6 tracking-[0.1em] text-body uppercase">{brand.motto}</p>
				</div>

				<p className="font-display text-2xl leading-[31px] font-semibold text-foreground md:text-base md:leading-6 md:font-normal">
					{brand.fullName}
				</p>

				<div className="flex flex-col gap-1 pt-2 md:gap-2 md:pt-0">
					<p className="text-sm leading-[21px] text-body md:leading-5">{brand.tagline}</p>
					<p className="text-sm leading-[21px] text-body md:leading-5">{brand.disciplines}</p>
					<p className="text-sm leading-[21px] text-muted md:text-body md:leading-5">{brand.location}</p>
				</div>

				<nav aria-label="Enlaces del pie" className="flex flex-wrap justify-center gap-6 pt-6 md:pt-4">
					{footer.links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="font-mono text-xs leading-4 tracking-[0.06em] text-[#434845] underline md:font-body md:text-sm md:leading-[21px] md:tracking-normal md:text-[#606662]"
						>
							{link.label}
						</a>
					))}
				</nav>

				<p className="max-w-80 pt-8 font-mono text-xs leading-4 tracking-[0.06em] text-muted md:max-w-none md:pt-4 md:font-body md:text-sm md:leading-[21px] md:tracking-normal md:text-body">
					<span className="md:hidden">{footer.copyright}</span>
					<span className="hidden md:inline">{footer.copyrightDesktop}</span>
				</p>
			</div>
		</footer>
	);
}
