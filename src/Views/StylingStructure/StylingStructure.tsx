import React, { Component, Fragment } from "react";
import Prism from "prismjs";
import Head from "../../Components/Head";
import { Container, Readable } from "../../Components/Layout";
const styles = require("./StylingStructure.css");
const data = require("./data-stylingstructure.md");

class StylingStructure extends Component {
	componentDidMount() {
		Prism.highlightAll();
	}

	render() {
		return (
			<Fragment>
				<Head title="Styling Structure - Cherry • Design System" />
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
			</Fragment>
		);
	}
}

export default StylingStructure;
