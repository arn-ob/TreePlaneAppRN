import React from "react";
import { Dimensions, StyleSheet, ScrollView, View, Image } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Footer,
  FooterTab,
  Right
} from "native-base";
import styles from "./style";
import API from "../../config/config";

const drawerCover = require("../../../assets/logo-mobi.png");
const datas = [
  {
    name: "Home",
    route: "Home",
    icon: "phone-portrait",
    bg: "#C5F442"
  }
];

export default class DrawerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      user_id: props.userid
    };
  }

  UNSAFE_componentWillMount() {
    console.log("User ID", this.state.user_id);
  }

  logout = async () => {
    AsyncStorage.clear();
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />

          {/* <View style={{flexDirection:"row",margin:10, paddingLeft:8 }}>
            <Icon
              active
              name="phone-portrait"
              style={{ color: "#777", fontSize: 26, width: 30 }}/>
            <Text style={styles.text} onPress={() => this.props.navigation.navigate("StudentHome")}>Home</Text>
          </View> */}

          <View style={{ flexDirection: "row", margin: 10, paddingLeft: 8 }}>
            <Icon
              active
              name="phone-portrait"
              style={{ color: "#777", fontSize: 26, width: 30 }}
            />
            <Text style={styles.text} onPress={() => this.logout()}>
              Logout
            </Text>
          </View>
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: "#fff" }}>
            <Left />
            <Right style={{ margin: 20 }}>
              <Text>{API.build_v}</Text>
            </Right>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
