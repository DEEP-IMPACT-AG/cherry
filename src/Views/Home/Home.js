import React, { Component } from 'react';
import Head from '../../Components/Head';
import { Content, Wrapper } from '../../Components/Layout';
import styles from './Home.css';
const data = require('./data-home.md');
import Sketch from './Logos/Sketch.svg';
import PostCSS from './Logos/PostCSS.svg';
import ReactLogo from './Logos/React.svg';
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
			<div>
				<Head title="Cherry • Design System" />
				<Content>
					<Wrapper>
						<div className={styles.content} dangerouslySetInnerHTML={{ __html: data.__content }} />
						<ul className={styles.technologies}>
							<li>
								<img src={Sketch} alt="Sketch"/>
							</li>
							<li>
								<img src={PostCSS} alt="PostCSS"/>
							</li>
							<li>
								<img src={ReactLogo} alt="React"/>
							</li>
						</ul>
					</Wrapper>
				</Content>
			</div>
		);
	}
}

export default Home;
