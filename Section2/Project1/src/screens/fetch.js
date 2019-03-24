import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert, ScrollView } from 'react-native';
import { Constants } from 'expo';
import { TextInput, IconButton, Text } from 'react-native-paper';
import { fetchData } from '../utils/functions';

export default class Fetch extends Component {
    static navigationOptions = {
        title: 'Fetch'
    }
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            count: 0
        }
        fetchData("https://jsonplaceholder.typicode.com/users",(data)=>this.setState({data}));
    }
    
    render() {
        const { data, count } = this.state;
        setTimeout(() => {
            this.setState((state) => ({ count: state.count + 1 }))
        }, 1000)
        return (

            <ScrollView>
                <View style={styles.container}>
                    <Text>{count}sn geçti</Text>
                    {data ? data.map((i) =>
                        <View key={i.id}>
                            <Text>{i.name}</Text>
                            <Text>{i.email}</Text>
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
        padding: 10,
        width: "100%",
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    list: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',

    },
    listText: {
        fontSize: 18,
        padding: 10,
        width: '90%'
    }
});
