import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home Screen'
    };


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.baseText}>Home Screen</Text>
                <Button onPress={() => this.props.navigation.navigate('Search')} title="Search For..." />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    baseText: {
        color: 'gray',
        textAlign: "left",
        fontSize: 18
    }
});
