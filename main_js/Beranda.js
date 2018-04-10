import React,{Component } from 'react';
import {
  Button,
    StyleSheet,
    Text,
    View
  } from 'react-native';


  const data='saya';
  export default class Beranda extends Component{
    static navigationOptions = ({ navigation }) => {
        return {
          title: `Welcome ${navigation.state.params.screen}`,
        }
      };
      render(){
        const { state, navigate } = this.props.navigation;
          return(
            <View style={styles.container}>
            <Text style={styles.welcome}>
              Halaman Beranda
            </Text>
            
          </View>
          );
      }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#66cdaa',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });