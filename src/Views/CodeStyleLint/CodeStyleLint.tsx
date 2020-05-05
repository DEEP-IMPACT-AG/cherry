import React, { Component, Fragment } from "react";
import Prism from "prismjs";
import Head from "../../Components/Head";
import { ContentPusher, Container, Readable } from "../../Components/Layout";
const styles = require("./CodeStyleLint.css");
const data = require("./data-codestylelint.md");

class NamingConvention extends Component {
	componentDidMount() {
		Prism.highlightAll();
	}

	render() {
		return (
			<Fragment>
				<Head title="Naming Convention - Cherry • Design System" />
				<ContentPusher id="content-pusher">
					<Container>
						<Readable>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{
									__html: data.__content,
								}}
							/>
						</Readable>
					</Container>
				</ContentPusher>
			</Fragment>
		);
	}
}

export default NamingConvention;
