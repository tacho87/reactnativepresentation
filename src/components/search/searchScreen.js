import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class SearchScreen extends React.Component {
    static navigationOptions = {
        title: 'Search Screen'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Search Screen</Text>
                <Button onPress={() => this.props.navigation.navigate('Test')} title="Search For..." />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
