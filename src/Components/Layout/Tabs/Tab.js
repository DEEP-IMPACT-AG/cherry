import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Tabs.css';

class Tab extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			onClick,
			activeTab,
			label,
			date,
		} = this.props;

		const className = classNames(styles.tabButton, { [styles.active]: activeTab === label });

		return (
			<li className={className} onClick={this.onClick}>
				<span>{label}</span> {date && <small>{date}</small>}
			</li>
		);
	}

	onClick = () => {
		const { label, onClick } = this.props;
		onClick(label);
	};
}

export default Tab;
