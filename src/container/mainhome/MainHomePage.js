/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react'
import { createMedia } from '@artsy/fresnel'
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
import Login from '../login/Login'
import SubScription from '../subscription/SubScription'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const HomepageHeading = ({ mobile }) => (
    <Container text>
      <Header
        as='h1'
        content='꽃 구독 서비스 명'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
      />
      <Header
        as='h6'
        content='꽃이 주는 소소한 행복을 구독하세요.'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
      <Router>
      <Button primary size='huge'>
            {/* SubScription */}
          {/* <Route exact path="/subscription" component={SubScription}> */}
          꽃 정기구독 신청하러가기
         {/* </Route> */}
        <Icon name='right arrow' />
      </Button>
      </Router>
    </Container>
  )

  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }

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
        const {moveScrollTo} = this

        return (
          <Media greaterThan="mobile">
            <Visibility
              once={false}
              onBottomPassed={this.showFixedMenu}
              onBottomPassedReverse={this.hideFixedMenu}
            >
              <Segment
                inverted
                textAlign="center"
                style={{ minHeight: 700, padding: "1em 0em" }}
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
                      <Menu.Item as={Link} to="/seasons" onClick={ () => window.scrollTo(100, 700)}>
                        시즌상품
                      </Menu.Item>
                      <Menu.Item as={Link} to="/howtouse" onClick={ () => window.scrollTo(100, 1000)}>
                        이용방법
                      </Menu.Item>
                      <Menu.Item as={Link} to="/styling" onClick={ () => window.scrollTo(100, 1200)}>
                        스타일링
                      </Menu.Item>
                      <Menu.Item as={Link} to="/mypage" onClick={ () => window.scrollTo(100, 500)}> {/*TODO: mypage 추가*/}
                        나의 구독
                      </Menu.Item>
                      <Menu.Item position="right">
                        {isLogin === false && (
                          <Login as="a" inverted={!fixed} />
                        )}
                        {
                          isLogin === true && <h1> 000님, 환영합니다. </h1> //TODO
                        }
                        <Button
                          as="a"
                          inverted={!fixed}
                          primary={fixed}
                          style={{ marginLeft: "0.5em" }}
                        >
                          Sign Up
                        </Button>
                      </Menu.Item>
                
                  </Container>
                </Menu>
                <HomepageHeading />
              </Segment>
            </Visibility>

            {children}
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
    <ResponsiveContainer>
      <Segment style={{ padding: '8em 0em' }} vertical>
        {/* 1구간 */}
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column>
              <Header as='h3' style={{ fontSize: '2em' }}>
                매월 업데이트되는 신선한 꽃을 구독하세요 !
              </Header>
                {/* 시즌상품 페이지 꽃 이미지 / 꽃 정보 목록 출력  */}
                {/* <Route exact path='/seasons' component={SeasonPage}/> */}
                  <SeasonPage/>     
               
               <Header as='h3' style={{ fontSize: '2em' }}>
                원하는 기간동안, <br/>
                원하는 만큼 꽃을 구독해보세요.
              </Header>
                이용방법 페이지 
            </Grid.Column>
          </Grid.Row>

          {/* 2구간 */}
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Button size='huge'>
                고객 스타일링 보러가기 (페이지 이동)
                <Icon name='right arrow' />
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
  
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }}>
            다른 고객들의 후기, 
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            다른 고객 후기 목록 top 5 출력 
          </p>
         
          
          <Button as='a' size='large'>
            후기 더보러가기 (페이지 이동)
            <Icon name='right arrow' />
          </Button>
       
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Case Studies</a>
          </Divider>
  
          <Header as='h3' style={{ fontSize: '2em' }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
            it's really true. It took years of gene splicing and combinatory DNA research, but our
            bananas can really dance.
          </p>
          <Button as='a' size='large'>
            I'm Still Quite Interested
          </Button>
        </Container>
      </Segment>
  
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Sitemap</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                  <List.Item as='a'>Religious Ceremonies</List.Item>
                  <List.Item as='a'>Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Banana Pre-Order</List.Item>
                  <List.Item as='a'>DNA FAQ</List.Item>
                  <List.Item as='a'>How To Access</List.Item>
                  <List.Item as='a'>Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Footer Header
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </ResponsiveContainer>
    </Router>
  )

export default MainHomePage;
