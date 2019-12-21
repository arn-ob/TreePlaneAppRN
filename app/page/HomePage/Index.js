import React, { Component } from "react";
import {
    Container, Header, Title, Button, Left, Right, Body, Icon, Col, Row, Content, Text, Card, CardItem
} from "native-base";
import { ScrollView } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            spinner: false,
            username: "",
            password: "",
            isLoading: false,
            hidePassword: true,
            options: ''
        };
        this.inputs = {};
    }

    logout = async () => {
        await AsyncStorage.removeItem("isLogin");
        this.props.navigation.navigate("AppLogin")
    }


    render() {
        
        let PageMenu = [
            {
                title: 'ছাদ বাগান তৈরি',
                btn: ''
            },
            {
                title: 'ছাদ বাগান মডেল',
                btn: ''
            },
            {
                title: 'রোগ ও পোকা মাকড় দমন',
                btn: ''
            },
            {
                title: 'নার্সারী মালিক',
                btn: ''
            },
            {
                title: 'কল',
                btn: ''
            },

            {
                title: 'জৈব কৃষি ',
                btn: ''
            },
            {
                title: 'ক্রয় ',
                btn: ''
            },
            {
                title: 'বিক্রয় ',
                btn: ''
            },
            {
                title: 'ব্লগার ',
                btn: ''
            },
            {
                title: 'এপ ইনোভেটর এবং ডেভলপার ',
                btn: ''
            },
        ];


        return (
            <Container>

                <Header style={{ backgroundColor: 'green' }}>
                    <Left style={{flex: 1}}>
                        <Button transparent>
                            <Icon name='menu' onPress={() => this.props.navigation.navigate("DetailsOurSelf")}/>
                        </Button>
                    </Left>
                    <Body style={{flex: 1}}>
                        <Title>ছাদ বাগান তৈরি!</Title>
                    </Body>
                    <Right style={{flex: 1}}>
                        <Icon name='exit' onPress={this.logout}/>
                    </Right>
                </Header>
                <Content>
                    <ScrollView>
                        {
                            PageMenu.map(item =>
                                <Card>
                                    <CardItem>
                                        <Left>
                                            <Body>
                                                <Text>{item.title}</Text>
                                            </Body>
                                        </Left>
                                        <Right>
                                            <Button transparent>
                                                <Text>View</Text>
                                            </Button>
                                        </Right>
                                    </CardItem>
                                </Card>
                            )
                        }
                    </ScrollView>
                </Content>
            </Container>
        );
    }
}
