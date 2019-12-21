import React, { Component } from "react";
import {
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  StatusBar,
  TextInput,
  Text
} from "react-native";
import {
  Container,
  Button,
  Content,
  Item,
  Form,
  Toast,
  Picker
} from "native-base";
import { HideWithKeyboard } from "react-native-hide-with-keyboard";
import Spinner from "react-native-loading-spinner-overlay";

// Style
import styles from "./styles";
import AsyncStorage from '@react-native-community/async-storage';

// Image
const launchscreenLogo = require("../../../assets/frmlogo.png");

export default class OldLoginPage extends Component {
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

    this.login_handle_event = this.login_handle_event.bind(this);
  }

  async componentWillMount(){
    let a = await AsyncStorage.getItem('isLogin')
    if(a === 'true'){
      this.props.navigation.navigate("HomePage");
    }
  }

  login_handle_event() {
    this.setState({ spinner: true });
    const username = this.state.username; // "1.1.0095.4.70";
    const password = this.state.password; // "77557"

    if (password === "" || username === "") {
      Toast.show({
        text: "Please Check Inputs",
        buttonText: "Okay",
        duration: 3000
      });
      this.setState({ spinner: false });
    } else {
      if (password === "admin" || username === "admin") {
        this.setState({ spinner: false });
        AsyncStorage.setItem("isLogin", "true");
        this.props.navigation.navigate("HomePage");
      } else {
        Toast.show({
          text: "Invalid Login",
          buttonText: "Okay",
          duration: 3000
        });
      }
    }
  }

  render() {
    return (
      <Container>
        <Spinner visible={this.state.spinner} />

        <StatusBar backgroundColor="white" barStyle="light-content" />

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.Container}>
            <View style={styles.logoContainer}>
              <ImageBackground source={launchscreenLogo} style={styles.logo} />
            </View>

            <HideWithKeyboard style={styles.titleContainer}>
              <View>
                <Text style={styles.titleText}>ছাদ বাগান তৈরি!</Text>
                <Text style={styles.titleDesc}>
                  নিম্নলিখিত তথ্য দিয়ে লগ ইন করুন
                </Text>
              </View>
            </HideWithKeyboard>

            <View style={styles.formContainer}>
              <Content padder>
                <Form style={styles.input}>
                  <Item regular style={{ marginBottom: 10, borderRadius: 5 }}>
                    <View style={styles.textBoxBtnHolder}>
                      <TextInput
                        placeholder="নাম"
                        autoCapitalize="none"
                        keyboardType="default"
                        onChangeText={text => this.setState({ username: text })}
                        returnKeyType={"next"}
                        value={this.state.username}
                        style={styles.textBox}
                      />
                    </View>
                  </Item>
                  <Item regular style={{ marginBottom: 10, borderRadius: 5 }}>
                    <View style={styles.textBoxBtnHolder}>
                      <TextInput
                        placeholder="পাসওয়ার্ড"
                        autoCapitalize="none"
                        keyboardType="numeric"
                        onChangeText={text => this.setState({ password: text })}
                        secureTextEntry={this.state.hidePassword}
                        value={this.state.password}
                        style={styles.textBox}
                      />
                    </View>
                  </Item>
                  <Item regular style={{ marginBottom: 10, borderRadius: 5 }}>
                    <Picker
                      note
                      mode="dropdown"
                      style={{ width: 120 }}
                      onValueChange={(e) => this.setState({options: e})}
                    >
                      <Picker.Item label="আপনি কি ছাদ বাগান তৈরি করবেন? " value="1" />
                      <Picker.Item label="আপনার কি নার্সারি আছে?" value="2" />
                    </Picker>
                  </Item>
                </Form>
                <Button
                  block
                  primary
                  style={{ backgroundColor: "green", borderRadius: 5 }}
                  onPress={this.login_handle_event}
                >
                  <Text>প্রবেশ কর</Text>
                </Button>
                <Button
                  block
                  primary
                  style={{ backgroundColor: "yellow", borderRadius: 5, marginTop: 5 }}
                  onPress={() =>  this.props.navigation.navigate("SignUp")}
                >
                  <Text>নিয়োগপত্র</Text>
                </Button>
              </Content>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Container>
    );
  }
}
