import React from 'react';
import styled from 'styled-components';

import towards from './rings';

const Cards = styled.div`
	margin: 20px;
  background-color: #fff;
  height: 400px;
  width: 31%;
  border:1px solid #f4f4f4;
  box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.095);
  padding:15px;
  box-sizing:border-box;
  position:relative;
  z-index:1;

	img{
		width:100%;
	}
	.show-info{
    display: none;
    position: absolute;
    z-index: 2;
    top: 4%;
    left: 2%;
    width: 96%;
    height: 91%;
    background: rgba(16,16,16,0.9);
    border-radius: 5px;
    padding:30px 20px 30px 20px;
    box-sizing:border-box;
		.info{
			width:100%;
			padding-left:20px;
			box-sizing:border-box;
			.name{
				color:#fff;
				font-size:26px;
				font-weight:500;
				padding:0;
				margin:0;
				margin-bottom:10px;
				text-decoration:none;
			}
			.descr{
				color:#fff;
				font-size:20px;
				font-weight:400;
				padding:0;
				margin:0;
				margin-bottom:20px;
			}
			.sex{
				width:70px;
				height:30px;
				background:#fff;
				color:#000;
				border-radius:25px;
				text-align:center;
				line-height:30px;
				font-weight:500;
				margin-bottom:20px;
			}
			.cart-link{
				width:170px;
				height:50px;
				border-radius:10px;
				display:block;
				background-color:#ff1c47;
				text-align:center;
				line-height:50px;
				color:#fff;
				font-size:20px;
				font-weight:500;
				text-transform:uppercase;
				text-decoration:none;
				transition: 0.2s ease-in-out;
				border:2px solid transparent;
				margin-bottom:20px;
			}
			.cart-link:hover{
				transition: 0.2s ease-in-out;
				background-color:rgba(255, 28, 71, 0.5);
				border:2px solid #ff1c47;
				}
			.info-link{
				color:#fff;
				font-size:16px;
				text-decoration:none;
				transition: 0.2s ease-in-out;
				border-bottom:1px solid transparent;
			}
			.info-link:hover{
				transition: 0.2s ease-in-out;
				border-bottom:1px solid #ff1c47;
				}
		}
	}
  &:hover{
  	z-index:3;
  	.show-info{
  		z-index:4;
  		display:flex;
  	}
  }
`
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`

class Card extends React.Component{
	render(){

	const towardsElements = towards.map((towards, index) =>
			<Cards key = {towards.id} towards = {towards} defaultOpen = {index === 0}>
				<img src={towards.img} alt={towards.name}></img>
				<div className="show-info">
					<div className="info">
						<a href={towards.link} className="name">{towards.name}</a>
						<p className="descr">{towards.descr}</p>
						<div className="sex">{towards.sex}</div>
						<a href={towards.toCart} className="cart-link">add to cart</a>
						<a href={towards.link} className="info-link">View detail</a>
					</div>
				</div>
			</Cards>
)
		return(
 		<CardsContainer>
        {towardsElements}
     </CardsContainer>
			)
	}
}

export default Card