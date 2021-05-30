import React, { Component } from "react";
import axios from 'axios';
import SeasonItem from '../container/SeasonItem';
import Container from "@material-ui/core/Container";
import { CssBaseline } from "@material-ui/core";

class SeasonList extends Component {
  state = {
    seasons:[],
  };

  mapToComponents = (data) => {

    return <SeasonItem seasons={data} />;
  };

  componentDidMount =async () => {
    // GET /reviews
    try {
        const response = await axios.get("/seasons");
        const { status, data } = response;
        if (status === 200) {
            const { state } = this;

            this.setState({
              ...state,
                seasons: data,
            });
        }
    } catch (e) {

    }
  }

  render() {
    const { mapToComponents } = this;
    const { seasons } = this.state;

    return (
      <div>
        <CssBaseline />

        {mapToComponents(seasons)}
      </div>
    );
  }
}
export default SeasonList;
