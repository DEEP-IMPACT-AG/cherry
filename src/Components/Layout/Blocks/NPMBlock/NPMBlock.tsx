import React from "react";
import { NPMName, External, NPMIcon } from "../../../../assets/svg";
import { Link } from "react-router-dom";
const styles = require("./NPMBlock.css");

function NPMBlock() {
	return (
		<>
			<div className={styles.npm}>
				<a
					href="https://www.npmjs.com/package/cherry-grid?ref=cherry.design"
					target="_blank"
				>
					<NPMName className={styles.icon} />
					<em>Package</em>
					<span>🍒 Cherry Grid</span>
					<External className={styles.external} />
				</a>
			</div>
			<Link to="/npm/cherry-grid" className={styles.bottomLink}>
				<NPMIcon />
				<span>CSS Grid Documentation</span>
			</Link>
		</>
	);
}

export { NPMBlock };
