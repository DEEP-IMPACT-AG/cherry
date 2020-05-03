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
	big?: boolean;
}

function Button({
	children,
	className,
	id,
	onClick,
	href,
	target,
	rel,
	big,
}: ButtonProps) {
	const ownClassName = classNames(styles.button, className, {
		[styles.big]: big,
	});

	if (href) {
		return (
			<a
				href={href}
				target={target}
				className={ownClassName}
				id={id}
				rel={rel}
			>
				{children}
			</a>
		);
	}

	return (
		<button onClick={onClick} className={ownClassName} id={id}>
			{children}
		</button>
	);
}

export { Button };
