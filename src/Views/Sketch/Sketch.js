import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Head from '../../Components/Head';
import { ContentPusher, Container, Readable, Button } from '../../Components/Layout';
import { Sketch as SketchIcon } from '../../assets/svg';
import styles from './Sketch.css';
const data = require('./data-sketch.md');
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

class Sketch extends Component {
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
				<Head title="Sketch - Cherry • Design System" />
				<ContentPusher>
					<Container>
						<Readable>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{ __html: data.__content }}
							/>
							<Button
								href="https://drive.google.com/file/d/1p2CrJEANwMy2VeoexkH51cun847shgij/view?usp=sharing"
								target="_blank"
							>
								<SketchIcon /> Download Sketch Template
							</Button>
						</Readable>
					</Container>
				</ContentPusher>
			</Fragment>
		);
	}
}

export default Sketch;