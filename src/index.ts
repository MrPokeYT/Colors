// Códigos ANSI para colores por defecto
const colors = {
	reset: "\x1b[0m"
};

const colorHex: {
	black: string;
	red: string;
	green: string;
	yellow: string;
	blue: string;
	magenta: string;
	cyan: string;
	white: string;
	gray: string;
	brightRed: string;
	brightGreen: string;
	brightYellow: string;
	brightBlue: string;
	brightMagenta: string;
	brightCyan: string;
	brightWhite: string;
} = {
	black: '#000000',
	red: '#ff0000',
	green: '#00ff00',
	yellow: '#ffff00',
	blue: '#0000ff',
	magenta: '#ff00ff',
	cyan: '#00ffff',
	white: '#ffffff',
	gray: '#808080',
	brightRed: '#ff5555',
	brightGreen: '#55ff55',
	brightYellow: '#ffff55',
	brightBlue: '#5555ff',
	brightMagenta: '#ff55ff',
	brightCyan: '#55ffff',
	brightWhite: '#ffffff'
};

export type StyleOptions = {
	color?: keyof typeof colorHex;
	hex?: string;
	bold?: boolean;
	dim?: boolean;
	italic?: boolean;
	underline?: boolean;
	inverse?: boolean;
	hidden?: boolean;
	strikethrough?: boolean;
};

export function style(text: string, options: StyleOptions = {}): string {
	let colorCode = "";
	let styleCodes = "";
	// Color
	if (options.hex) {
		let hex = options.hex.replace('#', '');
		if (hex.length === 3) {
			hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
		}
		if (hex.length !== 6) {
			hex = colorHex.white.replace('#', '');
		}
		const r = parseInt(hex.substring(0, 2), 16);
		const g = parseInt(hex.substring(2, 4), 16);
		const b = parseInt(hex.substring(4, 6), 16);
		colorCode = `\x1b[38;2;${r};${g};${b}m`;
	} else if (options.color && colorHex[options.color]) {
		const hex = colorHex[options.color].replace('#', '');
		const r = parseInt(hex.substring(0, 2), 16);
		const g = parseInt(hex.substring(2, 4), 16);
		const b = parseInt(hex.substring(4, 6), 16);
		colorCode = `\x1b[38;2;${r};${g};${b}m`;
	}
	// Estilos
	if (options.bold) styleCodes += "\x1b[1m";
	if (options.dim) styleCodes += "\x1b[2m";
	if (options.italic) styleCodes += "\x1b[3m";
	if (options.underline) styleCodes += "\x1b[4m";
	if (options.inverse) styleCodes += "\x1b[7m";
	if (options.hidden) styleCodes += "\x1b[8m";
	if (options.strikethrough) styleCodes += "\x1b[9m";
	return colorCode + styleCodes + text + colors.reset;
}
