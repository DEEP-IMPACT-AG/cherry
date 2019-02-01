import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Head from '../../Components/Head';
import { ContentPusher, Container, Readable, Button } from '../../Components/Layout';
import styles from './StylingStructure.css';
const data = require('./data-stylingstructure.md');
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
				<Head title="CSS Styling Structure - Cherry • Design System" />
				<ContentPusher>
					<Container>
						<Readable>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{ __html: data.__content }}
							/>
						</Readable>
					</Container>
				</ContentPusher>
			</Fragment>
		);
	}
}

export default StylingStructure;
