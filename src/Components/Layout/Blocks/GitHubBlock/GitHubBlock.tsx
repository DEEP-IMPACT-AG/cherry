import React from "react";
import { GitHubName, External, CSS } from "../../../../assets/svg";
import { Link } from "react-router-dom";
const styles = require("./GitHubBlock.css");

function GitHubBlock() {
	return (
		<>
			<div className={styles.github}>
				<a
					href="https://github.com/DEEP-IMPACT-AG/cherry-grid?ref=cherry.design"
					target="_blank"
				>
					<GitHubName className={styles.icon} />
					<em>Repository</em>
					<span>🍒 Cherry Grid</span>
					<External className={styles.external} />
				</a>
			</div>
			<Link to="/css/cherry-grid" className={styles.bottomLink}>
				<CSS />
				<span>CSS Grid Documentation</span>
			</Link>
		</>
	);
}

export { GitHubBlock };
