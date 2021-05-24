import React, { Component } from 'react'
import { Segment, Grid, Card, Icon, Image } from 'semantic-ui-react'

export default class ReviewItem extends Component {

    render() {
        const {items} = this.props;
        const {Content, Header, Meta, Description} = Card;

        return (
            <div>
                {items.map(card => (
                    <Segment placeholder fullWidth>
                    <Grid columns={1} textAlign='left' relaxed='very'>
                        <Grid.Column >
                            {/* TODO: https://material-ui.com/components/tables/ */}
                            {card.flowerName}

                        </Grid.Column>

                    </Grid>
                    </Segment>   
                ))}
            </div>
        )
    }
}
