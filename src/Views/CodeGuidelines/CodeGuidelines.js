import React from 'react';
import Head from '../../Components/Head';
import Content from '../../Components/Content';
import Wrapper from '../../Components/Wrapper';
import styles from './CodeGuidelines.css';
const data = require('./data.md');

function Home({ match }) {
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

export default Home;
