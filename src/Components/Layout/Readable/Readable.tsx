import React from "react";
import classNames from "classnames";
const styles = require("./Readable.css");

interface ReadableProps {
	children: any;
	className?: string;
	noLists?: boolean;
}

function Readable({ children, className, noLists }: ReadableProps) {
	return (
		<div className={classNames(styles.readable, className, {
			[styles.noLists]: noLists,
		})}>{children}</div>
	);
}

export default Readable;
