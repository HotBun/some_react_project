import React from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Links from './link';
import logo from '../img/logo.png';

const List = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	padding: 0;
	height: 70px;
	margin: 0;
`

class Header extends React.Component {
	render() {
		return (
			<Row>
					<Col lg={12} md={12} sm={12} xs={12}>
							<nav>
							<List>
									<img src={logo} alt="logo" className="logo"/>
									<Links/>
								</List>
							</nav>
					</Col>
			</Row>
			);
	}
}

export default Header