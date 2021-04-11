import React, { Component } from 'react'
import { Grid, Card, Icon, Image } from 'semantic-ui-react'

class SeasonItem extends Component {

    render() {

        const {items} = this.props;
        const {Content, Header, Meta, Description} = Card;
        const {Row, Column} = Grid;

        return (
            <div>
                <Grid columns={4} doubling>
                {items.map(card => (
                    <Column width={4}>
                        <Card>
                            <Content>
                                {/* img 추가 */}
                                <Header>{card.flowerName}</Header>
                                <Meta>{card.flowerType}</Meta>
                                <Description>{card.flowerSub}</Description>
                            </Content>
                        </Card>
                    </Column> 
                ))}
                </Grid>
            </div>
        )
    }
}
export default SeasonItem;
