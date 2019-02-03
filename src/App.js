import React, { Component } from 'react';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './components/header';
import Footer from './components/footer';
// import Menu from './components/menu'
 import Main from './components/main'


const BodyWrapper = styled.body`
  background-color:#eff4f7;
  display:flex;
`
const WorkArea = styled.div`
  background-color:#fff;
  margin:0 auto;
  width:100%;
`
const HeaderWrapper = styled.header`
    width: auto;
    height: 50px;
    background-color: #f1f4f6;
    opacity: 0.8;
    padding: 0px 50px 0px 50px;
    box-sizing: border-box;
    position:relative;
    box-shadow: 0px 2px 5px 0 rgba(0,0,0,0.095);
`
const FooterWrapper = styled.footer`
  height:50px;
  width:auto;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  padding:0px 50px 0px 50px;
  box-sizing: border-box;
  align-items:center;
  background-color:#fff;
  border-top:1px solid #f4f4f4;
`
const MainWrapper = styled.main`
  width:100%;
  height:auto;
  background:#fff;
  padding:20px;
  box-sizing: border-box;
  width: 100%;

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
          <MainWrapper>
                <Main/>
          </MainWrapper>
          <FooterWrapper>
              <Grid>
                  <Footer />
              </Grid>
          </FooterWrapper>
          </WorkArea>
        </BodyWrapper>
    );
  }
}

export default App;
