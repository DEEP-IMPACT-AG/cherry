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

class NPMGrid extends Component {
	render() {
		return (
			<Fragment>
				<Head title="NPM Cherry Grid - Cherry • Design System">
					<link
						rel="stylesheet"
						type="text/css"
						href="https://cherry-design.s3-eu-west-1.amazonaws.com/cherry-grid.css"
					/>
				</Head>
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
							<div className="container container-fluid container-child">
								<div className="row data-custom-row">
									<div className="col-xs-12 col-lg-6 highlight">
										<div>{"<Col xs={12} lg={6}>"}</div>
									</div>
									<div className="col-xs-12 col-lg-6 highlight">
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

export default NPMGrid;
