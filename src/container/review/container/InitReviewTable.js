import React, { Component } from 'react'
import ReviewTable from './ReviewTable'

export default class InitReviewTable extends Component {
    state = {
        reviewRows: [
          {
            nickname : '사용자',
            birth : '24',  
            sex: '여', 
            subCnt: 10, 
            reviewCn: '가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라', 
            singleLineEval: '마바사아', 
            regDate: '2021-02-10', 
            reviewImg: 'imgUrl', 
          },
          {
            nickname : '사용자',
            birth : '20',  
            sex: '여', 
            subCnt: 10, 
            reviewCn: '가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라', 
            singleLineEval: '마바사아', 
            regDate: '2021-02-10', 
            reviewImg: 'imgUrl', 
          },
          {
            nickname : '사용자',
            birth : '28',  
            sex: '여', 
            subCnt: 10, 
            reviewCn: '가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라', 
            singleLineEval: '마바사아', 
            regDate: '2021-02-10', 
            reviewImg: 'imgUrl', 
          },
          {
            nickname : '사용자',
            birth : '28',  
            sex: '여', 
            subCnt: 10, 
            reviewCn: '가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라', 
            singleLineEval: '마바사아', 
            regDate: '2021-02-10', 
            reviewImg: 'imgUrl', 
          },
          {
            nickname : '사용자',
            birth : '28',  
            sex: '여', 
            subCnt: 10, 
            reviewCn: '가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라', 
            singleLineEval: '마바사아', 
            regDate: '2021-02-10', 
            reviewImg: 'imgUrl', 
          },
         
        ],
    };
   
    render() {
        const { reviewRows } = this.state;
    
        //TODO: 고객 후기 top5 조회
        return (
          <div>
            <ReviewTable reviewRows = {reviewRows}/>
          </div>
        );
    }
}

