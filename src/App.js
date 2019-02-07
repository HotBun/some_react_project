import React, { Component } from 'react';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Footer from './components/Footer';
import Content from './components/Content';


const BodyWrapper = styled.body`
  background-color:#eff4f7;
  display:flex;
`
const WorkArea = styled.div`
  background-color:#fff;
  margin:0 auto;
  width:100%;
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

class App extends Component {
  render() {
    return (
      <BodyWrapper>
        <WorkArea>
                <Content/>
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
