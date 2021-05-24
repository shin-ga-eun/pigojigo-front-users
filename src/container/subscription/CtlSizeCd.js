import React, { Component } from 'react'
import { Button, Grid, Radio, Segment, Divider, Image} from 'semantic-ui-react'
import { Card, CardMedia } from '@material-ui/core';
import sizes from '/Users/sge/react-workspace/pigojigo/src/resources/flower/sizes.jpeg'
import sizem from '/Users/sge/react-workspace/pigojigo/src/resources/flower/sizem.jpeg'

export default class CtlSizeCd extends Component {

    constructor(props){
        super(props);
        this.state = {
           value: 'S'
        };
        this.handleSizeCd = this.handleSizeCd.bind(this);
    }

    handleSizeCd = (e, {value}) => {
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
                    label='S (Small)'
                    name='radioGroup'
                    value='S'
                    checked={this.state.value === 'S'}
                    onChange={this.handleSizeCd}
                    style={{ margin: 10 }}
                    
                />
                <Card>
                   <CardMedia
                    component="img"
                    alt="꽃사이즈 S"
                    height="350"
                    image = {sizes}
                   />
                </Card>
                </Grid.Column>
               
                <Grid.Column>
                <Radio
                    label='M (Medium)'
                    name='radioGroup'
                    value='M'
                    checked={this.state.value === 'M'}                        
                    onChange={this.handleSizeCd}
                    style={{ margin: 10 }}
                />
                <Card>
                   <CardMedia
                    component="img"
                    alt="꽃사이즈 M"
                    height="350"
                    image = {sizem}
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