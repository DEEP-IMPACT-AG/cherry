import React, { Component, Fragment } from "react";
import Head from "../../Components/Head";
import { ContentPusher, Container, Readable } from "../../Components/Layout";
const styles = require("./CodeGuidelines.css");
const data = require("./data-codeguidelines.md");

class CodeGuidelines extends Component {
	render() {
		return (
			<Fragment>
				<Head title="Code Guidelines - Cherry • Design System" />
				<ContentPusher>
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

export default CodeGuidelines;
