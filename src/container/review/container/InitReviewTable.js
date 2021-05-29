import React, { Component } from 'react'
import ReviewTable from './ReviewTable'
import axios from "axios";

export default class InitReviewTable extends Component {
    state = {
        reviews: [],
    };

    componentDidMount = async () => {
      // GET /reviews
      try {
          const response = await axios.get("/main/reviews");
          const { status, data } = response;
          if (status === 200) {
             
             
              this.setState({
                 
                  reviews: data,
              });
              console.log(this.state.reviews);
          }
      } catch (e) {

      }
    } 

    render() {

      const {reviews} = this.state;

        return (
          <div>
            <ReviewTable reviews = {reviews}/>
          </div>
        );
    }
}

