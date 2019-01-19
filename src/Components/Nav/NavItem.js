import React, { Component } from 'react';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import styles from './Nav.css';
import arrow from '../../assets/images/arrow.svg';

class NavItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			opened: props.active ? true : false,
		};
	}

	toggleAccordion = () => {
		this.setState({ opened: !this.state.opened });
	};

	render() {
		const { opened } = this.state;
		const { children, title, className, link } = this.props;

		return (
			<li
				className={classNames(styles.navItem, className, {
					[styles.opened]: opened,
					[styles.childless]: !children,
				})}
			>
				<button
					to={link}
					onClick={children ? this.toggleAccordion : undefined}
					className={styles.link}
					activeClassName={styles.active}
				>
					{title}
					<img src={arrow} alt="Drop Down" className={styles.arrow} />
				</button>
				{children && children}
			</li>
		);
	}
}

export default NavItem;
