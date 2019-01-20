import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Head from '../../Components/Head';
import { Content, Wrapper} from '../../Components/Layout';
import styles from './CodeGuidelines.css';
const data = require('./data-codeguidelines.md');
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
class CodeGuidelines extends Component {
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
			<div>
				<Head title="Code Guidelines - Cherry • Design System" />
				<Content>
					<Wrapper>
						<div className={styles.content} dangerouslySetInnerHTML={{ __html: data.__content }} />
					</Wrapper>
				</Content>
			</div>
		);
	}
}

export default CodeGuidelines;
