import React, { Component } from 'react';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import styles from './Nav.css';

class NavItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			opened: false,
		};
	}

	toggleAccordion = () => {
		this.setState({ opened: !this.state.opened });
	};

	render() {
		const { opened } = this.state;
		const { children, title, className } = this.props;

		return (
			<li className={classNames(styles.navItem, className, { [styles.opened]: opened, [styles.childless]: !children })}>
				<a href="#" onClick={children ? this.toggleAccordion : undefined} className={styles.link}>{title}</a>
				{children && children}
			</li>
		);
	}
}

export default NavItem;
