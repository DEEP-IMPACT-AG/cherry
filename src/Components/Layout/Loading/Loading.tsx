import React from "react";
import { Container } from "cherry-grid";
import { ContentPusher } from "../ContentPusher";
import { Readable } from "../Readable";
const styles = require("./Loading.css");

function Loading() {
	return (
		<ContentPusher id="content-pusher">
			<Container>
				<Readable>
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
		</ContentPusher>
	);
}

export { Loading };
