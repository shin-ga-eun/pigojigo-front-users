import React, { Component } from 'react'
import { Modal, Form, Button} from 'semantic-ui-react'
import { TextField, Grid, FormLabel, Input, Avatar} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './style/style.js'
import Axios from 'axios'

class SignIn extends Component {
    state = {
        email : "",
        password : "",
       
        open : false,   //dialog 창 옵션
    }

    handleClickOpen= () => {
        this.setState({
            open: true, //dialog 창 옵션
        });
    }

    handleClose= () => {
        this.setState({
            email: "",
            password: "",
            open: false, //dialog 창 옵션
        });
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

        try {
            const response = await Axios.post("/signIn", {
                email, 
                password,

                headers: {
                    "accept" : "application/json",

                    "content-type" : "application/json;charset=UTF-8"
                },
            });

            const { status, data } = response;

            this.handleClose();
            handleLogin(true, data);
            
            localStorage.setItem('email', data.email);
            localStorage.setItem('nickname', data.nickname);
            
        } catch (error) {
            alert(error);
            console.log(error);
        }

    }

    render() {
        const classes = useStyles.bind();
        const { email, password } = this.state;

        return (
            <div>
                <Button color="inherit" onClick={this.handleClickOpen}>
                    Sign In
                </Button>
                <Modal    
                    style={{width:500}}
                    open={this.state.open} 
                    onClose={this.handleClose}> 
                    <Modal.Header>                     
                        Sign In
                    </Modal.Header>
                    <Modal.Content>
                        <Avatar style={{marginLeft : 200}}>
                        <LockOutlinedIcon />
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
                    </Modal.Content>
                    <Modal.Actions>
                        <Button primary={false} href='/signUp'> Sign Up</Button>
                        <Button variant="outlined" primary onClick={this.handleFormSubmit}>Sign In</Button>
                        <Button variant="outlined" onClick={this.handleClose}>close</Button>
                    </Modal.Actions>
                </Modal>
               
            </div>
        )
    }
}

export default SignIn;
