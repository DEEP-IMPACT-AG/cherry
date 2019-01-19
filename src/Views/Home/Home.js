import React from 'react';
import Head from '../../Components/Head';
import Content from '../../Components/Content';
import Wrapper from '../../Components/Wrapper';
import styles from './Home.css';
const data = require('./data.md');
import Sketch from './Logos/Sketch.svg';
import PostCSS from './Logos/PostCSS.svg';
import ReactLogo from './Logos/React.svg';

function Home({ match }) {
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

export default Home;
