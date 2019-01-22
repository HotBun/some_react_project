import React, { Component } from 'react';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components'

import Header from './components/header'
// import Menu from './components/menu'
// import Main from './components/main'


const BodyWrapper = styled.body`
  background-color:#eff4f7;
  display:flex;
`
const WorkArea = styled.div`
  background-color:#fff;
  -webkit-box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.75);
  // position:absolute;
  // top:calc(50% - 450px);
  // right:0;
  // bottom:0;
  // left:0;
  margin:0 auto;
  width:95%;
  height:900px;
`
const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  background-color: #f1f4f6;
  opacity: 0.8;
`

class App extends Component {
  render() {
    return (
      <BodyWrapper>
        <WorkArea>
          <HeaderWrapper>
              <Grid>
                  <Header />
              </Grid>
          </HeaderWrapper>
          </WorkArea>
        </BodyWrapper>
    );
  }
}

export default App;
