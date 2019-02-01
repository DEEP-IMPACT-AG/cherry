import React, { Component } from 'react';
import classNames from 'classnames';
import AppearAfter from '../AppearAfter';
import { Link, NavLink, withRouter } from 'react-router-dom';
import styles from './Nav.css';

import NavItem from './NavItem';
import { Logo, Riangle, DeepImpact } from '../../assets/svg';

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
						<NavItem
							title="Overview"
							link="/"
							active={
								location.pathname == '/' || location.pathname == '/code-guidelines' ? true : false
							}
						>
							<ul className={styles.sub}>
								<li>
									<NavLink to="/" activeClassName={styles.active} onClick={this.closeMenu} exact>
										Introduction
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/code-guidelines"
										activeClassName={styles.active}
										onClick={this.closeMenu}
									>
										Code Guidelines
									</NavLink>
								</li>
							</ul>
						</NavItem>
						<NavItem
							title="Design"
							link="/"
							active={
								location.pathname == '/sketch' || location.pathname == '/typography' ? true : false
							}
						>
							<ul className={styles.sub}>
								<li>
									<NavLink to="/sketch" activeClassName={styles.active} onClick={this.closeMenu}>
										Sketch
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/typography"
										activeClassName={styles.active}
										onClick={this.closeMenu}
									>
										Typography
									</NavLink>
								</li>
							</ul>
						</NavItem>
						<NavItem
							title="CSS"
							link="/"
							active={location.pathname == '/css' ? true : false}
							label="New"
						>
							<ul className={styles.sub}>
								<li>
									<NavLink to="/styling-structure" activeClassName={styles.active} onClick={this.closeMenu}>
										CSS Styling Structure
									</NavLink>
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
								<DeepImpact />
							</a>
						</li>
						<li>
							<a href="https://www.riangle.com/" target="_blank">
								<Riangle />
							</a>
						</li>
					</ul>
				</header>
			</AppearAfter>
		);
	}
}

export default withRouter(Nav);
