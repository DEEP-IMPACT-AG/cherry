import React from 'react';
import classNames from 'classnames';
import styles from './Wrapper.css';

function Wrapper({ className, children }) {
	return <div className={classNames(styles.wrapper, className)}>{children}</div>;
}

export default Wrapper;
