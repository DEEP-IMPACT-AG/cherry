import React from "react";
const styles = require("../FatBlock.css");

interface FatBlockChildrenProps {
	children: React.ReactNode;
}

function FatBlockLabel({ children }: FatBlockChildrenProps) {
	return <span className={styles.blockLabel}>{children}</span>;
}

export { FatBlockLabel };
