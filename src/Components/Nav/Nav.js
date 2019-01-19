import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Nav.css';
import logo from '../../assets/images/logo.svg';
import NavItem from './NavItem';

function Nav() {
	return (
		<header className={styles.navigation}>
			<Link to="/" className={styles.logo}>
				<img src={logo} alt="Logo" />
				<h1>Cherry - Design System</h1>
				<span>Design System</span>
			</Link>
			<ul className={styles.list}>
				<NavItem title="Overview">
					<ul className={styles.sub}>
						<li><a href="#">Introduction</a></li>
						<li><a href="#">Code Guidelines</a></li>
					</ul>
				</NavItem>
				<li>
					<a href="#">Design</a>
				</li>
				<li>
					<a href="#">CSS</a>
				</li>
				<li>
					<a href="#">Components</a>
				</li>
			</ul>
		</header>
	);
}

export default Nav;
