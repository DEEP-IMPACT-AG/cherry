import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Nav.css';
import logo from '../../assets/images/logo.svg';

function Nav() {
	return (
		<div className={styles.navigation}>
			<Link to="/" className={styles.logo}>
				<img src={logo} alt="Logo" />
			</Link>
		</div>
	);
}

export default Nav;
