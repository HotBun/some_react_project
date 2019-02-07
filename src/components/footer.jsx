import React from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import ThisYear from './Date';

const Copyright = styled.p`
	color:#979797;
`

class Footer extends React.Component {
	render() {
		return(
			<Row>
				<Col lg={12} md={12} sm={12} xs={12}>
					<Copyright>Copyright ©<ThisYear/> Oleinik Ink. All rights reserved</Copyright>
				</Col>
			</Row>
			)
	};
};
export default Footer;