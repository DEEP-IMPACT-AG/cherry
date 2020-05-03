import React from "react";

interface SvgProps {
	className?: string;
}

function Svg({ className }: SvgProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 20 20"
			className={className}
		>
			<polygon
				fill="#CB3837"
				points="9.895 22 9.895 7.03 14.947 7.03 14.947 22 20 22 20 2 0 2 0 22"
				transform="translate(0 -2)"
			/>
		</svg>
	);
}

export { Svg as NPMIcon };
