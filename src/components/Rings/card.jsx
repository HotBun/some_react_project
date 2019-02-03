import React from 'react'
import styled from 'styled-components'

import towards from './rings'

const Cards = styled.div`
margin: 5px;
  background-color: #fff;
  height: 400px;
  width: 30%;
  border:1px solid #f4f4f4;
`


class Card extends React.Component{
	render(){

	const towardsElements = towards.map((towards, index) =>
			<Cards key = {towards.id} towards = {towards} defaultOpen = {index === 0}>
				<p>{towards.text}</p>
			</Cards>
)
		return(
 		<div>
        {towardsElements}
     </div>
			)
	}
}


export default Card