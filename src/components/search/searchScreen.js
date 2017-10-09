import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';


export default class SearchScreen extends React.Component {
    static navigationOptions = {
        title: 'Search Screen'

    };
    constructor(props) {
        super(props);
        this.data = [];
        for (var i = 0; i < 100000; i++) {
            this.data.push({ key: i })
        }

    }


    render() {
        // <Button onPress={() => this.props.navigation.navigate('Test')} title="Search For..." />
        return (
            <View>
                <Text>Total: {this.data.length}</Text>
                <FlatList
                    data={this.data}
                    renderItem={({ item }) =>
                        <View style={styles.container}>
                            <Image
                                style={styles.image}
                                source={{ uri: 'https://s3.amazonaws.com/fotos-horeca/felipemotta/MIGPS0471.jpg' }} />
                            <Text style={styles.text}>{item.key} WARO</Text>

                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: "row"
    },
    image: {
        height: 50,
        width: 50,
        flex: 1
    },
    text: {
        flex: 4,
        fontSize: 20,
        textAlign: "center",
        marginBottom: 30,
        marginTop: 30
    }
});
