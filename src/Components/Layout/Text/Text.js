import React from 'react';
import classNames from 'classnames';
import styles from './Text.css';

function Text({ children, className, eyebrow, subtitle }) {
	return (
		<div
			className={classNames(
				{
					[styles.eyebrow]: eyebrow,
				},
				styles.text,
			)}
		>
			{children}
		</div>
	);
}

export default Text;
