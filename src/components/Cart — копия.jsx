import React from 'react';
import styled from 'styled-components';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import towards from './Rings/rings';


//import breadcrumbs from "./Cart/breadcrumbs";


const TopSection = styled.div`
	height:50px;
	diplay:flex;
	align-items:center;
	width:100%;
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
	padding:0px 30px 0px 30px;
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
	padding:15px;
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


class Cart extends React.Component{
	render(){
	const towardsElements = towards.map((towards, index) => {
		console.log({towards});
		 		const towardsPrice = towards.price.map(currency => {
		 			return (
		 					<p className="price">
		 							{currency.dollar}
									{currency.grn}
		 					</p>
		 				)
		 			});	
		 		return (
		<CartRight key = {towards.id} towards = {towards} defaultOpen = {index === 0}>
			<TowarSex>{towards.sex}</TowarSex>
			<TowarName href={towards.link}>{towards.name}</TowarName>
			<TowarDescription>{towards.descr}</TowarDescription>
			<TowarDetail>{towards.detail}</TowarDetail>
			<RightForm>
				<RightFormTop>
					{towardsPrice}
					<p className="size"><span>Размер: </span>{towards.sizes[0]}</p>
					<p className="material"><span>Материал: </span> {towards.material}</p>

				</RightFormTop>
				
			</RightForm>
		</CartRight>
		 			);

});
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
				
				</CartLeft>
			{towardsElements}
     </CartContainer>
		</Col>
	</Row>
</Grid>
		)
	}
}

export default Cart;