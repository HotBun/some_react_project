import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import styled from 'styled-components';
 
import './Search.css';

import towards from './Earrings/earrings';
import towards_sss from './Rings/rings';
 
const SearchCont = styled.div`
position:relative;
  .search-result{
   position:absolute;
   z-index: 100;
   width: 30vw;
   max-height: 87vh;
   overflow:hidden;
   background: #fff;
   border-radius: 10px;
   padding: 10px;
   box-sizing: border-box;
   top: 41px;
   left: 7px;
    box-shadow: 0px 3px 5px 3px rgba(0,0,0,0.2);

   display:none;
  }

  &:hover .search-result{
  display:block;
  }
  .search-result:hover{
    display:block;
  }
  .towards-link{
    width:100%;
    height:60px;
    line-height:60px;
    display:inline-block;
    text-align:left;
    background:#fff;
    box-sizing: border-box;
    padding:0px;
    .towards-img{
      max-width:40px;
      max-height:40px;
      display:inline-block;
    }
  }
`


const KEYS_TO_FILTERS = ['sex', 'name']
 
class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
 
  render () {
    const filteredTowars = towards.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    const filteredTowars_sss = towards_sss.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    return (
      <SearchCont>
       <SearchInput className="search-input" onChange={this.searchUpdated}/>
        <div className="search-result">
        {filteredTowars.map(towards => {
          return (
            <a href={towards.link} className="towards-link" key={towards.id}>
              <img src={towards.img} className="towards-img" alt={towards.name}/>
              <span className="towards-name">{towards.name}</span>
              <span className="towards-sex">{towards.sex}</span>
            </a>
          )
        })}
         {filteredTowars_sss.map(towards_sss => {
          return (
            <a href={towards_sss.link} className="towards-link" key={towards_sss.id}>
              <img src={towards_sss.img} className="towards-img"  alt={towards_sss.name}/>
              <span className="towards-name">{towards_sss.name}</span>
              <span className="towards-sex">{towards_sss.sex}</span>
            </a>
          )
        })}
         </div>
     </SearchCont>
    )
  }
 
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

export default Search