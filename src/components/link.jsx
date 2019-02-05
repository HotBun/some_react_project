import React from 'react';
import styled from 'styled-components';
import { Link, Router, Route } from 'react-router'
import { HashRouter } from 'react-router-dom'

const StyledLink = styled.a`
color: ${props => props.focus ? '#fa6884' : "#717273"}
font-size:18px;
font-weight:400;
padding:10px;
border:2px solid transparent;
-webkit-transition: 0.5s ease-in-out;
-o-transition: 0.5s ease-in-out;
transition: 0.5s ease-in-out;
border-radius:10px;
text-align:center;
text-decoration:none;

&:hover{
	border-color:#fa6884;
	color:#fa6884;
	text-decoration:none;
	-webkit-transition: 0.5s ease-in-out;
	-o-transition: 0.5s ease-in-out;
	transition: 0.5s ease-in-out;
}
`


class Links extends React.Component {
	render() {
		return (
			//<StyledLink href={this.props.link}>{this.props.text}</StyledLink>

			<Router history={HashRouter}>
				<Route path="/"/>
			</Router>
			// <Links to="/main_rings" text="Кольца"/>
			// <Links link="#" text="Серьги"/>
			// <Links link="#" text="Подвески"/>
			// <Links link="#" text="О нас"/>
			// <Links link="#" text="Контакты"/>

			)
	}
}


export default Links