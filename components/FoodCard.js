import React, { Component } from 'react';
import { Avatar, Button , Card , Title , Paragraph } from 'react-native-paper';


class FoodCard extends Component {
    render(){
        return(
            <Card>
                <Card.Content>
                    <Title> Food </Title>
                </Card.Content>
                <Card.Cover source={{ uri: 'http://smartcollegevisit.com/wp-content/uploads/2015/11/Fotolia_19602064_XS.jpg'}} />
                <Card.Actions>
                    <Button>
                        View list
                    </Button>
                </Card.Actions>
            </Card>
        )
    }
}

export default FoodCard