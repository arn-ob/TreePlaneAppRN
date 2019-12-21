import React, { Component } from "react";
import {
    Container, Header, Title, Button, Left, Right, Body, Icon, Col, Row, Content, Text, Picker, View, Form, Item, Input
} from "native-base";
import { ScrollView, TextInput, Alert } from "react-native";
import styles from './styles';


export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            spinner: false,
            username: "",
            nid: '',
            phoneNo: '',
            otp: '',
            password: "",
            isLoading: false,
            hidePassword: true,
            options: '',
            options_2: '',

            selectSub: ''
        };
        this.inputs = {};
    }
    render() {
        return (
            <Container>

                <Header style={{ backgroundColor: 'green' }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent>
                            <Icon name='md-arrow-back' onPress={() => this.props.navigation.goBack()} />
                        </Button>
                    </Left>
                    <Body style={{ flex: 2 }}>
                        <Title>নিয়োগপত্র</Title>
                    </Body>
                </Header>
                <Content>
                    <ScrollView>
                        <View style={styles.formContainer}>
                            <Content padder>
                                <Form style={styles.input}>
                                    
                                    <Text>আপনার নাম</Text>
                                    <Item regular style={{ marginBottom: 10, borderRadius: 5 }}>
                                        <View style={styles.textBoxBtnHolder}>
                                            <TextInput
                                                placeholder="আপনার নাম "
                                                autoCapitalize="none"
                                                keyboardType="default"
                                                onChangeText={text => this.setState({ username: text })}
                                                returnKeyType={"next"}
                                                value={this.state.username}
                                                style={styles.textBox}
                                            />
                                        </View>
                                    </Item>
                                    
                                    <Text>জাতিয় পরিচয়পত্র</Text>
                                    <Item regular style={{ marginBottom: 10, borderRadius: 5 }}>
                                        
                                        <View style={styles.textBoxBtnHolder}>
                                            <TextInput
                                                placeholder="জাতিয় পরিচয়পত্র"
                                                autoCapitalize="none"
                                                keyboardType="default"
                                                onChangeText={text => this.setState({ nid: text })}
                                                returnKeyType={"next"}
                                                value={this.state.nid}
                                                style={styles.textBox}
                                            />
                                        </View>
                                    </Item>

                                    <Text>ফোন নম্বর</Text>
                                    <Item regular style={{ marginBottom: 10, borderRadius: 5 }}>
                                        <View style={styles.textBoxBtnHolder}>
                                            <Item>
                                                <Input
                                                    placeholder='ফোন নম্বর'
                                                    onChangeText={text => this.setState({ phoneNo: text })}
                                                />
                                                <Icon active name='swap' onPress={() => Alert.alert('OTP Send')} />
                                            </Item>
                                        </View>
                                    </Item>

                                    <Text>OTP</Text>
                                    <Item regular style={{ marginBottom: 10, borderRadius: 5 }}>
                                        <View style={styles.textBoxBtnHolder}>
                                            <TextInput
                                                placeholder="OTP"
                                                autoCapitalize="none"
                                                keyboardType="default"
                                                onChangeText={text => this.setState({ otp: text })}
                                                returnKeyType={"next"}
                                                value={this.state.otp}
                                                style={styles.textBox}
                                            />
                                        </View>
                                    </Item>

                                    <Text>চুক্তিপত্র সম্পাদন </Text>
                                    <Item regular style={{ marginBottom: 10, borderRadius: 5 }}>
                                        <Picker
                                            note
                                            mode="dropdown"
                                            style={{ width: 120 }}
                                            onValueChange={(e) => this.setState({ options_2: e })}
                                        >
                                            <Picker.Item label="আপনার নার্সারি কোথায় অবস্থিত?  " value="1" />
                                            <Picker.Item label="আপনি কাস্টমার কে কোন ধরনের সেবা দিতে আগ্রহী? " value="2" />
                                            <Picker.Item label="আপনার নার্সারিতে কোন ধরনের  গাছ আছে? " value="3" />
                                        </Picker>
                                    </Item>
                                </Form>
                                <Button
                                    block
                                    primary
                                    style={{ backgroundColor: "green", borderRadius: 5 }}
                                    onPress={() => Alert.alert('সম্পূর্ণ অনুরোধ')}
                                >
                                    <Text>অনুরোধ প্রেরণ করুন</Text>
                                </Button>
                            </Content>
                        </View>

                    </ScrollView>
                </Content>
            </Container>
        );
    }
}
