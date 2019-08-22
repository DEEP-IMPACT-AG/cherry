import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Head from '../../Components/Head';
import { ContentPusher, Container, Readable, Button, Row, Col } from '../../Components/Layout';
import { Sketch as SketchIcon } from '../../assets/svg';
import styles from './Sketch.css';
const data = require('./data-sketch.md');

class Sketch extends Component {
	render() {
		return (
			<Fragment>
				<Head title="Sketch - Cherry • Design System" />
				<ContentPusher>
					<Container>
						<Readable>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{ __html: data.__content }}
							/>
							<Row className={styles.images}>
								<Col xs={4}>
									<a href="https://res.cloudinary.com/deep-impact-ag/image/upload/v1558092359/cherry/typography/1-typography-primary.jpg" target="_blank" title="Preview">
										<img src="https://res.cloudinary.com/deep-impact-ag/image/upload/v1558092359/cherry/typography/1-typography-primary.jpg" alt="Cherry Primary Typography"/>
									</a>
								</Col>
								<Col xs={4}>
									<a href="https://res.cloudinary.com/deep-impact-ag/image/upload/v1558092359/cherry/typography/2-typography-secondary.jpg" target="_blank" title="Preview">
										<img src="https://res.cloudinary.com/deep-impact-ag/image/upload/v1558092359/cherry/typography/2-typography-secondary.jpg" alt="Cherry Secondary Typography"/>
									</a>
								</Col>
								<Col xs={4}>
									<a href="https://res.cloudinary.com/deep-impact-ag/image/upload/v1558092359/cherry/typography/3-typography-tertiary.jpg" target="_blank" title="Preview">
										<img src="https://res.cloudinary.com/deep-impact-ag/image/upload/v1558092359/cherry/typography/3-typography-tertiary.jpg" alt="Cherry Tertiary Typography"/>
									</a>
								</Col>
							</Row>
							
							<Button
								href="https://drive.google.com/file/d/1p2CrJEANwMy2VeoexkH51cun847shgij/view?usp=sharing"
								target="_blank"
							>
								<SketchIcon /> Download Sketch Template
							</Button>
						</Readable>
					</Container>
				</ContentPusher>
			</Fragment>
		);
	}
}

export default Sketch;
