import React from "react";
import classNames from "classnames";
import { CSS, PostCSS } from "../../../assets/svg";
const styles = require("./IconElement.css");

interface IconElementProps {
	title?: string;
	description?: string;
	icon?: string;
	emoji?: string;
	link?: string;
	className?: string;
}

function IconElement({
	title,
	description,
	icon,
	emoji,
	link,
	className,
}: IconElementProps) {
	return (
		<div className={classNames(styles.iconElement, className, {})}>
			<strong>
				{link && (
					<a href={link} target="_blank" className={styles.link}>
						{icon && icon === "css" && <CSS />}
						{icon && icon === "postcss" && <PostCSS />}
						<span>{title}</span>
					</a>
				)}
				{emoji && emoji}
			</strong>
			{description && <em> - {description}</em>}
		</div>
	);
}

export { IconElement };
