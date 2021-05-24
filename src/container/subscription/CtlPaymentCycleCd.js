import React, { Component } from 'react'
import { Button, Grid, Radio, Segment, Divider, Image, CardContent} from 'semantic-ui-react'
import { Card, CardMedia, Typography } from '@material-ui/core';

export default class CtlPaymentCycleCd extends Component {

    constructor(props){
        super(props);
        this.state = {
           value: '1'
        };
        this.handlePaymentCycleCd = this.handlePaymentCycleCd.bind(this);
    }

    handlePaymentCycleCd = (e, {value}) => {
        this.setState({ value })
        this.props.onData(value);
    }

    render() {
        return (
            <div>

            <Segment placeholder style={{width: 700, height: 200}}>
            <Grid textAlign='left'>
                <Grid.Row style={{marginLeft: 10, marginBottom : 10}}>
                <Radio
                    label='1개월마다 자동 결제 '
                    name='radioGroup'
                    value='1'
                    checked={this.state.value === '1'}
                    onChange={this.handlePaymentCycleCd}
                />
                </Grid.Row>
               
                <Grid.Row style={{marginLeft: 10, marginBottom : 10}}>
                <Radio
                    label='2개월마다 자동 결제'
                    name='radioGroup'
                    value='2'
                    checked={this.state.value === '2'}                        
                    onChange={this.handlePaymentCycleCd}
                />
                </Grid.Row>

                <Grid.Row style={{marginLeft: 10}}>
                <Radio
                    label='6개월마다 자동 결제'
                    name='radioGroup'
                    value='6'
                    checked={this.state.value === '6'}                        
                    onChange={this.handlePaymentCycleCd}
                />
                </Grid.Row>
            </Grid>
            </Segment>
            </div>
        )
    }
}
