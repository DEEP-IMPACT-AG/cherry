import React from "react";
import classNames from "classnames";
import { withRouter } from "react-router";
import { Link, RouteComponentProps } from "react-router-dom";
import { clickEvent } from "../../util";
import { External } from "../../../assets/svg";
const styles = require("./FatBlock.css");

interface FatBlockProps {
	link: string;
	children: React.ReactNode;
	color: "orange" | "black" | "red";
	external?: string;
	linkChildren?: React.ReactNode;
	history: any;
}

function FatBlock({
	link,
	children,
	color,
	external,
	linkChildren,
	history,
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
					onClick={(e) => clickEvent(e, link, history.push)}
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
			<Link to={link} onClick={(e) => clickEvent(e, link, history.push)}>
				{children}
			</Link>
		</div>
	);
}

const FatBlockHocs = withRouter<any, any>(FatBlock);

export { FatBlockHocs as FatBlock };
