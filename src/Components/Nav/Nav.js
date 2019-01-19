import React, { Component } from 'react';
import classNames from 'classnames';
import AppearAfter from '../AppearAfter';
import { Link, NavLink, withRouter } from 'react-router-dom';
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
		const { location } = this.props;

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
					<ul
						className={classNames(styles.list, {
							[styles.active]: menu,
						})}
					>
						<NavItem title="Overview" link="/" active={location.pathname == '/' ? true : false}>
							<ul className={styles.sub}>
								<li>
									<NavLink to="/" activeClassName={styles.active} onClick={this.closeMenu}>
										Introduction
									</NavLink>
								</li>
								<li>
									<a href="#">Coming Soon</a>
								</li>
							</ul>
						</NavItem>
						<NavItem title="Design" link="/" active={location.pathname == '/design' ? true : false}>
							<ul className={styles.sub}>
								<li>
									<a href="#">Coming Soon</a>
								</li>
							</ul>
						</NavItem>
						<NavItem title="CSS" link="/" active={location.pathname == '/css' ? true : false}>
							<ul className={styles.sub}>
								<li>
									<a href="#">Coming Soon</a>
								</li>
							</ul>
						</NavItem>
						<NavItem
							title="Components"
							link="/"
							active={location.pathname == '/components' ? true : false}
						>
							<ul className={styles.sub}>
								<li>
									<a href="#">Coming Soon</a>
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

export default withRouter(Nav);
