import React, { Component } from 'react';
import classNames from 'classnames';
import AppearAfter from '../AppearAfter';
import { Link, NavLink } from 'react-router-dom';
import styles from './Nav.css';
import logo from '../../assets/images/logo.svg';
import riangle from '../../assets/images/riangle.svg';
import di from '../../assets/images/di.svg';
import NavItem from './NavItem';
import { Logo } from '../../assets/svg';

class Nav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menu: false,
		};
	}

	toggleMenu = () => {
		this.setState({ menu: !this.state.menu });
	};

	closeMenu = () => {
		this.setState({ menu: false });
	};
	
	render() {
		const { menu } = this.state;

		return (
			<AppearAfter className={styles.navigation} visibleClassName={styles.visible}>
				<header>
					<Link to="/" className={styles.logo}>
						<Logo />
						<h1>Cherry - Design System</h1>
					</Link>
					<button
						onClick={this.toggleMenu}
						className={classNames(styles.burger, {
							[styles.active]: menu,
						})}
					>
						<span />
					</button>
					<ul className={styles.list}>
						<NavItem title="Overview" link="/" active>
							<ul className={styles.sub}>
								<li>
									<NavLink to="/" activeClassName={styles.active}>
										Introduction
									</NavLink>
								</li>
								<li>
									<a href="#">Code Guidelines</a>
								</li>
							</ul>
						</NavItem>
						<NavItem title="Design" link="/">
							<ul className={styles.sub}>
								<li>
									<NavLink to="/" activeClassName={styles.active}>
										Introduction
									</NavLink>
								</li>
								<li>
									<a href="#">Code Guidelines</a>
								</li>
							</ul>
						</NavItem>
						<NavItem title="CSS" link="/">
							<ul className={styles.sub}>
								<li>
									<NavLink to="/" activeClassName={styles.active}>
										Introduction
									</NavLink>
								</li>
								<li>
									<a href="#">Code Guidelines</a>
								</li>
							</ul>
						</NavItem>
						<NavItem title="Components" link="/">
							<ul className={styles.sub}>
								<li>
									<NavLink to="/" activeClassName={styles.active}>
										Introduction
									</NavLink>
								</li>
								<li>
									<a href="#">Code Guidelines</a>
								</li>
							</ul>
						</NavItem>
					</ul>
					<ul className={styles.poweredBy}>
						<li>
							<a href="https://www.deep-impact.ch/" target="_blank">
								<img src={di} alt="Deep Impact AG" />
							</a>
						</li>
						<li>
							<a href="https://www.riangle.com/" target="_blank">
								<img src={riangle} alt="Riangle" />
							</a>
						</li>
					</ul>
				</header>
			</AppearAfter>
		);
	}
}

export default Nav;
