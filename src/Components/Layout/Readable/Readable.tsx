import React from "react";
import classNames from "classnames";
const styles = require("./Readable.css");

interface ReadableProps {
	children: any;
	className?: string;
	noUnorderedLists?: boolean;
	noOrderedLists?: boolean;
	isHome?: boolean;
}

function Readable({
	children,
	className,
	noUnorderedLists,
	noOrderedLists,
	isHome,
}: ReadableProps) {
	return (
		<div
			className={classNames(styles.readable, className, {
				[styles.noUnorderedLists]: noUnorderedLists,
				[styles.noOrderedLists]: noOrderedLists,
				[styles.home]: isHome,
			})}
		>
			{children}
		</div>
	);
}

export { Readable };
