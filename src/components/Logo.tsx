import { cn } from '@/lib/utils';

interface ThemedLogoProps {
	className?: string;
}

/** Header lockup: light and dark SVG swapped by the resolved theme. The parent link carries the accessible name. */
export function LogoImage({ className }: ThemedLogoProps) {
	const image = cn('-ml-1.5 h-12 w-auto md:-ml-2 md:h-14 xl:h-16', className);
	return (
		<>
			<img src="/Brian_Stefanovich_02_header_Light.svg" alt="" width={1000} height={180} className={cn(image, 'dark:hidden')} />
			<img src="/Brian_Stefanovich_02_header_Dark.svg" alt="" width={1000} height={180} className={cn(image, 'hidden dark:block')} />
		</>
	);
}

/** Editorial signature (with slogan) used in the footer. The SVG canvas carries empty margins, so it is cropped to the artwork's bounds (640x187 of 730x325). */
export function LogoSignature({ alt, className }: ThemedLogoProps & { alt: string }) {
	const image = 'absolute left-[-7.656%] top-[-60.96%] h-auto w-[114.0625%] max-w-none';
	return (
		<div className={cn('relative aspect-[640/187] w-full max-w-80 overflow-hidden md:max-w-[28rem]', className)}>
			<img src="/Brian_Stefanovich_04_editorial_signature_Light.svg" alt={alt} width={730} height={325} className={cn(image, 'dark:hidden')} />
			<img
				src="/Brian_Stefanovich_04_editorial_signature_Dark.svg"
				alt={alt}
				width={730}
				height={325}
				className={cn(image, 'hidden dark:block')}
			/>
		</div>
	);
}
