import React, { Component } from "react";
import {
    Container, Header, Title, Button, Left, Right, Body, Icon, Col, Row, Content, Text, Card, CardItem
} from "native-base";
import { ScrollView, Image } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

export default class pictureRoof extends Component {
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

        const data = ["../../../assets/dfgdfg.jpg", "../../../assets/dfgfdg.jpg", "../../../assets/DFsf.jpg", "../../../assets/ertrzdgf.jpg", "../../../assets/etre.jpg", "../../../assets/FGHFGH.jpg", "../../../assets/FGHGFH.jpg", "../../../assets/hgfjghj.jpg", "../../../assets/ioi.jpg", "../../../assets/jghkjhg.jpg", "../../../assets/qe.jpg", "../../../assets/sad.jpg", "../../../assets/sdfDF.jpg", "../../../assets/sdfsfd.jpg", "../../../assets/sdsdgsd.jpg", "../../../assets/sdzfsf.jpg", "../../../assets/sdzsdf.jpg"]


        return (
            <Container>
                <Header style={{ backgroundColor: 'green' }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent>
                            <Icon name='md-arrow-back' onPress={() => this.props.navigation.navigate("HomePage")} />
                        </Button>
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Title>ছাদ বাগান তৈরি!</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Icon name='exit' onPress={this.logout} />
                    </Right>
                </Header>
                <Content>
                    <ScrollView>
                       
                        <Card>
                            <CardItem cardBody>
                                <Image source={require("../../../assets/asd.jpg")} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                        </Card>


                        <Card>
                            <CardItem cardBody>
                                <Image source={require( "../../../assets/dfg.jpg")} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                        </Card>
                        
                        <Card>
                            <CardItem cardBody>
                                <Image source={require("../../../assets/dfgdfg.jpg")} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody>
                                <Image source={require("../../../assets/dfgfdg.jpg")} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody>
                                <Image source={require("../../../assets/DFsf.jpg")} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                        </Card>
                    </ScrollView>
                </Content>
            </Container>
        );
    }
}
