import React from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Link from './link';

const List = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	height: 50px;
`

class Header extends React.Component {
	render() {
		return (
			<Row>
					<Col lg={12} md={12} sm={12} xs={12}>
							<nav>
							<List>
									<Link link="#" text="Ссылка 1"/>
									<Link link="#" text="Ссылка 2"/>
									<Link link="#" text="Ссылка 3"/>
									<Link link="#" text="О нас"/>
									<Link link="#" text="Контакты"/>
								</List>
							</nav>
					</Col>
			</Row>
			);
	}
}

export default Header