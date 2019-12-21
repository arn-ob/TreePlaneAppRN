import React, { Component } from "react";
import {
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  StatusBar,
  Alert,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  BackHandler,
  Text
} from "react-native";
import { HideWithKeyboard } from "react-native-hide-with-keyboard";
import AsyncStorage from "@react-native-community/async-storage";
import NetInfo from "@react-native-community/netinfo";
import {
  Root,
  Container,
  Button,
  Content,
  Item,
  Form,
  Picker,
  Footer,
  FooterTab,
  Toast
} from "native-base";
import Icon from "react-native-ionicons";
import Spinner from "react-native-loading-spinner-overlay";

// Style
import styles from "./styles";

// API Service
import { AccountLogin } from "../../services/login";

// Components
import CustomAlert from "../../components/Alert/AlertComponent";
import AppVersion from "../../components/AppVersion/AppVersion";

import VersionCheck from "react-native-version-check";

// Image
const launchscreenLogo = require("../../../assets/logo-mobi.png");
const invisible_password = require("../../../assets/invisible_password.png");
const visible_password = require("../../../assets/visible_password.png");

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spinner: false,
      username: "",
      password: "",
      institute_id: "",
      selected2: "",
      isLoading: true,
      hidePassword: true
    };
    this.inputs = {};

    this.login_handle_event = this.login_handle_event.bind(this);
    this.makingIdFromInput = this.makingIdFromInput.bind(this);
  }

  componentDidMount = async () => {
    // // Here the Step if User Already login
    const isLogin = await AsyncStorage.getItem("isLogin");
    if (isLogin === "true" && isLogin !== null) {
      const getType = await AsyncStorage.getItem("type");
      if (getType !== null) {
        if (getType.toUpperCase() === "TEACHER") {
          this.props.navigation.navigate("TeacherHome");
        }
        if (getType.toUpperCase() === "STUDENT") {
          this.props.navigation.navigate("StudentHome");
        }
        if (getType.toUpperCase() === "ADMIN") {
          this.props.navigation.navigate("DashboardHome");
        }
        if (getType.toUpperCase() === "SPECIALADMIN") {
          this.props.navigation.navigate("SpecialDashboardHome");
        }
        if (getType.toUpperCase() === "AGENT") {
          this.props.navigation.navigate("AgentDashboardHome");
        }
      }
    }
  };

  makingIdFromInput() {
    console.log(this.state);
    let type = "";
    if (this.state.selected2 === undefined || this.state.selected2 === "") {
      type = "1";
    } else {
      type = this.state.selected2;
    }
    let a = type + "." + this.state.institute_id + "." + this.state.username;
    console.log(a);
  }

  login_handle_event = () => {
    this.setState({ spinner: true });
    let type = "";
    const username = this.state.institute_id + "." + this.state.username;
    const password = this.state.password;

    if (password === "" || username === "") {
      Toast.show({
        text: "Please Check Inputs",
        buttonText: "Okay",
        duration: 3000
      });
      this.setState({ spinner: false });
    } else {
      const send = {
        user_code: username,
        password: password,
        type: "login",
        device: "Mobile"
      };

      // console.log(send);
      AccountLogin(send)
        .then(responseJson => {
          console.log("resjson", responseJson);
          if (responseJson && responseJson.hasOwnProperty("success")) {
            let checkingVerSkip = false;

            let isGetAnyUpdate = responseJson.data.appid.version; //VersionCheck.getCurrentVersion();
            let appV = responseJson.data.appid.version;

            // console.log("app V",{isGetAnyUpdate, appV})

            if (isGetAnyUpdate !== appV) {
              this.setState({ spinner: false });
              Alert.alert(
                "Update Needed",
                "Update your app from play store",
                [{ text: "OK", onPress: () => console.log("OK Press") }],
                { cancelable: false }
              );
            } else {
              this.setState({
                username: "",
                password: "",
                institute_id: ""
              });

              AsyncStorage.setItem("isLogin", "true");
              AsyncStorage.setItem("auth_token", responseJson.data.auth_token);
              AsyncStorage.setItem("ins", responseJson.data.ins);
              AsyncStorage.setItem("type", responseJson.data.type);
              AsyncStorage.setItem("_id", responseJson.data._id);
              AsyncStorage.setItem("roles", responseJson.data.roles);
              AsyncStorage.setItem("usercode", username);

              this.setState({ spinner: false });

              if (responseJson.data.type === "TEACHER") {
                this.props.navigation.navigate("TeacherHome");
              } else if (responseJson.data.type === "STUDENT") {
                this.props.navigation.navigate("StudentHome");
              } else if (responseJson.data.type === "ADMIN") {
                // Navagate to Admin
                this.props.navigation.navigate("DashboardHome");
              } else if (responseJson.data.type === "SPECIALADMIN") {
                this.props.navigation.navigate("SpecialDashboardHome");
              } else if (responseJson.data.type === "AGENT") {
                this.props.navigation.navigate("AgentDashboardHome");
              } else {
                Toast.show({
                  text: "No Role Found",
                  buttonText: "Okay",
                  duration: 3000
                });
              }
            }
          } else {
            this.setState({ spinner: false });
            Toast.show({
              text: "User not found",
              buttonText: "Close",
              position: "bottom"
            });
            console.log("Problem");
          }
        })
        .catch(err => {
          this.setState({ spinner: false });
          Toast.show({
            text: "Internal Error",
            buttonText: "Close",
            position: "bottom"
          });
          console.log(err);
        });
    }

    // for all problem and solution
    // this.setState({spinner: false});
  };

  onValueChange2(value) {
    console.log(value);
    this.setState({
      selected2: value
    });
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
                <Text style={styles.titleText}>Welcome to MobiPath!</Text>
                <Text style={styles.titleDesc}>
                  Please log in with the following information in order to get
                  all the other benefits.
                </Text>
              </View>
            </HideWithKeyboard>

            <View style={styles.formContainer}>
              <Content padder>
                <Form style={styles.input}>
                  {/* <Item regular style={{marginBottom:10, borderRadius: 5}}>
                                <Picker
                                    mode="dropdown"
                                    style={{ width: undefined }}
                                    placeholder="Select your SIM"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="Student" value="1" />
                                    <Picker.Item label="Teacher" value="2" />
                                    <Picker.Item label="Admin" value="3" />
                                    <Picker.Item label="Agent" value="4" />
                                </Picker>
                                </Item> */}

                  <Item regular style={{ marginBottom: 10, borderRadius: 5 }}>
                    <View style={styles.textBoxBtnHolder}>
                      <TextInput
                        placeholder="Institute ID"
                        autoCapitalize="none"
                        keyboardType="numeric"
                        onChangeText={text =>
                          this.setState({ institute_id: text })
                        }
                        returnKeyType={"next"}
                        style={styles.textBox}
                        value={this.state.institute_id}
                        // ref={ input => {
                        //     this.inputs.two = input;
                        // }}
                      />
                    </View>
                  </Item>

                  <Item regular style={{ marginBottom: 10, borderRadius: 5 }}>
                    <View style={styles.textBoxBtnHolder}>
                      <TextInput
                        placeholder="Usercode"
                        autoCapitalize="none"
                        keyboardType="numeric"
                        onChangeText={text => this.setState({ username: text })}
                        returnKeyType={"next"}
                        value={this.state.username}
                        style={styles.textBox}
                        // ref={ input => {
                        //     this.inputs.two = input;
                        // }}
                      />
                    </View>
                  </Item>

                  <Item regular style={{ marginBottom: 10, borderRadius: 5 }}>
                    <View style={styles.textBoxBtnHolder}>
                      <TextInput
                        placeholder="Password"
                        autoCapitalize="none"
                        keyboardType="numeric"
                        onChangeText={text => this.setState({ password: text })}
                        secureTextEntry={this.state.hidePassword}
                        value={this.state.password}
                        style={styles.textBox}
                      />
                      {/* <TouchableOpacity 
                                            activeOpacity = { 1 } 
                                            style = { styles.visibilityBtn } 
                                            // onPress = { this.managePasswordVisibility }
                                            >
                                            <Image source = { ( this.state.hidePassword ) ? invisible_password : visible_password } style = { styles.btnImage } />
                                        </TouchableOpacity> */}
                    </View>
                  </Item>
                </Form>
                {/* <Loading
                                ref="loading"
                                backgroundColor="#ffffff"
                                indicatorColor= "gray"
                                /> */}
                <Button
                  block
                  primary
                  style={{ backgroundColor: "#30cec3", borderRadius: 5 }}
                  onPress={this.login_handle_event}
                >
                  <Text>SIGN IN</Text>
                </Button>
                {/* <Text style={{color: "#616161",fontSize: 15,textAlign: "center", marginTop:10}}>Forgot Password ?</Text> */}
              </Content>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <HideWithKeyboard>
          <AppVersion />
          <Footer>
            <FooterTab style={{ backgroundColor: "#fff" }}>
              <Button onPress={() => this.props.navigation.navigate("Login")}>
                <Icon name="md-radio-button-on" />
              </Button>
              <Button
                onPress={() => this.props.navigation.navigate("OldLogin")}
              >
                <Icon name="md-radio-button-off" />
              </Button>
            </FooterTab>
          </Footer>
        </HideWithKeyboard>
      </Container>
    );
  }
}
