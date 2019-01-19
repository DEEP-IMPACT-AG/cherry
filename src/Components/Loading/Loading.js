import React from 'react';
import styles from './Loading.css';
import logo from '../../assets/images/logo.svg';
import AppearAfter from '../../Components/AppearAfter';

function Loading() {
	return (
		<div className={styles.loading}>
			<div className={styles.wrapper}>
				<div class={styles.spinner}>
					<div class={styles.bubble1}></div>
					<div class={styles.bubble2}></div>
				</div>
			</div>
		</div>
	);
}

export default Loading;
