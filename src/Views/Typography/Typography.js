import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Head from '../../Components/Head';
import {
	ContentPusher,
	Container,
	Readable,
	Button,
	Row,
	Col,
	Text,
} from '../../Components/Layout';
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
										<Text eyebrow>This is how an eyebrow looks like</Text>
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
							<H3>Subtitle</H3>
							<div className={styles.soft}>
								<Row alignItems="center" justifyContent="space-between">
									<Col xs={12} lg={12}>
										<Text subtitle>You are reading a Subtitle</Text>
									</Col>
								</Row>
								<hr />
							</div>
							<H3>Text</H3>
							<div className={styles.soft}>
								<Row alignItems="center" justifyContent="space-between">
									<Col xs={12} lg={12}>
										<Text>
											Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit
											libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod.
											Nullam id dolor id nibh ultricies vehicula ut id elit.
										</Text>
									</Col>
								</Row>
								<hr />
							</div>
							<H3>Small</H3>
							<div className={styles.soft}>
								<Row alignItems="center" justifyContent="space-between">
									<Col xs={12} lg={12}>
										<Text small>
											Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia
											odio sem nec elit. Maecenas faucibus mollis interdum. Vestibulum id ligula
											porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat
											porttitor ligula, eget lacinia odio sem nec elit.
										</Text>
									</Col>
								</Row>
								<hr />
							</div>
						</Readable>
					</Container>
				</ContentPusher>
			</Fragment>
		);
	}
}

export default Typography;
