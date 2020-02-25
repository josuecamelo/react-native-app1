import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import PropsExample from "./PropsExample";
import { StackNavigator } from 'react-navigation'
import Counter from "./Counter";

class App extends Component {
    static navigationOptions = {
        title: 'Home Screen'
    }

    constructor(props) {
        super(props)
        // this.state = {msg: 'Hello World'}
    }

    // componentDidMount() {
    //     this.setState({
    //         msg: 'Hello State Josué'
    //     })
    // }

    render() {
        // let {msg} = this.state

        return (
            <View style={styles.container}>
                {/*<Text>Josué</Text>*/}
                {/*<Text>*/}
                {/*    { msg }*/}
                {/*</Text>*/}
                {/*<PropsExample name="Josué"></PropsExample>*/}
                {/*<Counter></Counter>*/}
            </View>
        )
    }
}

const StackApp = StackNavigator({
    Home: { screen: App },
    Counter: { screen: Counter },
})

export default StackApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


