import React from "react";

interface SvgProps {
	className?: string;
}

function Svg({ className }: SvgProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="17"
			height="20"
			viewBox="0 0 17 20"
			className={className}
		>
			<polygon
				points="20.905 36.169 24.525 36.169 24.613 38.431 28.324 39.697 32.036 38.431 32.305 34.359 24.344 34.359 24.16 30.739 32.489 30.739 32.757 27.12 20.272 27.12 20 23.5 36.561 23.5 36.108 30.739 35.472 41.146 28.324 43.5 21.177 41.146"
				transform="translate(-20 -23.5)"
			/>
		</svg>
	);
}

export { Svg as CSS };
