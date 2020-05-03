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
import { SketchIcon } from "../../assets/svg";
const styles = require("./Sketch.css");
const data = require("./data-sketch.md");

const image1 =
	"https://cherry-design.s3-eu-west-1.amazonaws.com/img/cherry-preview.jpg";

class Sketch extends Component {
	render() {
		return (
			<Fragment>
				<Head title="Sketch - Cherry • Design System" image={image1} />
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
									src="https://cherry-design.s3-eu-west-1.amazonaws.com/img/cherry.png"
									alt="Cherry Sketch"
								/>
							</a>

							<Button
								href="https://gum.co/pdYIq/?ref=cherry.design"
								target="_blank"
								rel="noopener"
							>
								<SketchIcon /> Download
							</Button>
						</Readable>
					</Container>
				</ContentPusher>
			</Fragment>
		);
	}
}

export default Sketch;
