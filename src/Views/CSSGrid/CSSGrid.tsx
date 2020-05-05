import React, { Component, Fragment } from "react";
import Prism from "prismjs";
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
	componentDidMount() {
		Prism.highlightAll();
	}

	render() {
		return (
			<Fragment>
				<Head title="CSS Cherry Grid - Cherry • Design System">
					<link
						rel="stylesheet"
						type="text/css"
						href="https://cherry-design.s3-eu-west-1.amazonaws.com/cherry-grid/v.0.1.22.css"
					/>
				</Head>
				<ContentPusher id="content-pusher">
					<Container>
						<Readable>
							<div
								className={styles.introContent}
								dangerouslySetInnerHTML={{
									__html: dataIntro.__content,
								}}
							/>
							<div className="container container-fluid container-child">
								<div className="row data-custom-row">
									<div className="col-12 highlight">
										<div>.col-12</div>
									</div>
									<div className="col-11 highlight">
										<div>.col-11</div>
									</div>
									<div className="col-1 highlight">
										<div>.col-1</div>
									</div>
									<div className="col-10 highlight">
										<div>.col-10</div>
									</div>
									<div className="col-2 highlight">
										<div>.col-2</div>
									</div>
									<div className="col-9 highlight">
										<div>.col-9</div>
									</div>
									<div className="col-3 highlight">
										<div>.col-3</div>
									</div>
									<div className="col-8 highlight">
										<div>.col-8</div>
									</div>
									<div className="col-4 highlight">
										<div>.col-4</div>
									</div>
									<div className="col-7 highlight">
										<div>.col-7</div>
									</div>
									<div className="col-5 highlight">
										<div>.col-5</div>
									</div>
									<div className="col-6 highlight">
										<div>.col-6</div>
									</div>
									<div className="col-6 highlight">
										<div>.col-6</div>
									</div>
									<div className="col-5 highlight">
										<div>.col-5</div>
									</div>
									<div className="col-7 highlight">
										<div>.col-7</div>
									</div>
									<div className="col-4 highlight">
										<div>.col-4</div>
									</div>
									<div className="col-8 highlight">
										<div>.col-8</div>
									</div>
									<div className="col-3 highlight">
										<div>.col-3</div>
									</div>
									<div className="col-9 highlight">
										<div>.col-9</div>
									</div>
									<div className="col-2 highlight">
										<div>.col-2</div>
									</div>
									<div className="col-10 highlight">
										<div>.col-10</div>
									</div>
									<div className="col-1 highlight">
										<div>.col-1</div>
									</div>
									<div className="col-11 highlight">
										<div>.col-11</div>
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
									<div className="col-xs-6 col-lg-4 highlight">
										<div>class="col-xs-6 col-lg-4"</div>
									</div>
									<div className="col-xs-6 col-lg-4 highlight">
										<div>class="col-xs-6 col-lg-4"</div>
									</div>
									<div className="col-xs-12 col-lg-4 highlight">
										<div>class="col-xs-12 col-lg-4"</div>
									</div>
								</div>
							</div>
							<div
								className={styles.endContent}
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
