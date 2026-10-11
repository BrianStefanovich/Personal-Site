import { cn } from '@/lib/utils';

interface ThemedLogoProps {
	className?: string;
}

/** Header lockup: light and dark SVG swapped by the resolved theme. The parent link carries the accessible name. */
export function LogoImage({ className }: ThemedLogoProps) {
	const image = cn('-ml-1.5 h-12 w-auto md:-ml-2 md:h-14 xl:h-16', className);
	return (
		<>
			<img src="/Brian_Stefanovich_02_cabecera_Light.svg" alt="" width={1000} height={180} className={cn(image, 'dark:hidden')} />
			<img src="/Brian_Stefanovich_02_cabecera_Dark.svg" alt="" width={1000} height={180} className={cn(image, 'hidden dark:block')} />
		</>
	);
}

/** Editorial signature (with slogan) used in the footer. */
export function LogoSignature({ alt, className }: ThemedLogoProps & { alt: string }) {
	const image = cn('h-auto w-full max-w-[26rem] md:max-w-[32rem]', className);
	return (
		<>
			<img src="/Brian_Stefanovich_04_firma_editorial_Light.svg" alt={alt} width={730} height={325} className={cn(image, 'dark:hidden')} />
			<img src="/Brian_Stefanovich_04_firma_editorial_Dark.svg" alt={alt} width={730} height={325} className={cn(image, 'hidden dark:block')} />
		</>
	);
}
