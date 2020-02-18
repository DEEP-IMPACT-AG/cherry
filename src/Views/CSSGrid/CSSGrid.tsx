import React, { Component, Fragment } from "react";
import classNames from "classnames";
import Head from "../../Components/Head";
import {
	ContentPusher,
	Container,
	Readable,
	Button,
	Tabs,
	Tab,
} from "../../Components/Layout";
const styles = require("./CSSGrid.css");
const dataIntro = require("./data-cssgrid-intro.md");
const dataMediaQueries = require("./data-cssgrid-mediaqueries.md");

class CSSGrid extends Component {
	render() {
		return (
			<Fragment>
				<Head title="CSS Cherry Grid - Cherry • Design System">
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
									__html: dataIntro.__content,
								}}
							/>
							<div className="container container-fluid container-child">
								<div className="row data-custom-row">
									<div className="col-12 highlight">
										<div>.col .col-12</div>
									</div>
									<div className="col-11 highlight">
										<div>.col .col-11</div>
									</div>
									<div className="col-1 highlight">
										<div>.col .col-1</div>
									</div>
									<div className="col-10 highlight">
										<div>.col .col-10</div>
									</div>
									<div className="col-2 highlight">
										<div>.col .col-2</div>
									</div>
									<div className="col-9 highlight">
										<div>.col .col-9</div>
									</div>
									<div className="col-3 highlight">
										<div>.col .col-3</div>
									</div>
									<div className="col-8 highlight">
										<div>.col .col-8</div>
									</div>
									<div className="col-4 highlight">
										<div>.col .col-4</div>
									</div>
									<div className="col-7 highlight">
										<div>.col .col-7</div>
									</div>
									<div className="col-5 highlight">
										<div>.col .col-5</div>
									</div>
									<div className="col-6 highlight">
										<div>.col .col-6</div>
									</div>
									<div className="col-6 highlight">
										<div>.col .col-6</div>
									</div>
									<div className="col-5 highlight">
										<div>.col .col-5</div>
									</div>
									<div className="col-7 highlight">
										<div>.col .col-7</div>
									</div>
									<div className="col-4 highlight">
										<div>.col .col-4</div>
									</div>
									<div className="col-8 highlight">
										<div>.col .col-8</div>
									</div>
									<div className="col-3 highlight">
										<div>.col-3</div>
									</div>
									<div className="col-9 highlight">
										<div>.col .col-9</div>
									</div>
									<div className="col-2 highlight">
										<div>.col .col-2</div>
									</div>
									<div className="col-10 highlight">
										<div>.col .col-10</div>
									</div>
									<div className="col-1 highlight">
										<div>.col .col-1</div>
									</div>
									<div className="col-11 highlight">
										<div>.col .col-11</div>
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
										<div>
											class="col col-xs-12 col-lg-6"
										</div>
									</div>
									<div className="col-xs-12 col-lg-6 highlight">
										<div>
											class="col col-xs-12 col-lg-6"
										</div>
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

export default CSSGrid;
