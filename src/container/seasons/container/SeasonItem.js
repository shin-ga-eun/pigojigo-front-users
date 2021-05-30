import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";


class SeasonItem extends Component {
  render() {
    const { seasons } = this.props;

    return (
      <div>
        <Grid container spacing={3}>
          {seasons.map((season) => (
            <Grid item key={season} xs={12} sm={6} md={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={season.imgUrl}
                    title={season.flowerNm}
                  />
                  <CardContent style={{height: 80}} align='left'>
                      <p style={{ color: "#2962FF", fontSize: 15}}> [ <b>{season.month} 월</b>의 시즌상품 ] <b style={{marginLeft: 10, fontSize: 20}}>{season.flowerNm}</b></p>
                      <p style={{ color: "#000000", fontSize: 15}}> {season.flowerInfo} </p>
                  </CardContent>
                  <CardActions></CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
export default SeasonItem;
