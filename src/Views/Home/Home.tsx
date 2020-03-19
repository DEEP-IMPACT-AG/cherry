import React, { Component, Fragment } from "react";
import Head from "../../Components/Head";
import { ContentPusher, Container, Readable, Row, Col } from "../../Components/Layout";
const styles = require("./Home.css");
const data = require("./data-home.md");

class Home extends Component {
	render() {
		return (
			<Fragment>
				<Head title="Cherry • Design System" />
				<ContentPusher>
					<Container>
						<Readable noOrderedLists>
							<div className={styles.limit}>
								<h1>Introduction</h1>
								<h4>
									Cherry is a live inventory of definitions
									for the UI components, design patterns,
									naming conventions, brand assets and code
									guidelines.
								</h4>
								<p>
									Cherry is technology agnostic – meaning that
									it can be applied independently of the
									technology stack. It defines the underlying
									design philosophy of your project and serves
									as the bridge between design and code. It is
									bundled with all the right tools you need to
									get started as fast as possible.
								</p>
							</div>
							<div className={styles.row}>
								<Col xs={12} lg={8} className={styles.col}>
									<Row className={styles.row}>
										<Col xs={12} lg={6} className={styles.col}>
											Hello
										</Col>
										<Col xs={12} lg={6} className={styles.col}>
											Hello2
										</Col>
									</Row>
								</Col>
								<Col xs={12} lg={4} className={styles.col}>2</Col>
							</div>
						</Readable>
					</Container>
				</ContentPusher>
			</Fragment>
		);
	}
}

export default Home;
