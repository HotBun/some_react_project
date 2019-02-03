import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
	color: ${props => props.focus ? '#fa6884' : "#717273"}
	font-size:16px;
	font-weight:400;
	line-height:24px;
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
class Link extends React.Component {
	render() {
		return (
				<StyledLink href={this.props.link}>{this.props.text}</StyledLink>
			);
	}
}

export default Link