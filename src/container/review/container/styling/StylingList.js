import React, { Component } from 'react'
import axios from 'axios'
import Container from "@material-ui/core/Container";
import { CssBaseline } from "@material-ui/core";
import StylingItem from './StylingItem';

export default class StylingList extends Component {

    state = {
        reviews:[],
    }

     mapToComponents = (data) => {
         
         return <StylingItem reviews={data} />;
     }
  
    componentDidMount =async () => {
          // GET /reviews
          try {
              const response = await axios.get("/reviews");
              const { status, data } = response;
              if (status === 200) {
                  const { state } = this;

                  this.setState({
                      ...state,
                      reviews: data,
                  });
              }
          } catch (e) {
  
          }
    }
    render() {
        return (
            <div>
                <CssBaseline />
                <Container maxWidth="md">
                    
                    {this.mapToComponents(this.state.reviews)}
                </Container>
            </div>
        )
    }
}
