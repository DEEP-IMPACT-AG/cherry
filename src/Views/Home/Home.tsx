import React, { Component, Fragment } from "react";
import Head from "../../Components/Head";
import { ContentPusher, Container, Readable } from "../../Components/Layout";
const styles = require("./Home.css");
const data = require("./data-home.md");

class Home extends Component {
	render() {
		return (
			<Fragment>
				<Head title="Cherry • Design System" />
				<ContentPusher>
					<Container>
						<Readable noLists>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{
									__html: data.__content,
								}}
							/>
						</Readable>
					</Container>
				</ContentPusher>
			</Fragment>
		);
	}
}

export default Home;
