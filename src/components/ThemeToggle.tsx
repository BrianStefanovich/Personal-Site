import { es } from '@/i18n/es';
import { cn } from '@/lib/utils';
import { MoonIcon, SunIcon } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function applyTheme(theme: Theme) {
	document.documentElement.dataset.theme = theme;
	window.dispatchEvent(new Event('themechange'));
}

/** Light/dark toggle. The page is light by default; a visitor's choice is remembered. */
export function ThemeToggle({ className }: { className?: string }) {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		const sync = () => setDark(document.documentElement.dataset.theme === 'dark');
		sync();
		window.addEventListener('themechange', sync);
		return () => window.removeEventListener('themechange', sync);
	}, []);

	function toggle() {
		const next: Theme = dark ? 'light' : 'dark';
		applyTheme(next);
		try {
			localStorage.setItem('theme', next);
		} catch {
			// Storage can be blocked; the choice then lasts for this visit only.
		}
	}

	return (
		<button
			type="button"
			aria-label={es.nav.themeLabel}
			aria-pressed={dark}
			onClick={toggle}
			className={cn(
				'flex size-11 shrink-0 items-center justify-center rounded-full border border-line text-ink transition hover:border-link hover:text-link active:translate-y-px',
				className,
			)}
		>
			<SunIcon weight="bold" aria-hidden="true" size={20} className="hidden dark:block" />
			<MoonIcon weight="bold" aria-hidden="true" size={20} className="dark:hidden" />
		</button>
	);
}
