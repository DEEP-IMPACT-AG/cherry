import React from 'react';
import classNames from 'classnames';
import styles from './Row.css';

function Row({
	className,
	children,
	fluid = false,
	narrow = false,
	alignItemsCenter = false,
	justifyContentCenter = false,
}) {
	return (
		<div
			className={classNames(
				styles.row,
				{
					[styles.alignItemsCenter]: alignItemsCenter,
					[styles.justifyContentCenter]: justifyContentCenter,
				},
				className,
			)}
		>
			{children}
		</div>
	);
}

export default Row;
