import React, { Component } from 'react';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components'

import Header from './components/header'
// import Menu from './components/menu'
// import Main from './components/main'


const HeaderWrapper = styled.header`
  width: 100%;
  height: 49px;
  background-color: #242424;
  opacity: 0.8;
`

class App extends Component {
  render() {
    return (
          <HeaderWrapper>
              <Grid>
                  <Header />
              </Grid>
          </HeaderWrapper>
    );
  }
}

export default App;
