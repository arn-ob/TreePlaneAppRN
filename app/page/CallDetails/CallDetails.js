import React, { Component } from "react";
import {
    Container, Header, Title, Button, Left, Right, Body, Icon, Col, Row, Content, Text, Card, CardItem
} from "native-base";
import { ScrollView, Image, Linking } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

export default class CallDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            spinner: false,
            username: "",
            password: "",
            isLoading: false,
            hidePassword: true,
            options: '',
            image_name: this.props.navigation.state.params.image_name ? this.props.navigation.state.params.image_name : "",
        };
        this.inputs = {};
    }

    logout = async () => {
        await AsyncStorage.removeItem("isLogin");
        this.props.navigation.navigate("AppLogin")
    }


    render() {
        console.log(this.state.image_name)

        let imgSource = {
            "1": {
                uri: require(`../../../assets/asd.jpg`)
            },
            "2": {
                uri: require("../../../assets/dfg.jpg"),
            },
            "3": {
                uri: require("../../../assets/dfgdfg.jpg"),
            },
            "4": {
                uri: require("../../../assets/dfgfdg.jpg"),
            },
            "5": {
                uri: require("../../../assets/DFsf.jpg"),
            },
        }
        return (
            <Container>
                <Header style={{ backgroundColor: 'green' }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent>
                            <Icon name='md-arrow-back' onPress={() => this.props.navigation.navigate("HomePage")} />
                        </Button>
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Title>নার্সারি নম্বর</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Icon name='exit' onPress={this.logout} />
                    </Right>
                </Header>
                <Content style={{ margin: 10 }}>
                    <Content>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Body>
                                        <Text>Nursery Owner: Shohidul </Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={imgSource[this.state.image_name].uri} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent onPress={() => Linking.openURL(`tel:01963953896`)}>
                                        <Icon active name="call" />
                                        <Text>Call</Text>
                                    </Button>
                                </Left>
                                <Body>
                                    <Button transparent>
                                        <Text>Aftabnagar</Text>
                                    </Button>
                                </Body>
                            </CardItem>
                        </Card>



                        <Card>
                            <CardItem>
                                <Left>
                                    <Body>
                                        <Text>Nursery Owner: Milon  </Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={imgSource[this.state.image_name].uri} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent onPress={() => Linking.openURL(`tel:01758465478`)}>
                                        <Icon active name="call" />
                                        <Text>Call</Text>
                                    </Button>
                                </Left>
                                <Body>
                                    <Button transparent>
                                        <Text>Bonosree</Text>
                                    </Button>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Left>
                                    <Body>
                                        <Text>Nursery Owner: Mojammel Haq  </Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={imgSource[this.state.image_name].uri} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent onPress={() => Linking.openURL(`tel:01751358612`)}>
                                        <Icon active name="call" />
                                        <Text>Call</Text>
                                    </Button>
                                </Left>
                                <Body>
                                    <Button transparent>
                                        <Text>Aftabnagar</Text>
                                    </Button>
                                </Body>
                            </CardItem>
                        </Card>

                    </Content>
                </Content>
            </Container>
        );
    }
}
