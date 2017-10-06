import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home Screen'
    };


    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <View style={styles.boxLarge}>
                        <Image
                            style={{ height: "100%", width: "100%" }}
                            source={{ uri: 'https://s3.amazonaws.com/fotos-horeca/felipemotta/MIGPS0471.jpg' }} />
                    </View>
                    <ScrollView horizontal>
                        <View style={styles.boxSmall}>
                            <Image
                                style={{ height: "100%", width: "100%" }}
                                source={{ uri: 'https://s3.amazonaws.com/fotos-horeca/felipemotta/MIGPS0471.jpg' }} />
                        </View>
                        <View style={styles.boxSmall}>
                            <Image
                                style={{ height: "100%", width: "100%" }}
                                source={{ uri: 'https://s3.amazonaws.com/fotos-horeca/felipemotta/MIGPS0191.jpg' }} />
                        </View>
                        <View style={styles.boxSmall}>
                            <Image
                                style={{ height: "100%", width: "100%" }}
                                source={{ uri: 'https://s3.amazonaws.com/fotos-horeca/globalbrands/2951.jpg' }} />
                        </View>
                        <View style={styles.boxSmall}>
                            <Image
                                style={{ height: "100%", width: "100%" }}
                                source={{ uri: 'https://s3.amazonaws.com/fotos-horeca/globalbrands/2953.jpg' }} />
                        </View>
                        <View style={styles.boxSmall}>
                            <Image
                                style={{ height: "100%", width: "100%" }}
                                source={{ uri: 'https://s3.amazonaws.com/fotos-horeca/felipemotta/MIGPS2133.jpg' }} />
                        </View>

                    </ScrollView>
                    <View style={styles.boxLarge}>
                        <Image
                            style={{ height: "100%", width: "100%" }}
                            source={{ uri: 'https://s3.amazonaws.com/fotos-horeca/globalbrands/1366.jpg' }} />
                    </View>
                    <ScrollView horizontal>
                        <View style={styles.boxSmall}>
                            <Image
                                style={{ height: "100%", width: "100%" }}
                                source={{ uri: 'https://s3.amazonaws.com/fotos-horeca/globalbrands/7520.jpg' }} />
                        </View>
                        <View style={styles.boxSmall}>
                            <Image
                                style={{ height: "100%", width: "100%" }}
                                source={{ uri: 'https://s3.amazonaws.com/fotos-horeca/felipemotta/MIGPS2181.jpg' }} />
                        </View>
                        <View style={styles.boxSmall}>
                            <Image
                                style={{ height: "100%", width: "100%" }}
                                source={{ uri: 'https://s3.amazonaws.com/fotos-horeca/felipemotta/MIGPS2122.jpg' }} />
                        </View>

                    </ScrollView>
                    <View style={styles.boxLarge}>
                        <Image
                            style={{ height: "100%", width: "100%" }}
                            source={{ uri: 'https://s3.amazonaws.com/fotos-horeca/felipemotta/MIGPS0502.jpg' }} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxSmall: {
        width: 200,
        height: 200,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: 'skyblue',
    },
    boxLarge: {
        width: "100%",
        height: 600,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: 'steelblue',
    },
})