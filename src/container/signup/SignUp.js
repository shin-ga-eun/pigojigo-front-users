import React, { Component } from 'react'
import { Modal, Form, Button, Icon, Grid, Header, Segment} from 'semantic-ui-react'
import { TextField,  FormLabel, Input, Avatar} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Axios from 'axios';

export default class SignUp extends Component {
    state = {
        email : "",
        password : "",
        nickname: "",
        sex: "",
        celno: "",
        birth: "",
        open : false,   //dialog 창 옵션
    }

    handleValueChange= (e) => {
        const nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleFormSubmit= async (e) => {
        e.preventDefault(); // axios를 통하여 데이터를 넘겨주는 부분 구현해야 함
        console.log(this.state);
        const { email, password, nickname, sex, celno, birth } = this.state;
        const { history, handleLogin } = this.props;
  
        try {
            const response = await Axios.post("/signUp", {
                email, password, nickname, sex, celno, birth}
                ,{
                headers: {
                    "Content-type":"application/json",
                }
            });

            const { status, data } = response;

            console.log(response);
            alert("회원가입 되었습니다.");
            history.push('/')
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }

    render() {
        const { email, password, nickname, sex, celno, birth } = this.state;
        const {handleFormSubmit} = this;

        return (
            <div>
            <Segment style={{ padding: '1em 10em'}} vertical>
                <Grid  container verticalAlign='middle'>
                <Grid.Row>
                <Header style={{ fontSize: '2em', marginLeft:70}}>
                    배달의 민꽃 서비스 가입
                </Header>
                </Grid.Row>  
                <Grid.Row>
                        <Avatar style={{marginLeft : 200}}>
                        <Icon name='user circle' />
                        </Avatar>
                        </Grid.Row>
                        <Grid.Row>
                        <TextField
                            style={{width: 370, marginLeft : 40}}
                            variant="outlined"
                            margin="normal"
                            required
                            id="email"
                            value ={email}
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={this.handleValueChange} 
                        />
                        </Grid.Row>
                        <Grid.Row>
                        <TextField
                            style={{width: 370, marginLeft : 40}}
                            variant="outlined"
                            margin="normal"
                            required
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value ={password}
                            autoComplete="current-password"
                            onChange={this.handleValueChange} 
                        />
                         </Grid.Row>
                         <Grid.Row>
                        <TextField
                            style={{width: 370, marginLeft : 40}}
                            variant="outlined"
                            margin="normal"
                            required
                            id="nickname"
                            value ={nickname}
                            label="Nick name"
                            name="nickname"
                            autoFocus
                            onChange={this.handleValueChange} 
                        />
                        </Grid.Row>
                        <Grid.Row>
                        <TextField
                            style={{width: 370, marginLeft : 40}}
                            variant="outlined"
                            margin="normal"
                            required
                            id="sex"
                            value ={sex}
                            label="sex"
                            name="sex"
                            autoFocus
                            onChange={this.handleValueChange} 
                        />
                        </Grid.Row>
                        <Grid.Row>
                        <TextField
                            style={{width: 370, marginLeft : 40}}
                            variant="outlined"
                            margin="normal"
                            required
                            id="celno"
                            value ={celno}
                            label="Input your Celno"
                            name="celno"
                            autoFocus
                            onChange={this.handleValueChange} 
                        />
                        </Grid.Row>
                        <Grid.Row>
                        <TextField
                            style={{width: 370, marginLeft : 40}}
                            variant="outlined"
                            margin="normal"
                            required
                            id="birth"
                            value ={birth}
                            label="Birth"
                            name="birth"
                            autoFocus
                            onChange={this.handleValueChange} 
                        />
                        </Grid.Row>
                        <Grid.Row style={{marginLeft:240}}>      

                        <Button primary={false} onClick={handleFormSubmit}> Sign Up</Button>
                        <Button variant="outlined" >close</Button>
                    </Grid.Row>  
                    </Grid>
                </Segment>
            </div>
        )
    }
}
