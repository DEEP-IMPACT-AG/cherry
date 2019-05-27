import React from 'react';
import classNames from 'classnames';
import styles from './Container.css';

export class Container extends React.Component {
	render () {
		const { className, children, fluid = false } = this.props;
		return (
			<div
				className={classNames(
					styles.container,
					{
						[styles.containerFluid]: fluid,
					},
					className
				)}
			>
				{children}
			</div>
		);
	}
}

export default Container;
