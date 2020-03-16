import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Head from "../../Components/Head";
import {
	ContentPusher,
	Container,
	Readable,
	Button,
	Row,
	Col,
} from "../../Components/Layout";
import { Sketch as SketchIcon } from "../../assets/svg";
const styles = require("./Sketch.css");
const data = require("./data-sketch.md");

class Sketch extends Component {
	render() {
		return (
			<Fragment>
				<Head title="Sketch - Cherry • Design System" />
				<ContentPusher>
					<Container className={styles.images}>
						<Readable>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{
									__html: data.__content,
								}}
							/>
							<a
								href="https://gum.co/pdYIq"
								target="_blank"
								rel="noopener"
								title="Preview"
							>
								<img
									src="https://cherry-design.s3-eu-west-1.amazonaws.com/img/cherry.jpg"
									alt="Cherry Sketch"
								/>
							</a>

							<Button
								href="https://gum.co/pdYIq"
								target="_blank"
								rel="noopener"
							>
								<SketchIcon /> Download Sketch Template
							</Button>
						</Readable>
					</Container>
				</ContentPusher>
			</Fragment>
		);
	}
}

export default Sketch;
