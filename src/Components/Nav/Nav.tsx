import React, { Component } from "react";
import classNames from "classnames";
import AppearAfter from "../AppearAfter";
import {
	Link,
	NavLink,
	withRouter,
	RouteComponentProps,
} from "react-router-dom";
import NavItem from "./NavItem";
import { Logo, Riangle, DeepImpact } from "../../assets/svg";
const styles = require("./Nav.css");

interface NavProps {
	location: any;
	lang: string;
}

interface NavState {
	menu: boolean;
}

class Nav extends Component<NavProps, NavState> {
	constructor(props: NavProps) {
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
		const { location, lang } = this.props;

		return (
			<AppearAfter
				className={styles.navigation}
				visibleClassName={styles.visible}
			>
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
							active={
								location.pathname == "/" ||
								location.pathname == "/naming-convention" ||
								location.pathname == "/code-style-lint"
									? true
									: false
							}
						>
							<ul className={styles.sub}>
								<li>
									<NavLink
										to="/"
										activeClassName={styles.active}
										onClick={this.closeMenu}
										exact
									>
										Introduction
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/naming-convention"
										activeClassName={styles.active}
										onClick={this.closeMenu}
									>
										Naming Convention
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/code-style-lint"
										activeClassName={styles.active}
										onClick={this.closeMenu}
									>
										Code Styles & Linting
									</NavLink>
								</li>
							</ul>
						</NavItem>
						<NavItem
							title="Design"
							active={
								location.pathname == "/design/sketch" ||
								location.pathname == "/design/typography"
									? true
									: false
							}
						>
							<ul className={styles.sub}>
								<li>
									<NavLink
										to="/design/sketch"
										activeClassName={styles.active}
										onClick={this.closeMenu}
									>
										Sketch
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/design/typography"
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
							active={
								location.pathname == "/css/styling-structure" ||
								location.pathname == "/css/cherry-grid"
									? true
									: false
							}
						>
							<ul className={styles.sub}>
								<li>
									<NavLink
										to="/css/styling-structure"
										activeClassName={styles.active}
										onClick={this.closeMenu}
									>
										Styling Structure
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/css/cherry-grid"
										activeClassName={styles.active}
										onClick={this.closeMenu}
									>
										Cherry Grid
									</NavLink>
								</li>
							</ul>
						</NavItem>
						<NavItem
							title="NPM Libraries"
							active={
								location.pathname == "/npm/cherry-grid"
									? true
									: false
							}
							label="New"
						>
							<ul className={styles.sub}>
								<li>
									<NavLink
										to="/npm/cherry-grid"
										activeClassName={styles.active}
										onClick={this.closeMenu}
									>
										Cherry Grid
									</NavLink>
								</li>
							</ul>
						</NavItem>
					</ul>
					<ul className={styles.poweredBy}>
						<li>
							<a
								href="https://www.deep-impact.ch/?ref=cherry.design"
								target="_blank"
								rel="noopener"
							>
								<DeepImpact />
							</a>
						</li>
						<li>
							<a
								href="https://www.riangle.com/?ref=cherry.design"
								target="_blank"
								rel="noopener"
							>
								<Riangle />
							</a>
						</li>
					</ul>
				</header>
			</AppearAfter>
		);
	}
}

export default withRouter<RouteComponentProps, any>(Nav);
