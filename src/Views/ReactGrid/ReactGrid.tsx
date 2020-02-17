import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Head from "../../Components/Head";
import {
	ContentPusher,
	Container,
	Readable,
	Button,
} from "../../Components/Layout";
const styles = require("./ReactGrid.css");
const dataReactGrid = require("./data-react-grid.md");

class ReactGrid extends Component {
	render() {
		return (
			<Fragment>
				<Head title="React Components - Cherry • Design System" />
				<ContentPusher>
					<Container>
						<Readable>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{
									__html: dataReactGrid.__content,
								}}
							/>
						</Readable>
					</Container>
				</ContentPusher>
			</Fragment>
		);
	}
}

export default ReactGrid;
