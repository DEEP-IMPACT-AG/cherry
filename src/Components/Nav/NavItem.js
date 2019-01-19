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
		const { children, title, className, link } = this.props;

		return (
			<li className={classNames(styles.navItem, className, { [styles.opened]: opened, [styles.childless]: !children })}>
				<NavLink to={link} onClick={children ? this.toggleAccordion : undefined} className={styles.link} activeClassName={styles.active}>{title}</NavLink>
				{children && children}
			</li>
		);
	}
}

export default NavItem;
