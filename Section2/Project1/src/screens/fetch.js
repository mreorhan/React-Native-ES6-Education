import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert, ScrollView } from 'react-native';
import { Constants } from 'expo';
import { TextInput, Avatar, Text } from 'react-native-paper';
import { fetchData2, fetchDataWithCallback } from '../utils/functions';

export default class Fetch extends Component {
    static navigationOptions = {
        title: 'Fetch'
    }
    constructor(props) {
        super(props)
        this.state = {
            data: null,
        }
    }
    async componentDidMount(){
        //fetchDataWithCallback("https://jsonplaceholder.typicode.com/userse",(data)=>this.setState({data}))
        
      const data= await fetchData2("https://reqres.in/api/users?page=1&per_page=10");
       this.setState({data});
    }
    render() {
        const { data } = this.state;
        const paddingSmall = {padding:10}
        const row = {flexDirection:'row'}
        return (

            <ScrollView>
                <View style={styles.container}>
                    {data ? data.data.map((i) =>
                        <View key={i.id} style={[paddingSmall,row]}>
                        <Avatar.Image size={40} source={{uri:i.avatar}} />
                            <Text style={paddingSmall}>{i.first_name + " "+i.last_name}</Text>
                            <Text>{`
                            `}</Text>
                        </View>
                    ) : <Text>Loading...</Text>}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    list: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',

    }
});
