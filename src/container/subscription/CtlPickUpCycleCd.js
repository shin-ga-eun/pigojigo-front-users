import React, { Component } from 'react'
import { Button, Grid, Radio, Segment, Divider, Image, CardContent} from 'semantic-ui-react'
import { Card, CardMedia, Typography } from '@material-ui/core';

export default class CtlPickUpCycleCd extends Component {

    constructor(props){
        super(props);
        this.state = {
           value: '1'
        };
        this.handlePickUpCycleCd = this.handlePickUpCycleCd.bind(this);
    }

    handlePickUpCycleCd = (e, {value}) => {
        this.setState({ value })
        this.props.onData(value);
    }

    render() {
        return (
            <div>

            <Segment placeholder style={{width: 700, height: 200}}>
            <Grid textAlign='left'>
                <Grid.Row style={{marginLeft: 10, marginBottom : 20}}>
                <Radio
                    label='한달에 1번 수령하고 싶어요. (Once a month) '
                    name='radioGroup'
                    value='1'
                    checked={this.state.value === '1'}
                    onChange={this.handlePickUpCycleCd}
                />
                </Grid.Row>
               
                <Grid.Row style={{marginLeft: 10}}>
                <Radio
                    label='2주에 한번 수령하고 싶어요. (Once every two weeks)'
                    name='radioGroup'
                    value='2'
                    checked={this.state.value === '2'}                        
                    onChange={this.handlePickUpCycleCd}
                />
                </Grid.Row>
            </Grid>
            </Segment>
            </div>
        )
    }
}
