import React from "react";
import classNames from "classnames";
const styles =  require("./Space.css");

interface SpaceProps {
	size: number;
	mobileOnly?: boolean;
	desktopOnly?: boolean;
	horizontal?: boolean;
}

function Space({ size, mobileOnly, desktopOnly, horizontal }: SpaceProps) {
	if (horizontal) {
		return (
			<span
				className={classNames(styles.space, {
					[styles.mobileOnly]: mobileOnly,
					[styles.desktopOnly]: desktopOnly,
					[styles.horizontal]: horizontal,
				})}
				style={{ width: `${size}px` }}
			/>
		);
	}
	return (
		<span
			className={classNames(styles.space, {
				[styles.mobileOnly]: mobileOnly,
				[styles.desktopOnly]: desktopOnly,
			})}
			style={{ height: `${size}px` }}
		/>
	);
}

export { Space };
