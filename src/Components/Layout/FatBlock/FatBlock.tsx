import React from "react";
import classNames from "classnames";
import { SketchIcon, External } from "../../../assets/svg";
import { Link } from "react-router-dom";
const styles = require("./FatBlock.css");

interface FatBlockProps {
	link: string;
	children: React.ReactNode;
	color: "orange" | "black" | "red";
	external?: string;
	linkChildren?: React.ReactNode;
}

function FatBlock({
	link,
	children,
	color,
	external,
	linkChildren,
}: FatBlockProps) {
	if (external) {
		return (
			<>
				<div
					className={classNames(styles.fatblock, {
						[styles.external]: external,
						[styles.orange]: color === "orange",
						[styles.black]: color === "black",
						[styles.red]: color === "red",
					})}
				>
					<a href={`${external}?ref=cherry.design`} target="_blank">
						{children}
						<External className={styles.externalIcon} />
					</a>
				</div>
				<Link
					to={link}
					className={classNames(styles.bottomLink, {
						[styles.orange]: color === "orange",
						[styles.black]: color === "black",
						[styles.red]: color === "red",
					})}
					data-bottom-link
				>
					{linkChildren}
				</Link>
			</>
		);
	}
	return (
		<div
			className={classNames(styles.fatblock, {
				[styles.external]: external,
				[styles.orange]: color === "orange",
				[styles.black]: color === "black",
				[styles.red]: color === "red",
			})}
		>
			<Link to={link}>{children}</Link>
		</div>
	);
}

interface FatBlockLabelProps {
	children: React.ReactNode;
}

function FatBlockLabel({ children }: FatBlockLabelProps) {
	return <span className={styles.blockLabel}>{children}</span>;
}

interface FatBlockSuspendedLabelProps {
	children: React.ReactNode;
}

function FatBlockSuspendedLabel({ children }: FatBlockSuspendedLabelProps) {
	return (
		<em className={styles.suspendedLabel} data-suspended-label>
			{children}
		</em>
	);
}

interface FatBlockLinkLabelProps {
	children: React.ReactNode;
}

function FatBlockLinkLabel({ children }: FatBlockLabelProps) {
	return <span className={styles.blockLinkLabel}>{children}</span>;
}

export { FatBlock, FatBlockLabel, FatBlockSuspendedLabel, FatBlockLinkLabel };
