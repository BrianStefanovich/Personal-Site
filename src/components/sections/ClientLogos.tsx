import { LogoPlate } from '@/components/sections/LogoPlate';
import { Section } from '@/components/ui/Section';
import { workedWith } from '@/i18n/cases';
import { es } from '@/i18n/es';
import { PauseIcon, PlayIcon } from '@phosphor-icons/react';
import { useState } from 'react';

const { clients } = es.home;

function Group({ hidden = false }: { hidden?: boolean }) {
	return (
		<ul aria-hidden={hidden || undefined} aria-label={hidden ? undefined : clients.listLabel} className="logo-marquee__group">
			{workedWith.map(({ name, logo }) => (
				<li key={name} className="flex">
					<LogoPlate name={name} logo={logo} size="strip" decorative={hidden} />
				</li>
			))}
		</ul>
	);
}

/** The companies Brian has worked with, as a slow logo strip under "Cómo trabajo". Pausable; static for visitors who prefer reduced motion. */
export default function ClientLogos() {
	const [paused, setPaused] = useState(false);
	const Icon = paused ? PlayIcon : PauseIcon;

	return (
		<Section contentClassName="flex flex-col gap-10">
			<div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
				<div className="flex max-w-[44rem] flex-col gap-3">
					<h2 className="text-headline">{clients.headline}</h2>
					<p className="text-body text-muted">{clients.intro}</p>
				</div>
			</div>

			<div data-paused={paused} className="logo-marquee -mx-6 md:-mx-10 xl:-mx-16">
				<div className="logo-marquee__track">
					<Group />
					<Group hidden />
				</div>
			</div>
		</Section>
	);
}
