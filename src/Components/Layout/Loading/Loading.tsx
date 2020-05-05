import React from "react";
import { Container } from "cherry-grid";
import { ContentPusher } from "../ContentPusher";
import { Readable } from "../Readable";
const styles = require("./Loading.css");

function Loading() {
	return (
		<Container>
			<Readable minHeight>
				<div className={styles.loading}>
					<div className={styles.spinner}>
						<div />
						<div />
						<div />
						<div />
					</div>
				</div>
			</Readable>
		</Container>
	);
}

export { Loading };
