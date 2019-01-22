import React from 'react';
import classNames from 'classnames';
import styles from './Container.css';

function Container({ className, children, fluid = false, fixed = false }) {
	return (
		<div
			className={classNames(
				styles.container,
				{
					[styles.containerFluid]: fluid,
					[styles.containerFixed]: fixed,
				},
				className,
			)}
		>
			{children}
		</div>
	);
}

export default Container;
