import React, { Component, Fragment } from "react";
import classNames from "classnames";
import Head from "../../Components/Head";
import { ContentPusher, Readable, Row, Col } from "../../Components/Layout";
const styles = require("./Home.css");
const data = require("./data-home.md");

class Home extends Component {
	render() {
		return (
			<Fragment>
				<Head title="Cherry • Design System" />
				<ContentPusher>
					<Readable noOrderedLists isHome>
						<div className={styles.limit}>
							<h1>Introduction</h1>
							<h4>
								Cherry is a live inventory of definitions for
								the UI components, design patterns, naming
								conventions, brand assets and code guidelines.
							</h4>
							<p>
								Cherry is technology agnostic – meaning that it
								can be applied independently of the technology
								stack. It defines the underlying design
								philosophy of your project and serves as the
								bridge between design and code. It is bundled
								with all the right tools you need to get started
								as fast as possible.
							</p>
						</div>
						<Row className={styles.row}>
							<Col xs={12} lg={8} className={styles.col}>
								<Row className={styles.row}>
									<Col
										xs={12}
										lg={6}
										className={classNames(
											styles.col,
											styles.innerCol,
										)}
									>
										<div className={styles.colSpacing}>
											<h3>Cherry can be used as:</h3>
											<ul className={styles.firstList}>
												<li>
													🤔 - A design philosophy
												</li>
												<li>💎 - Sketch library</li>
												<li>
													🎨 - PostCSS variables and
													mixins
												</li>
												<li>
													🖊 - Single purpose CSS
													classes
												</li>
												<li>💅 - Styled components</li>
												<li>🚀 - React components</li>
											</ul>
										</div>
									</Col>
									<Col
										xs={12}
										lg={6}
										className={classNames(
											styles.col,
											styles.innerCol,
										)}
									>
										<div className={styles.colSpacing}>
											<h3>PostCSS Main Styling Files</h3>
										</div>
									</Col>
								</Row>
							</Col>
							<Col
								xs={12}
								lg={4}
								className={classNames(
									styles.col,
									styles.innerCol,
									styles.single,
								)}
							>
								<div className={styles.colSpacing}>
									<h3>PostCSS Plugins</h3>
								</div>
							</Col>
						</Row>
					</Readable>
				</ContentPusher>
			</Fragment>
		);
	}
}

export default Home;
