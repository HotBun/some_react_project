import React from 'react'
import styled from 'styled-components'

import towards from './earrings'

const Cards = styled.div`
margin: 20px;
  background-color: #fff;
  height: 400px;
  width: 31%;
  border:1px solid #f4f4f4;
  box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.095);
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
				<p>{towards.text}</p>
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