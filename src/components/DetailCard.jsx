import React from 'react';
import styled from 'styled-components';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import towards from './Rings/rings';
// import RightSide from './DetailCard/Right_side_card'
import LeftSide from './DetailCard/Left_side_card'

//import breadcrumbs from "./Cart/breadcrumbs";


const TopSection = styled.div`
	height:50px;
	diplay:flex;
	align-items:center;
	width:100%;
	margin-bottom:20px;
`
const GoBack = styled.a`
	width:150px;
	height:40px;
	border:2px solid #717273;
	transition:0.2s ease-in-out;
	display:flex;
	align-items:center;
	justify-content:center;
	border-radius:50px; 
	color:#717273;
	font-size:18px;
	text-decoration:none;
	font-weight:500;
		&:hover{
			border:2px solid #fa6884;
			transition:0.2s ease-in-out;
		}
`
const CartContainer = styled.div`
	display:flex;
	justify-content:center;
	flew-wrap:wrap;
  padding: 0px 50px 0px 50px;
  box-sizing: border-box;
`
const CartLeft = styled.div`
	display:flex;
	width:50%;
	min-height:200px;
	background:red;
`
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
const RightForm = styled.div`
	width:100%;
	height:auto;
	display:flex;
	border:1px solid #717273;
	padding:0px 15px 20px 15px;
	box-sizing:border-box;
	border-radius:5px;
	flex-wrap:wrap;
`
const RightFormTop = styled.div`
	width:100%;
	height:auto;
	display:flex;
	flex-direction:row;
	align-items:center;
	justify-content:space-between;
	border-bottom:1px solid #717273;
	padding:10px 0px;
		margin-bottom:30px;
	.price{
		color: #292929;
    font-size: 36px;
    font-weight: 600;
    padding: 0;
    margin: 0;
	}
	.size{
		color: #292929;
    font-size: 20px;
    font-weight: 600;
    padding: 0;
    margin: 0;
     span{
     	  color: #fa6884;
     }
	}
	.material{
		color: #292929;
    font-size: 20px;
    font-weight: 600;
    padding: 0;
    margin: 0;
     span{
     	  color: #fa6884;
     }
	}
`
const RightFormBottom = styled.div`
	width:100%;
	height:auto;
	display:flex;
	flex-direction:row;
	align-items:center;
	justify-content:space-between;
	.title{
		font-weight:600;
		font-size:20px;
		color:#333;
	}
	.right_form_choose{
		width:50%;
		display:flex;
		margin:0px 30px;
		height:50px;
		align-items:center;
		justify-content:center;
		border-radius:10px;
		border:1px solid #717273;
		cursor:pointer;
		font-size:26px;
		color:#333;
		font-weight:600;
		transition:0.2s ease-in-out;
		&:hover{
			color:#fa6884;
			border:1px solid #fa6884;
			transition:0.2s ease-in-out;
		}
	}
`
const AddToCart = styled.button`
	width:200px;
	height:50px;
	background-color: #e02045;
	border-radius:10px;
	border:none;
	outline:none;
	font-size:20px;
	color:#fff;
	font-weight:500;
	cursor:pointer;
	margin:0 auto;
	margin-top:30px;
	transition:0.2s ease-in-out;
		&:hover{
			background-color: #b70023;
			transition:0.2s ease-in-out;
		}
`




class DetailCard extends React.Component{
	render(){
	const towardsElements = towards.map((towards, index) =>
		<CartRight key = {towards.id} towards = {towards} defaultOpen = {index === 0}>
			<TowarSex>{towards.sex}</TowarSex>
			<TowarName href={towards.link}>{towards.name}</TowarName>
			<TowarDescription>{towards.descr}</TowarDescription>
			<TowarDetail>{towards.detail}</TowarDetail>
			<RightForm>
				<RightFormTop>
					<p className="price">{towards.price_dollar}</p>
					<p className="size"><span>Размер: </span>{towards.sizes[0]}</p>
					<p className="material"><span>Материал: </span> {towards.material}</p>
				</RightFormTop>
				<RightFormBottom>
				<p className="title">Валюта:</p>
					<div className="right_form_choose">{towards.price_dollar}</div>
					<div className="right_form_choose">{towards.price_grn}</div>
				</RightFormBottom>
				<RightFormBottom>
				<p className="title">Размер:</p>
					<div className="right_form_choose">{towards.sizes[0]}</div>
					<div className="right_form_choose">{towards.sizes[1]}</div>
					<div className="right_form_choose">{towards.sizes[2]}</div>
				</RightFormBottom>
				<AddToCart>Add to cart</AddToCart>
			</RightForm>
		</CartRight>

)
		return(
		//<Breadcrumbs routes={routes} />
			<Grid>
				<Row>
					<Col lg={12} md={12} sm={12} xs={12}>
						<TopSection>
							<GoBack href="./Rings">go Back</GoBack>
						</TopSection>
						<CartContainer>
							<CartLeft>
								<LeftSide></LeftSide>
							</CartLeft>
						{towardsElements}
			     </CartContainer>
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default DetailCard;