import React from 'react';
import Head from '../../Components/Head';
import Content from '../../Components/Content';
import styles from './Home.css';

function Home({ match }) {
	return (
		<div>
			<Head title="🍒 Cherry • Design System" />
			<Content>
				<div>
					<h1>Introduction</h1>
				</div>
			</Content>
		</div>
	);
}

export default Home;
