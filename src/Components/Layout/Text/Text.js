import React from 'react';
import classNames from 'classnames';
import styles from './Text.css';

function Text({ children, className, textAlign, eyebrow, subtitle, small }) {
	return (
		<div
			className={classNames(
				{
					[styles.eyebrow]: eyebrow,
					[styles.subtitle]: subtitle,
					[styles.textLeft]: textAlign === 'left',
					[styles.textCenter]: textAlign === 'center',
					[styles.textRight]: textAlign === 'right',
					[styles.small]: small,
				},
				styles.text,
			)}
		>
			{children}
		</div>
	);
}

export default Text;
