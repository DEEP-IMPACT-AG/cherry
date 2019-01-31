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
								<Tab label="Tab 1">
									Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor.
								</Tab>
								<Tab label="Tab 2">
								Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor.

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
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
