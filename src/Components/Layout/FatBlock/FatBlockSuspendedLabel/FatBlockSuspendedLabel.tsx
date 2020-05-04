import React from "react";
const styles = require("../FatBlock.css");

interface FatBlockChildrenProps {
	children: React.ReactNode;
}

function FatBlockSuspendedLabel({ children }: FatBlockChildrenProps) {
	return (
		<em className={styles.suspendedLabel} data-suspended-label>
			{children}
		</em>
	);
}

export { FatBlockSuspendedLabel };
