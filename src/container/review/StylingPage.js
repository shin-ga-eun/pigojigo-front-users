import React, { Component } from 'react'
import { Modal, Form, Button, Icon, Grid, Header, Segment} from 'semantic-ui-react'
import CtlReviewAddBtn from './container/CtlReviewAddBtn'
import axios from 'axios';

export default class StylingPage extends Component {

    state = {
        reviews: [
            {
                birth: "1998-02-10",
                imgUrl: "http://127.0.0.1:8080/review/11",
                nickname: "신가은",
                reqDtm: "2021-05-29",
                reviewCn: "꽃 정기구독은 처음인데 너무 좋네요~동해물과 백두산이 마르고 닳도록",
                sex: "여",
                singleLineEval: "꽃 정기구독은 처음이에요 !",
                subCnt: 1,
            }
        ]
    };

    componentDidMount = async () => {
      // GET /reviews
      try {
          const response = await axios.get("/reviews");
          const { status, data } = response;
          if (status === 200) {
              console.log(data);
              const { state } = this;
              this.setState({
                  ...state,
                  reviews: data.content,
              });
          }
      } catch (e) {

      }
    } 

    render() {

        const { reviews } = this.state;

        return (
            <div>
                <Segment style={{ padding: '1em 8em'}} vertical>
                

               
                <CtlReviewAddBtn/>

                        
                    
                </Segment>
            </div>
        )
    }
}
