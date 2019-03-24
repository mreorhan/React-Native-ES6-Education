import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert,ScrollView } from 'react-native';
import { Constants } from 'expo';
import { TextInput, IconButton, Text } from 'react-native-paper';

export default class Landing extends Component {
    // Header Başlığı belirlemek için;
    static navigationOptions={
        title:'Home'
    }
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            list: []
        }
    }
    addtoList = data => {
        let random = Math.floor(Math.random() * 1000);
        if (data === "")
            return Alert.alert('Error', 'You need to write something!')

        const list = this.state.list;
        list.push({ item: data, id: random })
        this.setState({ list,text:'' })
        console.log(JSON.stringify(this.state.list))
    }
    removeToList = id => {
        let list = this.state.list;
        const newList = list.filter(item => {
            return item.id != id
        })
        console.log(newList)
        this.setState({ list: newList })
    }
    render() {
        const { text, list } = this.state;
        const showList = list.map((i, index) => {
            return (
                <View key={index} style={styles.list}>
                    <Text style={styles.listText} >{i.item}</Text>
                    <IconButton
                        icon="delete"
                        size={20}
                        onPress={() => this.removeToList(i.id)}
                    />
                </View>
            )
        })

        return (
            
            <ScrollView>
            <View style={styles.container}>
                <TextInput
                value={this.state.text}
                style={{ width: "100%" }} 
            label="Todo" onChangeText={(text) => this.setState({ text })}
            onSubmitEditing={()=>this.addtoList(text)}
            blurOnSubmit={false}
            />
                <Button onPress={() => this.addtoList(text)} title="Ekle"></Button>
                {showList}
                
                <Button onPress={()=>this.props.navigation.navigate('Fetch')} title="Go to fetch page"></Button>
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
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    list: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignSelf:'flex-start',
        
    },
    listText: {
        fontSize: 18,
        padding: 10,
        width:'90%'
    }
});
