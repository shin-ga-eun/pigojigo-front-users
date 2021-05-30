import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Link} from "react-router-dom";

export default class StylingItem extends Component {
    render() {
        const { reviews } = this.props;

        return (
            <div>
                <Grid container spacing={3}>
                    {reviews.map(review => (
                        <Grid item key={review} xs={12} sm={6} md={4}>

                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="340"
                                        image={review.imgUrl}
                                        title={review.nickname}
                                        alt="리뷰 사진 미등록"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h7" component="h7">
                                            <b> {review.nickname} 님 </b>
                                            <b style={{color: '#969696', marginLeft: 10}}> {review.birth} {review.sex} </b>
                                            <b style={{color: '#0000FF', marginLeft: 10}}>{review.subCnt} 번째 구독중 </b>
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="h6">
                                            {review.singleLineEval}
                                        </Typography>
                                        <Typography gutterBottom variant="h7" component="h7">
                                            {review.reviewCn}
                                        </Typography>
                                        <br/><br/>
                                        <Typography gutterBottom variant="h7" component="h7">
                                            {review.reqDtm}
                                        </Typography>
                                    </CardContent>

                                    <CardActions>
                                    </CardActions>
                                </CardActionArea>
                            </Card>

                        </Grid>
                    ))}

                </Grid>

            </div>
        )
    }
}
