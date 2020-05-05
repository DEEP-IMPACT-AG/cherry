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
import { clickEvent } from "../util";
const styles = require("./Nav.css");

interface NavProps {
	location: any;
	history: any;
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

	closeMenu = (event: any, to: any, push: any) => {
		this.setState({ menu: false });
		clickEvent(event, to, push);
	};

	render() {
		const { menu } = this.state;
		const { location, history } = this.props;

		return (
			<AppearAfter
				className={styles.navigation}
				visibleClassName={styles.visible}
			>
				<header>
					<Link
						to="/"
						className={styles.logo}
						onClick={(e) => clickEvent(e, "/", history.push)}
					>
						<Logo />
						<h1>Cherry - Design System</h1>
					</Link>
					<button
						onClick={() =>
							this.setState({ menu: !this.state.menu })
						}
						className={classNames(styles.burger, {
							[styles.active]: menu,
						})}
						aria-label="Burger Menu"
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
										onClick={(e) =>
											this.closeMenu(e, "/", history.push)
										}
										exact
									>
										Introduction
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/naming-convention"
										activeClassName={styles.active}
										onClick={(e) =>
											this.closeMenu(
												e,
												"/naming-convention",
												history.push,
											)
										}
									>
										Naming Convention
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/code-style-lint"
										activeClassName={styles.active}
										onClick={(e) =>
											this.closeMenu(
												e,
												"/code-style-lint",
												history.push,
											)
										}
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
							label="New"
						>
							<ul className={styles.sub}>
								<li>
									<NavLink
										to="/design/sketch"
										activeClassName={styles.active}
										onClick={(e) =>
											this.closeMenu(
												e,
												"/design/sketch",
												history.push,
											)
										}
									>
										Sketch
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/design/typography"
										activeClassName={styles.active}
										onClick={(e) =>
											this.closeMenu(
												e,
												"/design/typography",
												history.push,
											)
										}
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
										onClick={(e) =>
											this.closeMenu(
												e,
												"/css/styling-structure",
												history.push,
											)
										}
									>
										Styling Structure
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/css/cherry-grid"
										activeClassName={styles.active}
										onClick={(e) =>
											this.closeMenu(
												e,
												"/css/cherry-grid",
												history.push,
											)
										}
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
						>
							<ul className={styles.sub}>
								<li>
									<NavLink
										to="/npm/cherry-grid"
										activeClassName={styles.active}
										onClick={(e) =>
											this.closeMenu(
												e,
												"/npm/cherry-grid",
												history.push,
											)
										}
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
								aria-label="DeepImpact AG Homepage"
								target="_blank"
								rel="noopener"
							>
								<DeepImpact />
							</a>
						</li>
						<li>
							<a
								href="https://www.riangle.com/?ref=cherry.design"
								aria-label="Riangle Homepage"
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
