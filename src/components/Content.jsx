import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import logo from '../img/logo.png';

import Search from './Search';


import Earings from "./Earings";
import Rings from "./Rings";


import DetailCard from "./DetailCard";


const HeaderWrapper = styled.header`
  width: auto;
  height: 70px;
  background-color: #f1f4f6;
  opacity: 1;
  padding: 0px 50px 0px 50px;
  box-sizing: border-box;
  position:relative;
  box-shadow: 0px 2px 5px 0 rgba(0,0,0,0.095);
  z-index:10;
`
const MainWrapper = styled.main`
  width:100%;
  height:auto;
  background:#fff;
  padding:20px;
  box-sizing: border-box;
  width: 100%;
`
const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  height: 70px;
  margin: 0;
`
const ListLi = styled.li`
  list-style:none;
  a{
    color: ${props => props.focus ? '#fa6884' : "#717273"}
    font-size:18px;
    font-weight:400;
    padding:10px;
    border:2px solid transparent;
    transition: 0.5s ease-in-out;
    border-radius:10px;
    text-align:center;
    text-decoration:none;
  }
  a:hover{
    border-color:#fa6884;
    color:#fa6884;
    text-decoration:none;
    transition: 0.5s ease-in-out;
  }
  &:first-child a{
    border:none !important;
    color:transparent !important;
  }
`
const Content = () => (
  <Router>
    <div>
      <HeaderWrapper>
       <Grid>
         <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <nav>
              <List>
                <ListLi><Link to="/Rings"><img src={logo} alt="logo" className="logo"/></Link></ListLi>
                <ListLi><Search/></ListLi>
                <ListLi><Link to="/Rings">Rings</Link></ListLi>
                <ListLi><Link to="/Earings">Earings</Link></ListLi>
                <ListLi><Link to="/Pendants">Pendants</Link></ListLi>
                <ListLi><Link to="/Contacts">Contacts</Link></ListLi>
                <ListLi><Link to="/DetailCard">Detail Card</Link></ListLi>
                <ListLi><Link to="/Cart">Cart</Link></ListLi>
              </List>
            </nav>
          </Col>
        </Row>
       </Grid>
      </HeaderWrapper>
      <MainWrapper>
        <Grid>
          <Route exact path="/Rings" component={Rings} />
          <Route path="/Earings" component={Earings} />
          <Route path="/DetailCard" component={DetailCard} />
       </Grid>
      </MainWrapper>
    </div>
  </Router>
);


export default Content;