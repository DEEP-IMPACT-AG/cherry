import React from "react";
import classNames from "classnames";
const styles = require("./ContentPusher.css");
import AppearAfter from "../../AppearAfter";

interface ContentPusherProps {
	children: any;
	className?: string;
	delay?: number;
	id?: string;
	noMinHeight?: boolean;
}

function ContentPusher({
	children,
	className,
	delay = 600,
	id,
	noMinHeight,
}: ContentPusherProps) {
	return (
		<AppearAfter
			className={classNames(styles.contentPusher, className, {
				[styles.noMinHeight]: noMinHeight,
			})}
			visibleClassName={styles.visible}
			delay={delay}
		>
			<div id={id}>{children}</div>
		</AppearAfter>
	);
}

export { ContentPusher };
