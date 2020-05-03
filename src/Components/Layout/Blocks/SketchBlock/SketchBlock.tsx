import React from "react";
import { SketchIcon } from "../../../../assets/svg";
import { Link } from "react-router-dom";
const styles = require("./SketchBlock.css");

function SketchBlock() {
	return (
		<div className={styles.sketch}>
			<Link to="/design/sketch">
				<SketchIcon />
				<span>🍒 Cherry Design System</span>
			</Link>
		</div>
	);
}

export { SketchBlock };
