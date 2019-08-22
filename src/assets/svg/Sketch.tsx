import React from 'react';

interface SvgProps {
	className?: string;
}

function Svg({ className }: SvgProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="85"
			height="76"
			viewBox="0 0 85 76"
			className={className}
		>
			<g fill="none" fillRule="evenodd">
				<polygon
					fill="#FDB300"
					points="18.473 2.502 42.333 0 66.194 2.502 84.666 27.1 42.333 76 0 27.1"
				/>
				<path
					fill="#EA6C00"
					fillRule="nonzero"
					d="M17.1468372,27.1004467 L42.3328837,76.0002607 L0,27.1004467 M67.5195294,27.1004467 L42.3334829,76.0002607 L84.6663666,27.1004467"
				/>
				<polyline fill="#FDAD00" points="17.147 27.1 67.519 27.1 42.333 76" />
				<path
					fill="#FDD231"
					fillRule="nonzero"
					d="M42.3328837,0 L18.4724186,2.50181395 L17.1468372,27.100186 M42.3332832,0 L66.1937483,2.50181395 L67.5193297,27.100186"
				/>
				<path
					fill="#FDAD00"
					fillRule="nonzero"
					d="M84.6663666,27.100186 L66.193948,2.50181395 L67.5195294,27.100186 M0,27.100186 L18.4724186,2.50181395 L17.1468372,27.100186"
				/>
				<polyline fill="#FEEEB7" points="42.333 0 17.147 27.1 67.519 27.1" />
			</g>
		</svg>
	);
}

export default Svg;
