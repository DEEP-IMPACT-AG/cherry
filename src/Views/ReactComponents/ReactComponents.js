import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Head from '../../Components/Head';
import { ContentPusher, Container, Readable, Button } from '../../Components/Layout';
import styles from './ReactComponents.css';
const dataReactComponents = require('./data-react-components.md');
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

class ReactComponents extends Component {
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
				<Head title="React Components - Cherry • Design System" />
				<ContentPusher>
					<Container>
						<Readable>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{ __html: dataReactComponents.__content }}
							/>
						</Readable>
					</Container>
				</ContentPusher>
			</Fragment>
		);
	}
}

export default ReactComponents;
