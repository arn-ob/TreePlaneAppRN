import React, { Component } from 'react';
import { Text, View} from 'react-native';


export default class AppVersion extends Component{
    render(){
        return (
            <View style={{margin: 5}}>
                <Text style={{textAlign: 'right'}}>Version: {require('../../../envConfig').app_version}</Text>
            </View>
        )
    }
}


