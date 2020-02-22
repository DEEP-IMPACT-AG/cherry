import React, { Component, Fragment } from "react";
import classNames from "classnames";
import Prism from "prismjs";
import "cherry-grid/dist/css/styles.css";
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
	componentDidMount() {
		Prism.highlightAll();
	}

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
							<div className="container container-fluid container-child">
								<div className="row data-custom-row">
									<div className="col-12 highlight">
										<div>xs={12}</div>
									</div>
									<div className="col-11 highlight">
										<div>xs={11}</div>
									</div>
									<div className="col-1 highlight">
										<div>xs={1}</div>
									</div>
									<div className="col-10 highlight">
										<div>xs={10}</div>
									</div>
									<div className="col-2 highlight">
										<div>xs={2}</div>
									</div>
									<div className="col-9 highlight">
										<div>xs={9}</div>
									</div>
									<div className="col-3 highlight">
										<div>xs={3}</div>
									</div>
									<div className="col-8 highlight">
										<div>.xs={8}</div>
									</div>
									<div className="col-4 highlight">
										<div>xs={4}</div>
									</div>
									<div className="col-7 highlight">
										<div>xs={7}</div>
									</div>
									<div className="col-5 highlight">
										<div>xs={5}</div>
									</div>
									<div className="col-6 highlight">
										<div>xs={6}</div>
									</div>
									<div className="col-6 highlight">
										<div>xs={6}</div>
									</div>
									<div className="col-5 highlight">
										<div>xs={5}</div>
									</div>
									<div className="col-7 highlight">
										<div>xs={7}</div>
									</div>
									<div className="col-4 highlight">
										<div>xs={4}</div>
									</div>
									<div className="col-8 highlight">
										<div>xs={8}</div>
									</div>
									<div className="col-3 highlight">
										<div>xs={3}</div>
									</div>
									<div className="col-9 highlight">
										<div>xs={9}</div>
									</div>
									<div className="col-2 highlight">
										<div>xs={2}</div>
									</div>
									<div className="col-10 highlight">
										<div>xs={10}</div>
									</div>
									<div className="col-1 highlight">
										<div>xs={1}</div>
									</div>
									<div className="col-11 highlight">
										<div>xs={11}</div>
									</div>
								</div>
							</div>
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
