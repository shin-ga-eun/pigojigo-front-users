import React, { Component } from 'react'
import Rqdoc from './Rqdoc'
import axios from 'axios'

export default class RqdocList extends Component {
    
    state={

        rqdocs: [],
    }

    componentDidMount = async () => {

        const email = localStorage.getItem('email');

        // GET /artSharing/art/artsList/{pageNum}
        try {
            const response = await axios.get(`/subscription/${email}`);
            const { status, data } = response;
            if (status === 200) {
                console.log(data);
                const { state } = this;
                this.setState({
                    ...state,
                    rqdocs: data,
                });
            }
        } catch (e) {

        }
    }
    
    render() {
        return (
            <div>
                <Rqdoc rqdocs={this.state.rqdocs} />
            </div>
        )
    }
}
