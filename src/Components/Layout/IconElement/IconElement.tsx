import React from "react";
import classNames from "classnames";
const styles = require("./IconElement.css");

interface IconElementProps {
	title: string;
	description?: string;
	className?: string;
}

function IconElement({ title, description, className }: IconElementProps) {
	return (
		<div className={classNames(styles.iconElement, className, {})}>
			{title && <strong>{title}</strong>}
			{description && <em>{description}</em>}
		</div>
	);
}

export { IconElement };
