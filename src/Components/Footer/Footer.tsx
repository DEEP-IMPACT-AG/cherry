import React from "react";
import classNames from "classnames";
import { GitHubIcon } from "../../assets/svg";
import { ContentPusher } from "../Layout";
const styles = require("./Footer.css");

interface FooterProps {
	className?: string;
}

function Footer({ className }: FooterProps) {
	return (
		<footer className={classNames(styles.footer, className)}>
			<ContentPusher>
				<a
					href="https://github.com/DEEP-IMPACT-AG/cherry"
					target="_blank"
					rel="noopener"
					aria-label="GitHub Repository"
				>
					<GitHubIcon />
				</a>
			</ContentPusher>
		</footer>
	);
}

export default Footer;
