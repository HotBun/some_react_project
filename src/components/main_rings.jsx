import React from 'react'

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Card from './Rings/card'



class Main extends React.Component {
	render(){
		return(
			<Row>
				<Col lg={12} md={12} sm={12} xs={12}>
				<Card/>
				</Col>
			</Row>
			)
	}
}
export default Main