import React, { Component } from 'react'
import { Button, Grid, Radio, Segment, Divider, Image, CardContent} from 'semantic-ui-react'
import { Card, CardMedia, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import vase from '/Users/sge/react-workspace/pigojigo/src/resources/flower/vase.jpeg'
import vasedefault from '/Users/sge/react-workspace/pigojigo/src/resources/flower/vasedefault.jpeg'

export default class CtlVaseYn extends Component {

    constructor(props){
        super(props);
        this.state = {
           value: 'N'
        };
        this.handleVaseYn = this.handleVaseYn.bind(this);
    }

    handleVaseYn = (e, {value}) => {
        this.setState({ value })
        this.props.onData(value);
    }

    render() {
        return (
            <div>
           <Segment placeholder style={{width: 700}}>
            <Grid columns={2} textAlign='left' relaxed='very'>
                <Grid.Column >
                <Radio
                    label='꽃병 추가안함'
                    name='radioGroup'
                    value='N'
                    checked={this.state.value === 'N'}
                    onChange={this.handleVaseYn}
                    style={{ margin: 10 }}
                    
                />
                <Card>
                   <CardMedia
                    component="img"
                    alt="추가함"
                    height="350"
                    image = {vasedefault}
                   />
                </Card>
                </Grid.Column>
               
                <Grid.Column>
                <Radio
                    label='꽃병 추가함'
                    name='radioGroup'
                    value='Y'
                    checked={this.state.value === 'Y'}                        
                    onChange={this.handleVaseYn}
                    style={{ margin: 10 }}
                />
                <Card>
                   <CardMedia
                    component="img"
                    alt="추가함"
                    height="350"
                    image = {vase}
                   />
                </Card>
                </Grid.Column>
            </Grid>
            <Divider vertical>Or</Divider>
            </Segment>
        </div>
        )
    }
}
