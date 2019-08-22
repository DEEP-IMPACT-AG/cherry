import React, { Component, Fragment } from 'react';
import Head from '../../Components/Head';
import { ContentPusher, Container, Readable } from '../../Components/Layout';
import { Sketch, PostCSS, ReactLogo } from '../../assets/svg';
const styles = require('./Home.css');
const data = require('./data-home.md');

class Home extends Component {
	render() {
		return (
			<Fragment>
				<Head title="Cherry • Design System" />
				<ContentPusher>
					<Container>
						<Readable>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{ __html: data.__content }}
							/>
							<ul className={styles.technologies}>
								<li>
									<Sketch />
								</li>
								<li>
									<PostCSS />
								</li>
								<li>
									<ReactLogo />
								</li>
							</ul>
						</Readable>
					</Container>
				</ContentPusher>
			</Fragment>
		);
	}
}

export default Home;
