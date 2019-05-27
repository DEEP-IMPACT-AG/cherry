import React, { Component } from 'react';
import styles from './testi.css';

export class Test extends Component {
	render () {
		return <div className={styles.testi}>{this.props.children}</div>;
	}
}

export default Test;
