import { getTranslations } from '@/i18n';

export default function Footer() {
	const { brand, footer } = getTranslations();

	return (
		<footer className="relative border-t-2 border-line bg-line px-5 pt-[26px] pb-6 text-center md:border-t-0 md:bg-[#f1ede5] md:px-10 md:py-16 md:text-left">
			<span aria-hidden className="absolute top-0 left-1/2 hidden h-[3px] w-16 -translate-x-1/2 bg-accent md:block" />

			<div className="container flex flex-col items-center gap-2 md:items-stretch md:gap-10">
				<div className="flex flex-col gap-6 md:grid md:grid-cols-4 md:gap-8">
					<div className="flex flex-col items-center gap-3 md:items-start">
						<img
							src="/images/footer-mark.webp"
							alt=""
							width={40}
							height={40}
							aria-hidden
							className="size-10 opacity-80 grayscale"
						/>
						<p className="font-display text-2xl leading-[31px] font-semibold text-foreground md:text-base md:leading-6">
							{brand.fullName}
						</p>
						<p className="text-sm leading-[21px] text-body">{brand.tagline}</p>
					</div>

					<div className="flex flex-col items-center gap-2 md:items-start">
						<p className="font-display text-sm leading-6 font-semibold text-foreground uppercase">Servicios</p>
						{footer.servicios.map((link) => (
							<a key={link.href} href={link.href} className="text-sm leading-[21px] text-body hover:text-foreground">
								{link.label}
							</a>
						))}
					</div>

					<div className="flex flex-col items-center gap-2 md:items-start">
						<p className="font-display text-sm leading-6 font-semibold text-foreground uppercase">Información</p>
						{footer.informacion.map((link) => (
							<a key={link.href} href={link.href} className="text-sm leading-[21px] text-body hover:text-foreground">
								{link.label}
							</a>
						))}
					</div>

					<div className="flex flex-col items-center gap-2 md:items-start">
						<p className="font-display text-sm leading-6 font-semibold text-foreground uppercase">Contacto</p>
						<p className="text-sm leading-[21px] text-body">{footer.contacto.location}</p>
						<p className="text-sm leading-[21px] text-body">{footer.contacto.remoto}</p>
						<a href={footer.contacto.linkedin.href} className="text-sm leading-[21px] text-body hover:text-foreground">
							{footer.contacto.linkedin.label}
						</a>
						<a href={footer.contacto.correo.href} className="text-sm leading-[21px] text-body hover:text-foreground">
							{footer.contacto.correo.label}
						</a>
					</div>
				</div>

				<nav aria-label="Enlaces legales" className="flex flex-wrap justify-center gap-6 border-t border-line pt-6 md:justify-start md:pt-8">
					{footer.legal.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="font-mono text-xs leading-4 tracking-[0.06em] text-nav underline md:font-body md:text-sm md:leading-[21px] md:tracking-normal md:text-nav"
						>
							{link.label}
						</a>
					))}
				</nav>

				<p className="max-w-80 pt-8 text-center font-mono text-xs leading-4 tracking-[0.06em] text-muted md:max-w-none md:pt-0 md:text-left md:font-body md:text-sm md:leading-[21px] md:tracking-normal md:text-body">
					{footer.copyright}
				</p>
			</div>
		</footer>
	);
}
