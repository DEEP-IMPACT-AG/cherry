import React, { Fragment } from "react";
import Head from "../../Components/Head";
import { Status } from "../../Components/Status";
import { Container, Readable } from "../../Components/Layout";
const styles = require("./NotFound.css");

function NotFound() {
	return (
		<Fragment>
			<Head title="Cherry • Not Found" />
			<Status code={404} />
			<Container>
				<Readable>
					<h1>Not Found</h1>
					<p>404 Error - Page not found.</p>
				</Readable>
			</Container>
		</Fragment>
	);
}

export default NotFound;
