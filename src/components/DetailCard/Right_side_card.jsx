import React from 'react';
import styled from 'styled-components';

import towards from '../Rings/rings';
import RightFormCard from './Right_form_card';

const CartRight = styled.div`
	display:flex;
	flex-direction:column;
	width:50%;
	padding:0px 60px 0px 60px;
		&:nth-of-type(2){
			display:none;
		}
`
const TowarSex = styled.div`
	width: 70px;
  height: 30px;
  background: #000;
  color: #fff;
  border-radius: 25px;
  display:flex;
  align-items: center;
  justify-content:center;
  font-weight: 500;
  margin-bottom: 30px;
`
const TowarName = styled.a`
	color:#000;
	font-size:36px;
	font-weight:500;
	padding:0;
	margin:0;
	margin-bottom:30px;
	text-decoration:none;
`
const TowarDescription = styled.p`
	color:#000;
	font-size:26px;
	font-weight:400;
	font-style:italic;
	padding:0;
	margin:0;
	margin-bottom:30px;
`
const TowarDetail = styled.p`
	color:#717273;
	font-size:20px;
	font-weight:400;
	padding:0;
	margin:0;
	margin-bottom:30px;
`

class RightSide extends React.Component{
	render(){
	const RightSideElements = towards.map((towards, index) =>
		<CartRight key = {towards.id} towards = {towards} defaultOpen = {index === 0}>
			<TowarSex>{towards.sex}</TowarSex>
			<TowarName href={towards.link}>{towards.name}</TowarName>
			<TowarDescription>{towards.descr}</TowarDescription>
			<TowarDetail>{towards.detail}</TowarDetail>
			<RightFormCard></RightFormCard>
		</CartRight>
)
		return(
				{towardsElements}
		)
	}
}

export default RightSide;