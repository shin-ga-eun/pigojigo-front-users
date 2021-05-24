import React, { Component } from 'react'
import ReviewItem from './ReviewItem'

export default class ReviewList extends Component {
    state = {
        // seasonItems: [],
        seasonItems: [
          {
            sn: 0,
            img: "꽃이름0의 이미지",
            flowerName: "꽃이름0",
            flowerType: "4월의 시즌상품",
            flowerSub: "꽃이름0의 상세정보",
          },
          {
            sn: 1,
            img: "꽃이름1의 이미지",
            flowerName: "꽃이름1",
            flowerType: "4월의 시즌상품",
            flowerSub: "꽃이름1의 상세정보",
          },
         
        ],
    };
    
    mapToComponents = (data) => {
        // TODO: 4월 정보 조회결과 꽃 목록 리스트 가져오기
        data.sort(data.sn);
        return <ReviewItem items={data} />;
    };
    
    render() {
        const { mapToComponents } = this;
        const { seasonItems } = this.state;
    
        return (
          <div>
            {mapToComponents(seasonItems)}
          </div>
        );
    }
}

