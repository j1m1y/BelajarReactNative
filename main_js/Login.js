import React,{Component } from 'react';
import {
  Button,
    StyleSheet,
    Text,
    TextInput,
    View
  } from 'react-native';


  const data='saya';
  export default class Login extends Component{
    static navigationOptions = {
      title: "Login"
    }

    constructor(props){
      super(props)

      this.state={
        username:'',
        password:''
      }
    }


    getUsername(text){
      console.log(`usernamenya adalah {text}`)
    }

    submitButton(){
      console.log("submit")
    }

    passDataUsername(){
      let dat;
      return dat=this.state.username
    }

      render(){
        const { navigate } = this.props.navigation;
          return(
            <View style={styles.container}>
            <Text style={styles.welcome}>
              SignIn untuk melanjutkan
            </Text>

            <TextInput style={styles.textinputStyle}
            underlineColorAndroid="transparent"
            placeholder="Username"
            onchangedText={(text)=>
              this.setState({username:text})
            }
            />
            <Button
            onPress={()=>{navigate("ScreenTwo", {screen: `data ${this.state.username}`})}}
            title="Sign In"
            color="#841584"
            accessibilityLabel="Sign in untuk masuk ke Beranda"
            />
            
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
    textinputStyle:{
      height:40,
      width:200,
      borderColor:'gray',
      borderRadius:10,
      borderWidth:1,
      padding:10,
      color:'white',
      marginBottom:15
    }
  });