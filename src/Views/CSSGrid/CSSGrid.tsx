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
				<Head title="CSSGrid - Cherry • Design System" />
				<ContentPusher>
					<Container>
						<Readable>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{
									__html: dataIntro.__content,
								}}
							/>
							<div className="container containerFluid containerChild">
								<div className="row">
									<div className="col12 highlight">
										<div>.col12</div>
									</div>
									<div className="col11 highlight">
										<div>.col11</div>
									</div>
									<div className="col1 highlight">
										<div>.col1</div>
									</div>
									<div className="col10 highlight">
										<div>.col10</div>
									</div>
									<div className="col2 highlight">
										<div>.col2</div>
									</div>
									<div className="col9 highlight">
										<div>.col9</div>
									</div>
									<div className="col3 highlight">
										<div>.col3</div>
									</div>
									<div className="col8 highlight">
										<div>.col8</div>
									</div>
									<div className="col4 highlight">
										<div>.col4</div>
									</div>
									<div className="col7 highlight">
										<div>.col7</div>
									</div>
									<div className="col5 highlight">
										<div>.col5</div>
									</div>
									<div className="col6 highlight">
										<div>.col6</div>
									</div>
									<div className="col6 highlight">
										<div>.col6</div>
									</div>
									<div className="col5 highlight">
										<div>.col5</div>
									</div>
									<div className="col7 highlight">
										<div>.col7</div>
									</div>
									<div className="col4 highlight">
										<div>.col4</div>
									</div>
									<div className="col8 highlight">
										<div>.col8</div>
									</div>
									<div className="col3 highlight">
										<div>.col3</div>
									</div>
									<div className="col9 highlight">
										<div>.col9</div>
									</div>
									<div className="col2 highlight">
										<div>.col2</div>
									</div>
									<div className="col10 highlight">
										<div>.col10</div>
									</div>
									<div className="col1 highlight">
										<div>.col1</div>
									</div>
									<div className="col11 highlight">
										<div>.col11</div>
									</div>
								</div>
							</div>
							<div>
								<h1>Responsiveness</h1>
							</div>
							<p>
								See how aspects of the Cherry grid system work
								across multiple devices.
							</p>
							<div className="container containerFluid containerChild">
								<div className="row">
									<div className="col12-xs col6-lg highlight">
										<div>.col12-xs .col6-lg</div>
									</div>
									<div className="col12-xs col6-lg highlight">
										<div>.col12-xs .col6-lg</div>
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
