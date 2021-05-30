import React, { Component } from 'react'
import SeasonList from './container/SeasonList'
import {Grid, Segment} from 'semantic-ui-react'

class SeasonPage extends Component {
    render() {
        return (
          <div>
            <SeasonList />
          </div>
        );
    }
}
export default SeasonPage;