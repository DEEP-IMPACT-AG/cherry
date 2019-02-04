import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Head from '../../Components/Head';
import { ContentPusher, Container, Readable, Button, Tabs, Tab } from '../../Components/Layout';
import styles from './StylingStructure.css';
const dataPostCSS = require('./data-stylingstructure-postcss.md');
const dataCSS = require('./data-stylingstructure-css.md');
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

class StylingStructure extends Component {
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
				<Head title="Styling Structure - Cherry • Design System" />
				<ContentPusher>
					<Container>
						<Readable>
							<Tabs>
								<Tab label="PostCSS">
									<div
										className={styles.content}
										dangerouslySetInnerHTML={{ __html: dataPostCSS.__content }}
									/>
								</Tab>
								<Tab label="Compiled CSS">
									<div
										className={styles.content}
										dangerouslySetInnerHTML={{ __html: dataCSS.__content }}
									/>
								</Tab>
							</Tabs>
						</Readable>
					</Container>
				</ContentPusher>
			</Fragment>
		);
	}
}

export default StylingStructure;
