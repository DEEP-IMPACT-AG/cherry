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
								location.pathname == "/code-guidelines"
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
								location.pathname == "/css/css-grid"
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
										to="/css/css-grid"
										activeClassName={styles.active}
										onClick={this.closeMenu}
									>
										CSS Grid
									</NavLink>
								</li>
							</ul>
						</NavItem>
						<NavItem
							title="NPM Libraries"
							active={
								location.pathname == "/npm/grid-components"
									? true
									: false
							}
							label="New"
						>
							<ul className={styles.sub}>
								<li>
									<NavLink
										to="/npm/grid-components"
										activeClassName={styles.active}
										onClick={this.closeMenu}
									>
										Grid Components
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
							>
								<DeepImpact />
							</a>
						</li>
						<li>
							<a
								href="https://www.riangle.com/?ref=cherry.design"
								target="_blank"
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
