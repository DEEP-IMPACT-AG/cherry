import React from "react";
import classNames from "classnames";
const styles = require("./Readable.css");

interface ReadableProps {
	children: any;
	className?: string;
	noUnorderedLists?: boolean;
	noOrderedLists?: boolean;
	isHome?: boolean;
	normalLinks?: boolean;
}

function Readable({
	children,
	className,
	noUnorderedLists,
	noOrderedLists,
	isHome,
	normalLinks,
}: ReadableProps) {
	return (
		<div
			className={classNames(styles.readable, className, {
				[styles.noUnorderedLists]: noUnorderedLists,
				[styles.noOrderedLists]: noOrderedLists,
				[styles.home]: isHome,
				[styles.normalLinks]: normalLinks,
			})}
		>
			{children}
		</div>
	);
}

export { Readable };
