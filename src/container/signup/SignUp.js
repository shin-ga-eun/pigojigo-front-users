import React, { Component } from 'react'
import { Modal, Form, Button, Icon} from 'semantic-ui-react'
import { TextField, Grid, FormLabel, Input, Avatar} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

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
        const { email, password, role } = this.state;
        const { history, handleLogin } = this.props;

        //TODO
        /*
        try {
            const response = await Axios.post("", {
                email, 
                password,
            });

            const { status, data } = response;

            if (status === 200) {
                console.log(`ss${data}`);

                this.setState({
                    role: response.data,
                });
                console.log(`dd${this.state.role}`);
            }

            this.handleClose();
            handleLogin(true, this.state.role);
            console.log(response);
            history.push("/");
        } catch (error) {
            alert(error);
            console.log(error);
        }
        */
    }

    render() {
        const { email, password, nickname, sex, celno, birth } = this.state;

        return (
            <div>
                
                <h1>
                 배달의 민꽃 서비스에 가입하세요.
                </h1>        
                        <Avatar style={{marginLeft : 200}}>
                        <Icon name='user circle' />
                        </Avatar>
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
                        <br/>
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

                        <Button primary={false}> Sign Up</Button>
                        <Button variant="outlined" primary >Sign In</Button>
                        <Button variant="outlined" >close</Button>
                  
            </div>
        )
    }
}
