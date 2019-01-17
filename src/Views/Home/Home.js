import React from 'react';
import Head from '../../Components/Head';
import Content from '../../Components/Content';
import styles from './Home.css';

function Home({ match }) {
	return (
		<div>
			<Head title="🍒 Cherry • Design System" />
			<div className={styles.intro} />
		</div>
	);
}

export default Home;
