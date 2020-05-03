import React from "react";

interface SvgProps {
	className?: string;
}

function Svg({ className }: SvgProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="192"
			height="75"
			viewBox="0 0 192 75"
			className={className}
		>
			<g fill="none">
				<polygon
					fill="#FFF"
					points="53.375 75 53.375 64.27 0 64.27 0 0 192 0 192 64.27 96 64.27 96 75"
				/>
				<polygon
					fill="#CB3837"
					points="85.65 64 85.65 53.29 107 53.29 107 11 64 11 64 64"
				/>
				<polygon fill="#FFF" points="86 22 96 22 96 43 86 43" />
				<polygon
					fill="#CB3837"
					points="32.273 54 32.273 21.815 43.137 21.815 43.137 54 54 54 54 11 11 11 11 54"
				/>
				<polygon
					fill="#CB3837"
					points="139.086 54 139.086 21.815 149.814 21.815 149.814 54 160.543 54 160.543 21.815 171.271 21.815 171.271 54 182 54 182 11 118 11 118 54"
				/>
			</g>
		</svg>
	);
}

export { Svg as NPMName };
