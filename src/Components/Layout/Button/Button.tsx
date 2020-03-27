import React from "react";
import classNames from "classnames";
const styles = require("./Button.css");

interface ButtonProps {
	children: any;
	className?: string;
	id?: string;
	onClick?: () => void;
	href?: string;
	target?: string;
	rel?: string;
}

function Button({
	children,
	className,
	id,
	onClick,
	href,
	target,
	rel,
}: ButtonProps) {
	if (href) {
		return (
			<a
				href={href}
				target={target}
				className={classNames(styles.button, className)}
				id={id}
				rel={rel}
			>
				{children}
			</a>
		);
	}

	return (
		<button
			onClick={onClick}
			className={classNames(styles.button, className)}
			id={id}
		>
			{children}
		</button>
	);
}

export { Button };
