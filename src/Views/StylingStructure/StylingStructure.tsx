import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Head from "../../Components/Head";
import {
	ContentPusher,
	Container,
	Readable,
	Button,
	Tabs,
	Tab,
} from "../../Components/Layout";
const styles = require("./StylingStructure.css");
const data = require("./data-stylingstructure.md");

class StylingStructure extends Component {
	render() {
		return (
			<Fragment>
				<Head title="Styling Structure - Cherry • Design System" />
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

export default StylingStructure;
