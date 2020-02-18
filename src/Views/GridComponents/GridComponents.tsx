import React, { Component, Fragment } from "react";
import classNames from "classnames";
import Head from "../../Components/Head";
import {
	ContentPusher,
	Container,
	Readable,
	Button,
} from "../../Components/Layout";
const styles = require("../CSSGrid/CSSGrid.css");
const dataGridComponents = require("./data-grid-components.md");
const dataMediaQueries = require("./data-grid-components-mediaqueries.md");

class GridComponents extends Component {
	render() {
		return (
			<Fragment>
				<Head title="Grid Components - Cherry • Design System" />
				<ContentPusher>
					<Container>
						<Readable>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{
									__html: dataGridComponents.__content,
								}}
							/>
							<div>
								<h1>Responsiveness</h1>
							</div>
							<p>
								See how aspects of the Cherry's grid system work
								across multiple devices.
							</p>
							<div className="container containerFluid containerChild">
								<div className="row">
									<div className="col12-xs col6-lg highlight">
										<div>{"<Col xs={12} lg={6}>"}</div>
									</div>
									<div className="col12-xs col6-lg highlight">
										<div>{"<Col xs={12} lg={6}>"}</div>
									</div>
								</div>
							</div>
							<div
								className={classNames(
									styles.content,
									styles.scrollHorizontal,
								)}
								dangerouslySetInnerHTML={{
									__html: dataMediaQueries.__content,
								}}
							/>
						</Readable>
					</Container>
				</ContentPusher>
			</Fragment>
		);
	}
}

export default GridComponents;
