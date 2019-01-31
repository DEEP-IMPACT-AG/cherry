import React, { Component, Fragment } from 'react';
import Head from '../../Components/Head';
import { ContentPusher, Container, Readable, Tabs, Tab } from '../../Components/Layout';
import { Sketch, PostCSS, ReactLogo } from '../../assets/svg';
import styles from './Home.css';
const data = require('./data-home.md');
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

class Home extends Component {
	componentDidMount() {
		const cdx = document.getElementsByTagName('pre');
		if (cdx.length) {
			let i;
			for (i = 0; i < cdx.length; i++) {
				hljs.highlightBlock(cdx[i]);
			}
		}
	}

	render() {
		return (
			<Fragment>
				<Head title="Cherry • Design System" />
				<ContentPusher>
					<Container>
						<Readable>
							<Tabs>
								<Tab label="naanana">
								naanana
								</Tab>
								<Tab label="ujhuhuhu">
									Hello world content2
								</Tab>
							</Tabs>
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
