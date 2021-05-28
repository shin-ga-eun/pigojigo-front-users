import React, { Component } from 'react'
import sample from '/Users/sge/react-workspace/pigojigo/src/resources/flower/sample.png'
import vaseicon  from '/Users/sge/react-workspace/pigojigo/src/resources/flower/vaseicon.png'
import complete  from '/Users/sge/react-workspace/pigojigo/src/resources/flower/complete.png'
import Grid from '@material-ui/core/Grid';
import {Segment} from 'semantic-ui-react';

export default class HowToUse extends Component {
    render() {
        return (
            <div style={{width: 1100}}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                    >
                    <Grid item xs={12} sm={4}>
                        <img src={sample} height='220' alt = '꽃'/>
                        <h4>꽃 사이즈만 고르시면,<br/><br/>계절에 어울리는 꽃으로 보내드려요</h4>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <img src={vaseicon} height='130' alt = '화병'/>
                        <h4><br/><br/>꽃병도 같이 보내드려요</h4>
                    </Grid>
                    <Grid item xs={12} sm={4}> 
                        <img src={complete} height='220' alt = '꽃병'/>
                        <h4></h4>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
