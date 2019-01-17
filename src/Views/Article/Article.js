import React from 'react';
import Head from '../../Components/Head';
import Content from '../../Components/Content';
import styles from './Article.css';

function Article() {
	return (
		<div>
			<Head title="React SSR Boilerplate • Article" />
			<Content>
				<div className={styles.article}>
					<h1 className={styles.title}>Article</h1>
				</div>
			</Content>
		</div>
	);
}

export default Article;
