import React from 'react';
import styles from './Loading.css';
import logo from '../../assets/images/logo.svg';
import AppearAfter from '../../Components/AppearAfter';

function Loading() {
	return (
		<div className={styles.loading}>
			<div className={styles.wrapper}>
				<div className={styles.spinner}>
					<div className={styles.bubble1} />
					<div className={styles.bubble2} />
				</div>
			</div>
		</div>
	);
}

export default Loading;
