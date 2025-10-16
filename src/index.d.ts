export type StyleOptions = {
	color?:
		| 'reset'
		| 'black'
		| 'red'
		| 'green'
		| 'yellow'
		| 'blue'
		| 'magenta'
		| 'cyan'
		| 'white'
		| 'gray'
		| 'brightRed'
		| 'brightGreen'
		| 'brightYellow'
		| 'brightBlue'
		| 'brightMagenta'
		| 'brightCyan'
		| 'brightWhite';
	hex?: string;
	bold?: boolean;
	dim?: boolean;
	italic?: boolean;
	underline?: boolean;
	inverse?: boolean;
	hidden?: boolean;
	strikethrough?: boolean;
};
export declare function style(text: string, options?: StyleOptions): string;
