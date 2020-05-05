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
			<ContentPusher noMinHeight>
				<div className={styles.flex}>
					<p className={styles.copyright}>
						All rights reserved © 2019
					</p>
					<div>
						<p className={styles.repoLink}>
							👉 Edit this page on{" "}
							<a
								href="https://github.com/DEEP-IMPACT-AG/cherry"
								target="_blank"
								rel="noopener"
								aria-label="GitHub Repository"
							>
								GitHub <GitHubIcon />
							</a>
						</p>
					</div>
				</div>
			</ContentPusher>
		</footer>
	);
}

export default Footer;
