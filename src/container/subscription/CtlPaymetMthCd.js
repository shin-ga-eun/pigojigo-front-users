import React, { Component } from 'react'
import { Button, Grid, Radio, Segment, Divider, Image, CardContent} from 'semantic-ui-react'
import { Card, CardMedia, Typography } from '@material-ui/core';

export default class CtlPaymetMthCd extends Component {

    constructor(props){
        super(props);
        this.state = {
           value: 'PmMthCd1'
        };
        this.handlePaymentMthCd = this.handlePaymentMthCd.bind(this);
    }

    handlePaymentMthCd = (e, {value}) => {
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
                    label='무통장입금'
                    name='radioGroup'
                    value='PmMthCd1'
                    checked={this.state.value === 'PmMthCd1'}
                    onChange={this.handlePaymentMthCd}
                />
                </Grid.Row>
               
                <Grid.Row style={{marginLeft: 10, marginBottom : 10}}>
                <Radio
                    label='신용/체크카드결제'
                    name='radioGroup'
                    value='PmMthCd2'
                    disabled
                    checked={this.state.value === 'PmMthCd2'}                        
                    onChange={this.handlePaymentMthCd}
                />
                </Grid.Row>

                <Grid.Row style={{marginLeft: 10}}>
                <Radio
                    label='페이결제'
                    name='radioGroup'
                    value='PmMthCd3'
                    disabled
                    checked={this.state.value === 'PmMthCd3'}                        
                    onChange={this.handlePaymentMthCd}
                />
                </Grid.Row>
            </Grid>
            </Segment>
            </div>
        )
    }
}
