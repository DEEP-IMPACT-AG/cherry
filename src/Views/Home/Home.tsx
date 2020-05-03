import React, { Component, Fragment } from "react";
import classNames from "classnames";
import Head from "../../Components/Head";
import {
	ContentPusher,
	Readable,
	Row,
	Col,
	IconElement,
	SketchBlock,
} from "../../Components/Layout";
import { Space } from "../../Components/Layout/Space/Space";
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
						<Space size={50} desktopOnly />
						<Row className={styles.row}>
							<Col xs={12} xl={8} className={styles.col}>
								<Row className={styles.row}>
									<Col
										xs={12}
										lg={6}
										className={classNames(
											styles.col,
											styles.innerCol,
											styles.noMobileBorder,
										)}
									>
										<div className={styles.colSpacing}>
											<h3>
												<strong>Cherry</strong> can be
												used as:
											</h3>
											<hr />
											<IconElement
												emoji="🤔"
												description="A design philosophy."
											/>
											<hr />
											<IconElement
												emoji="💎"
												description="Sketch library."
											/>
											<hr />
											<IconElement
												emoji="🎨"
												description="PostCSS variables and mixins."
											/>
											<hr />
											<IconElement
												emoji="🖊"
												description="Single purpose CSS classes."
											/>
											<hr />
											<IconElement
												emoji="💅"
												description="Styled components."
											/>
											<hr />
											<IconElement
												emoji="🚀"
												description="React components."
											/>
											<hr />
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
											<hr />
											<IconElement
												title="Styles.css"
												description="Main entry point with imports."
												icon="css"
												link="#"
											/>
											<hr />
											<IconElement
												title="Variables.css"
												description="Variable definitions."
												icon="css"
												link="#"
											/>
											<hr />
											<IconElement
												title="Mixins.css"
												description="Chunks of reusable css."
												icon="css"
												link="#"
											/>
											<hr />
											<IconElement
												title="Globals.css"
												description="Global styles."
												icon="css"
												link="#"
											/>
											<hr />
										</div>
									</Col>
								</Row>
								<SketchBlock />
							</Col>
							<Col
								xs={12}
								xl={4}
								className={classNames(
									styles.col,
									styles.innerCol,
									styles.single,
								)}
							>
								<div className={styles.colSpacing}>
									<h3>PostCSS Plugins</h3>
									<hr />
									<IconElement
										icon="postcss"
										title="postcss-preset-env"
										link="#"
									/>
									<hr />
									<IconElement
										icon="postcss"
										title="postcss-import"
										link="#"
									/>
									<hr />
									<IconElement
										icon="postcss"
										title="postcss-for"
										link="#"
									/>
									<hr />
									<IconElement
										icon="postcss"
										title="postcss-mixins"
										link="#"
									/>
									<hr />
									<IconElement
										icon="postcss"
										title="postcss-calc"
										link="#"
									/>
									<hr />
									<IconElement
										icon="postcss"
										title="postcss-flexbugs-fixes"
										link="#"
									/>
									<hr />
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
