import React from 'react';
import Head from '../../Components/Head';
import Content from '../../Components/Content';
import styles from './Home.css';

function Home({ match }) {
	return (
		<div>
			<Head title="React SSR Boilerplate • Home" />
			<div className={styles.intro}>
				<h1 className={styles.title}>React Boilerplate</h1>
				Hello
			</div>
		</div>
	);
}

export default Home;
