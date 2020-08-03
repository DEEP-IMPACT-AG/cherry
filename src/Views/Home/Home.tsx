import React, { Component, Fragment } from "react";
import classNames from "classnames";
import Head from "../../Components/Head";
import {
	Readable,
	Row,
	Col,
	Space,
	IconElement,
	FatBlock,
	FatBlockLabel,
	FatBlockSuspendedLabel,
	FatBlockLinkLabel,
} from "../../Components/Layout";
import {
	SketchIcon,
	GitHubName,
	CSS,
	NPMName,
	NPMIcon,
} from "../../assets/svg";
const styles = require("./Home.css");

class Home extends Component {
	render() {
		return (
			<Fragment>
				<Head title="Cherry • Design System" />
				<Readable noOrderedLists isHome>
					<div className={styles.limit}>
						<h1>Introduction</h1>
						<h4>
							Cherry is a live inventory of definitions for the UI
							components, design patterns, naming conventions,
							brand assets and code guidelines.
						</h4>
						<p>
							Cherry is technology agnostic – meaning that it can
							be applied independently of the technology stack. It
							defines the underlying design philosophy of your
							project and serves as the bridge between design and
							code. It is bundled with all the right tools you
							need to get started as fast as possible.
						</p>
					</div>
					<Space size={50} desktopOnly />
					<Row className={styles.row} gapsXs="none">
						<Col xs={12} xl={8} className={styles.col}>
							<Row className={styles.row} gapsXs="none">
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
											<strong>Cherry</strong> can be used
											as
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
											emoji="🖊"
											description="Single purpose CSS classes."
										/>
										<hr />
										<IconElement
											emoji="🎨"
											description="PostCSS variables and mixins."
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
											link="https://github.com/DEEP-IMPACT-AG/cherry/blob/master/src/assets/css/styles.css"
										/>
										<hr />
										<IconElement
											title="Variables.css"
											description="Variable definitions."
											icon="css"
											link="https://github.com/DEEP-IMPACT-AG/cherry/blob/master/src/assets/css/variables.css"
										/>
										<hr />
										<IconElement
											title="Mixins.css"
											description="Chunks of reusable css."
											icon="css"
											link="https://github.com/DEEP-IMPACT-AG/cherry/blob/master/src/assets/css/mixins.css"
										/>
										<hr />
										<IconElement
											title="Globals.css"
											description="Global styles."
											icon="css"
											link="https://github.com/DEEP-IMPACT-AG/cherry/blob/master/src/assets/css/globals.css"
										/>
										<hr />
									</div>
								</Col>
							</Row>
							<FatBlock link="/design/sketch" color="orange">
								<SketchIcon />
								<FatBlockLabel>
									🍒 Cherry Design System
								</FatBlockLabel>
							</FatBlock>
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
									link="https://preset-env.cssdb.org/"
								/>
								<hr />
								<IconElement
									icon="postcss"
									title="postcss-import"
									link="https://github.com/postcss/postcss-import"
								/>
								<hr />
								<IconElement
									icon="postcss"
									title="postcss-for"
									link="https://github.com/antyakushev/postcss-for"
								/>
								<hr />
								<IconElement
									icon="postcss"
									title="postcss-mixins"
									link="https://github.com/postcss/postcss-mixins"
								/>
								<hr />
								<IconElement
									icon="postcss"
									title="postcss-calc"
									link="https://github.com/postcss/postcss-calc"
								/>
								<hr />
								<IconElement
									icon="postcss"
									title="postcss-flexbugs-fixes"
									link="https://github.com/luisrudge/postcss-flexbugs-fixes"
								/>
								<hr />
							</div>
						</Col>
					</Row>
					<h2>The Grid</h2>
					<Row className={styles.row} gapsXs="none">
						<Col xs={12} lg={6} className={styles.col}>
							<FatBlock
								color="black"
								external="https://github.com/DEEP-IMPACT-AG/cherry-grid"
								link="/css/cherry-grid"
								linkChildren={
									<>
										<CSS />
										<FatBlockLinkLabel>
											CSS Grid Documentation
										</FatBlockLinkLabel>
									</>
								}
							>
								<GitHubName />
								<FatBlockSuspendedLabel>
									Repository
								</FatBlockSuspendedLabel>
								<FatBlockLabel>🍒 Cherry Grid</FatBlockLabel>
							</FatBlock>
						</Col>
						<Col xs={12} lg={6} className={styles.col}>
							<FatBlock
								color="red"
								external="https://www.npmjs.com/package/cherry-grid"
								link="/npm/cherry-grid"
								linkChildren={
									<>
										<NPMIcon />
										<FatBlockLinkLabel>
											CSS Grid Documentation
										</FatBlockLinkLabel>
									</>
								}
							>
								<NPMName />
								<FatBlockSuspendedLabel>
									Package
								</FatBlockSuspendedLabel>
								<FatBlockLabel>🍒 Cherry Grid</FatBlockLabel>
							</FatBlock>
						</Col>
					</Row>
				</Readable>
			</Fragment>
		);
	}
}

export default Home;
