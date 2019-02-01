import React from 'react';
import classNames from 'classnames';
import styles from './Text.css';

function Text({ children, className, textAlign, eyebrow, subtitle }) {
	return (
		<div
			className={classNames(
				{
					[styles.eyebrow]: eyebrow,
					[styles.textLeft]: textAlign === 'left',
					[styles.textCenter]: textAlign === 'center',
					[styles.textRight]: textAlign === 'right',
				},
				styles.text,
			)}
		>
			{children}
		</div>
	);
}

export default Text;
