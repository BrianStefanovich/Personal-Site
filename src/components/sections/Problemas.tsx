import { SectionEyebrow } from '@/components/sections/SectionEyebrow';
import type { Translations } from '@/i18n';

const columnMobileIcon = {
	existentes: { src: '/images/icon-sintoma-alerta.svg', width: 22, height: 23 },
	nuevos: { src: '/images/icon-sintoma-info.svg', width: 20, height: 24 },
	fraccional: { src: '/images/icon-sintoma-info.svg', width: 20, height: 24 },
} as const;

interface ProblemasProps {
	content: Translations['home']['problemas'];
}

export default function Problemas({ content: problemas }: ProblemasProps) {
	return (
		<section id="problemas" className="container flex flex-col gap-8 py-12 md:gap-12 md:py-[64px]">
			<div className="flex flex-col gap-2">
				<SectionEyebrow number={problemas.number} short={problemas.short} long={problemas.long} />
				<h2 className="pt-2 font-display text-[36px] leading-[43px] font-semibold text-foreground text-balance md:pt-4 md:text-[44px] md:leading-[53px]">
					{problemas.heading}
				</h2>
				<div className="flex flex-col gap-4 pt-4 md:max-w-[720px]">
					{problemas.body.map((paragraph) => (
						<p key={paragraph} className="text-[17px] leading-7 text-body">
							{paragraph}
						</p>
					))}
				</div>
			</div>

			<nav aria-label={problemas.routingLabel} className="flex flex-col gap-3 rounded-[2px] border border-line bg-surface p-5 md:flex-row md:flex-wrap md:items-center md:gap-4 md:p-6">
				<p className="font-display text-sm leading-6 font-semibold text-foreground">{problemas.routingLabel}</p>
				<ul className="flex flex-col gap-2 md:flex-row md:flex-wrap md:gap-3">
					{problemas.columns.map((column) => (
						<li key={column.id}>
							<a
								href={`#problema-${column.id}`}
								className="inline-flex rounded-[2px] border border-line bg-[#f1ede5] px-4 py-2 font-display text-sm leading-5 font-semibold text-foreground hover:border-accent md:bg-surface"
							>
								{column.tagline}
							</a>
						</li>
					))}
				</ul>
			</nav>

			<div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
				{problemas.columns.map((column) => (
					<div key={column.id} id={`problema-${column.id}`} className="flex flex-col gap-6 scroll-mt-24">
						<div className="flex flex-col gap-6 rounded-[2px] border border-line bg-[#f1ede5] p-[25px] md:gap-0 md:rounded-none md:border-0 md:bg-transparent md:p-0">
							<h3 className="font-display text-2xl leading-[31px] font-semibold text-foreground md:hidden">
								{column.title}
							</h3>
							<p className="hidden border-b border-line pb-4 font-mono text-xs leading-4 tracking-[0.06em] text-accent-soft uppercase md:block">
								{column.label}
							</p>
							<div className="flex flex-col gap-1 md:pt-4">
								<p className="font-display text-xl leading-[27px] font-semibold text-foreground">{column.tagline}</p>
								<p className="text-[15px] leading-6 text-body">{column.taglineSub}</p>
							</div>

							<ul className="flex flex-col gap-6 md:gap-4 md:pt-4">
								{column.items.map((item) => (
									<li
										key={item.title}
										className="flex items-start gap-4 md:rounded-[2px] md:border md:border-line md:bg-surface md:p-5"
									>
										<img
											src={columnMobileIcon[column.id].src}
											alt=""
											width={columnMobileIcon[column.id].width}
											height={columnMobileIcon[column.id].height}
											className="mt-0.5 shrink-0 md:hidden"
											style={{
												width: columnMobileIcon[column.id].width,
												height: columnMobileIcon[column.id].height,
											}}
										/>
										<img
											src={item.icon.src}
											alt=""
											width={item.icon.width}
											height={item.icon.height}
											className="mt-1 hidden shrink-0 md:block"
											style={{ width: item.icon.width, height: item.icon.height }}
										/>
										<div className="flex flex-col gap-1">
											<p className="font-display text-base leading-6 font-semibold text-foreground">
												{item.title}
											</p>
											<p className="hidden text-[13px] leading-5 text-body md:block">{item.description}</p>
										</div>
									</li>
								))}
							</ul>
						</div>

						<article className="flex flex-col gap-4 rounded-[2px] border border-line bg-surface p-[25px] md:p-8">
							<h4 className="font-display text-xl leading-[27px] font-semibold text-foreground">
								{column.servicio.title}
							</h4>
							<p className="text-base leading-6 text-body">{column.servicio.description}</p>

							<p className="pt-2 font-display text-base leading-6 font-semibold text-foreground">
								{problemas.helpLabel}
							</p>
							<ul className="flex flex-col gap-2">
								{column.servicio.items.map((item) => (
									<li key={item} className="flex items-start gap-3">
										<img
											src="/images/icon-check.svg"
											alt=""
											width={14}
											height={10}
											className="mt-[7px] shrink-0"
										/>
										<span className="text-[15px] leading-6 text-body md:text-base">{item}</span>
									</li>
								))}
							</ul>

							<a
								href={column.servicio.href}
								className="mt-auto pt-4 font-display text-base leading-6 font-semibold text-accent underline"
							>
								{column.servicio.linkLabel}
							</a>
						</article>
					</div>
				))}
			</div>

			<p className="rounded-[2px] bg-accent-soft p-6 font-mono text-[17px] leading-7 font-bold break-words text-accent-fg md:mt-8 md:border md:border-line md:bg-[#f1ede5] md:p-8 md:font-body md:text-base md:leading-6 md:font-semibold md:text-foreground">
				{problemas.callout}
			</p>
		</section>
	);
}

