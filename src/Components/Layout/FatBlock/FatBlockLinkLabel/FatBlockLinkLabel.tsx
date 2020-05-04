import React from "react";
const styles = require("../FatBlock.css");

interface FatBlockChildrenProps {
	children: React.ReactNode;
}

function FatBlockLinkLabel({ children }: FatBlockChildrenProps) {
	return <span className={styles.blockLinkLabel}>{children}</span>;
}

export { FatBlockLinkLabel };
