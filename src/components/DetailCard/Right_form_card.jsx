import React from 'react';
import styled from 'styled-components';

import towards from '../Rings/rings';

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




class RightFormCard extends React.Component{
	render(){
	const RightFormCards = towards.map((towards, index) =>
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

)
		return(
		//<Breadcrumbs routes={routes} />
						{RightFormCards}
		)
	}
}

export default RightFormCard;