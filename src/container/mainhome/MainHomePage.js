/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react'
import { createMedia } from '@artsy/fresnel'
import { Paper } from '@material-ui/core';
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import SeasonPage from '../seasons/SeasonPage'
import ReviewPage from '../review/ReviewPage'
import HowToUse from '../howtouse/HowToUse'
import SignIn from '../signin/SignIn'
import SubScription from '../subscription/SubScription'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import review11 from '/Users/sge/react-workspace/pigojigo/src/resources/flower/review11.jpeg'
import SignUp from '../signup/SignUp';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const HomepageHeading = ({ mobile }) => (
    
  <Segment
      inverted
      textAlign="left"
      style={{ minHeight: 100, padding: "1em 0em"}}
      vertical
      >
      <Grid columns={2} style={{marginLeft:20}}>
      <Grid.Column verticalAlign='center' >
      <Header
        content='배달의 민꽃'
        inverted
        style={{
          fontSize: mobile ? '2em' : '3.3em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.3em' : '2.5em',
        }}
      />
      <Header
        content='꽃이 주는 소소한 행복을 구독하세요.'
        inverted
        style={{
          fontSize: mobile ? '1.0em' : '1.3em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
          marginBottom:20
        }}
      />

      {/* 꽃 정기구독 신청하러가기  */}
      <SubScription/>
      </Grid.Column>

      <Grid.Column>
        
        <img
          style={{marginTop:20}}
          height="500"   
          src={review11}
          opacity = "0.5"
          alt="background"
          />
        
        </Grid.Column>
      </Grid>
      </Segment>
   
  )

  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }
  const MainHomePageUi = () => (
  
    <div>
    <Segment style={{ padding: '8em 0em' }} vertical>
  
      <Grid container stackable verticalAlign='middle'>
  
        <Grid.Row>
          <Header style={{ fontSize: '2em' }}>
            매월 업데이트되는 신선한 꽃을 구독하세요 !
          </Header>
          {/* 시즌상품 페이지 꽃 이미지 / 꽃 정보 목록 출력  */}
          {/* <Route exact path='/seasons' component={SeasonPage}/> */}
          <SeasonPage />     
        </Grid.Row>
  
        <Grid.Row style={{marginTop: 90}} verticalAlign='left'>
          <Header style={{ fontSize: '2em'}}>
            원하는 기간동안,  원하는 만큼 꽃을 구독해보세요.
          </Header>
        </Grid.Row>
  
        <Grid.Row>
          <HowToUse/>
        </Grid.Row>
  
        <Grid.Row style={{marginTop: 90}}>
        <Grid.Column>
          <ReviewPage/>
        </Grid.Column>
        </Grid.Row>
  
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>
              고객 스타일링 보러가기
              <Icon name='right arrow' />
            </Button>
          </Grid.Column>
        </Grid.Row>
  
      </Grid>
  
      <Grid style={{ padding: '6em 0em' }} vertical>
      <Container text>
    
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href onClick = {() => window.scrollTo(100,0)}>배달의 민꽃</a>
        </Divider>
  
        <Header as='h3' style={{ fontSize: '2em' }}>
        배달의 민꽃 정기구독 서비스를 선청해햐하는 이유
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          어쩌구저ㄱ저궁블라블라
        </p>
      </Container>
      </Grid>
    </Segment>
  
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='site map' />
              <List link inverted>
                <List.Item as={Link} to="/subscription" onClick={ () => window.scrollTo(100, 50)}> subscription to flowers</List.Item>
                <List.Item as={Link} to="/seasons" onClick={ () => window.scrollTo(100, 600)}>seasons</List.Item>
                <List.Item as={Link} to="/howtouse" onClick={ () => window.scrollTo(100, 900)}>how to use '배달의 민꽃'</List.Item>
                <List.Item as={Link} to="/styling" onClick={ () => window.scrollTo(100, 1200)}>how to styling</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as={Link} to="/subscription" onClick={ () => window.scrollTo(100, 50)}> 정기구독 신청</List.Item>
                <List.Item as={Link} to="/seasons" onClick={ () => window.scrollTo(100, 600)}>시즌상품</List.Item>
                <List.Item as={Link} to="/howtouse" onClick={ () => window.scrollTo(100, 900)}>이용방법</List.Item>
                <List.Item as={Link} to="/styling" onClick={ () => window.scrollTo(100, 1200)}>스타일링</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                배달의 민꽃
              </Header>
              <p>
                Copyright (c) 2021 shin-ga-eun. All Rights Reserved.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
  )

class DesktopContainer extends Component {

  state = {
    isLogin : false,
    role: "",
  }

  hideFixedMenu = () => this.setState({ fixed: false })

  showFixedMenu = () => this.setState({ fixed: true })

    handleLogin = (isLogin, role) => {
      this.setState({
        isLogin,
        role,
      });
    }

    handleLogout = async () => {
      //TODO axios 연동

    }

    render() {

        const { children } = this.props
        const { fixed, isLogin, role } = this.state

        return (
          <Media greaterThan="mobile">
            <Visibility
              once={false}
              onBottomPassed={this.showFixedMenu}
              onBottomPassedReverse={this.hideFixedMenu}
            > 
            <Segment
                inverted
                textAlign="left"
                style={{ minHeight: 100, padding: "1em 0em"}}
                vertical
              >
                <Menu
                  fixed={fixed ? "top" : null}
                  inverted={!fixed}     
                  pointing={!fixed}
                  secondary={!fixed}
                  size="large"
                > 
                  <Container> 
                      <Menu.Item as={Link} to="/subscription" active onClick={ () => window.scrollTo(100, 50)}>
                        정기구독 신청
                      </Menu.Item>
                      <Menu.Item as={Link} to="/seasons" onClick={ () => window.scrollTo(100, 600)}>
                        시즌상품
                      </Menu.Item>
                      <Menu.Item as={Link} to="/howtouse" onClick={ () => window.scrollTo(100, 900)}>
                        이용방법
                      </Menu.Item>
                      <Menu.Item as={Link} to="/styling" onClick={ () => window.scrollTo(100, 1200)}>
                        스타일링
                      </Menu.Item>
                      <Menu.Item as={Link} to="/mypage" onClick={ () => window.scrollTo(100, 500)}> {/*TODO: mypage 추가*/}
                        나의 구독
                      </Menu.Item>
                      <Menu.Item position="right">
                        {/* 로그인 */}
                        {isLogin === false && (
                          <SignIn as="a" inverted={!fixed} href='/signin'/>
                        )}
                        {
                          isLogin === true && <h1> 000님, 환영합니다. </h1> //TODO
                        }
                        {/* 회원가입 */}
                        <Button
                          as="a"
                          inverted={!fixed}
                          primary={fixed}
                          style={{ marginLeft: "0.5em" }}
                          href='/signup'
                        >
                          Sign Up
                        </Button>
                        {/* <SignUp/> */}
                      </Menu.Item>
                
                  </Container>
                </Menu>

                
                
            </Segment>
            </Visibility>
          </Media>
        );
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
  }
 
  const ResponsiveContainer = ({ children }) => (
    /* Heads up!
     * For large applications it may not be best option to put all page into these containers at
     * they will be rendered twice for SSR.
     */
    <MediaContextProvider>
      <DesktopContainer>{children}</DesktopContainer>
     
    </MediaContextProvider>
  )
  
  ResponsiveContainer.propTypes = {
    children: PropTypes.node,
  }



const MainHomePage = () => (

    <Router>
      <ResponsiveContainer/>

      <Route exact path="/signup" component={SignUp} />
      
      <HomepageHeading/>
      <MainHomePageUi/>
    </Router>
  )

export default MainHomePage;
