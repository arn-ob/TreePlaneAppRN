import React, { Component } from "react";
import {
    Container, Header, Title, Button, Left, Right, Body, Icon, Col, Row, Content, Text, Card, CardItem, Picker
} from "native-base";
import Spinner from "react-native-loading-spinner-overlay";
import { FlatGrid } from 'react-native-super-grid';
import { ScrollView } from "react-native";
import styles from './styles';
import { TouchableOpacity } from "react-native-gesture-handler";

export default class DetailsOurSelf extends Component {
    constructor(props) {
        super(props);

        this.state = {
            spinner: false,
            username: "",
            password: "",
            isLoading: false,
            hidePassword: true,
            options: '',

            selectSub: ''
        };
        this.inputs = {};
    }
    render() {
        return (
            <Container>

                <Header style={{ backgroundColor: 'green' }}>
                    <Left style={{flex:1}}>
                        <Button transparent>
                            <Icon name='md-arrow-back' onPress={() =>  this.props.navigation.goBack()}/>
                        </Button>
                    </Left>
                    <Body style={{flex:2}}>
                        <Title>আমাদের পরিচিতি</Title>
                    </Body>
                </Header>
                <Content>
                    <ScrollView>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Body>
                                        <Text>আমাদের পরিচিতি</Text>
                                    </Body>
                                </Left>
                                <Right>
                                    <Button transparent>
                                        <Text>View</Text>
                                    </Button>
                                </Right>
                            </CardItem>
                            <CardItem>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    placeholder="সাবক্রিপশন"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selectSub}
                                    onValueChange={(e) => this.setState({selectSub: e})}
                                >
                                    <Picker.Item label="মাসিক ভিত্তিতে" value="1" />
                                    <Picker.Item label="আমাদের নিজস্ব লোকবল দ্বারা" value="2" />
                                    <Picker.Item label="বিশেষজ্ঞ ব্যক্তি দ্বারা" value="3" />
                                </Picker>
                            </CardItem>

                            <CardItem>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    placeholder="বিশেষ প্যাকেজ"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selectPkg}
                                    onValueChange={(e) => this.setState({selectPkg: e})}
                                >
                                    <Picker.Item label="একোয়া ফার্মিং" value="1" />
                                    <Picker.Item label="হাইড্রোফার্মিং" value="2" />
                                    <Picker.Item label="ড্রিপ ওয়াটার ইরিগেশন" value="3" />
                                    <Picker.Item label="প্রযুক্তিগত সুবিধা " value="4" />
                                </Picker>
                            </CardItem>
                        </Card>

                    </ScrollView>
                </Content>
            </Container>
        );
    }
}
