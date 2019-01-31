import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Tabs.css';
import Tab from './Tab';

class Tabs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeTab: this.props.children[0].props.label,
		};
	}

	componentDidMount(){
		console.log(this.props.children, 'children')
	}

	render() {
		const {
			onClickTabItem,
			children,
			className,
			wrap,
			classNameTabList,
			classNameTabContent,
			activeTab,
		} = this;

		return (
			<div className={classNames(styles.tabsWrapper, className, { [styles.wrap]: wrap })}>
				<ol className={classNames(styles.tabList, classNameTabList)}>
					{children && children.map(child => {
						const { label, date } = child.props;

						return (
							<Tab
								activeTab={activeTab}
								key={label}
								label={label}
								date={date}
								onClick={onClickTabItem}
							/>
						);
					})}
				</ol>
				<div className={classNames(styles.tabContent, classNameTabContent)}>
					{children && children.map(child => {
						if (child.props.label !== activeTab) {
							return undefined;
						}

						return child.props.children;
					})}
				</div>
			</div>
		);
	}

	onClickTabItem = tab => {
		this.setState({ activeTab: tab });
	};
}

export default Tabs;
