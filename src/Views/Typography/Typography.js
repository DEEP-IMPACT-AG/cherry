import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Head from '../../Components/Head';
import { ContentPusher, Container, Readable, Button, Row, Col, Text } from '../../Components/Layout';
import { H1, H2, H3, H4, H5, H6 } from '../../Components/Heading';
import { Sketch as SketchIcon } from '../../assets/svg';
import styles from './Typography.css';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

class Typography extends Component {
	componentDidMount() {
		const cdx = document.getElementsByTagName('pre');
		if (cdx.length) {
			let i;
			for (i = 0; i < cdx.length; i++) {
				hljs.highlightBlock(cdx[i]);
			}
		}
	}

	render() {
		return (
			<Fragment>
				<Head title="Typography - Cherry • Design System" />
				<ContentPusher>
					<Container>
						<Readable>
							<H1>Typography</H1>
							<hr />
							<H3>Hero</H3>
							<div className={styles.soft}>
								<Row alignItems="center" justifyContent="space-between">
									<Col xs={12} lg={4}>
										<H1 className={styles.hero1}>Hero 1</H1>
									</Col>
									<Col xs={12} lg={4}>
										<H2 className={styles.hero2}>Hero 2</H2>
									</Col>
									<Col xs={12} lg={4}>
										<H3 className={styles.hero3}>Hero 3</H3>
									</Col>
								</Row>
								<hr />
							</div>
							<H3>Eyebrow</H3>
							<div className={styles.soft}>
								<Row alignItems="center" justifyContent="space-between">
									<Col xs={12} lg={12}>
										<Text eyebrow>Eyebrow Text</Text>
									</Col>
								</Row>
								<hr />
							</div>
							<H3>Heading</H3>
							<div className={styles.soft}>
								<Row alignItems="center" justifyContent="space-between">
									<Col xs={12} lg={4}>
										<H1>Heading 1</H1>
									</Col>
									<Col xs={12} lg={4}>
										<H2>Heading 2</H2>
									</Col>
									<Col xs={12} lg={4}>
										<H3>Heading 3</H3>
									</Col>
									<Col xs={12} lg={4}>
										<H4>Heading 4</H4>
									</Col>
									<Col xs={12} lg={4}>
										<H5>Heading 5</H5>
									</Col>
									<Col xs={12} lg={4}>
										<H6>Heading 6</H6>
									</Col>
								</Row>
								<hr />
							</div>
							<p>To be continued...</p>
						</Readable>
					</Container>
				</ContentPusher>
			</Fragment>
		);
	}
}

export default Typography;
