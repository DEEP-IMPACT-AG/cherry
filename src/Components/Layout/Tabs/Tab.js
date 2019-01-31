import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Tabs.css';

class Tab extends Component {
	public render() {
		const {
			onClick,
			props: { activeTab, label, date },
		} = this;

		const className = classNames(styles.tabButton, { [styles.active]: activeTab === label });

		return (
			<li className={className} onClick={onClick}>
				<span>{label}</span> {date && <small>{date}</small>}
			</li>
		);
	}

	private readonly onClick = () => {
		const { label, onClick } = this.props;
		onClick(label);
	};
}

export default Tab;
