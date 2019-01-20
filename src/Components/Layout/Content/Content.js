import React from 'react';
import classNames from 'classnames';
import styles from './Content.css';
import AppearAfter from '../../AppearAfter';

function Content({ className, children }) {
	return (
		<AppearAfter
			className={classNames(styles.content, className)}
			visibleClassName={styles.visible}
			delay={600}
		>
			<div>{children}</div>
		</AppearAfter>
	);
}

export default Content;
