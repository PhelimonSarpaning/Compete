import React, {Component, useState} from 'react';
import {View, Text, TextInput, Button, TouchableHighlight, Image, SafeAreaView} from 'react-native';
import styles from './SignUp.styles';
//import Icon from 'react-native-vector-icons/AntDesign';

class SignUp extends Component {

  constructor(props){
    super(props);
    state = {
      username:'',
      password:'',
      email:'',
      phoneNumber:'',
      signUpCheck: true,
    }
  }
  
    render() {
      return (
        <View
          style={styles.body}>
            <View>
            <View>
           <Text><Text style={styles.signin}>Sign Up{"\n\n"}</Text>
          <Text> Welcome to <Text style={styles.textType}>GoalCompete</Text></Text>
          </Text>
          </View>
          <View style={styles.inputContainer}>
              <TextInput
              style={styles.inputs}
              placeholder="Username"
              textContentType="name"
              onChangeText={(username) => this.setState({username})}
             />
          </View>
          <View style={styles.inputContainer}>
              <TextInput 
              style={styles.inputs}
              placeholder="Email"
              onChangeText={(email) => this.setState({email})}
              keyboardType="email-address"
              textContentType="emailAddress"
             />
          </View>
          {/* <View style={styles.inputContainer}>
              <TextInput 
              style={styles.inputs}
              placeholder="Phone Number"
              onChangeText={(phoneNumber) => this.setState({phoneNumber})}
              keyboardType="name-phone-pad"
              textContentType="telephoneNumber"
             />
          </View> */}
          <View style={styles.inputContainer}>
              <TextInput 
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              textContentType="newPassword"
              onChangeText={(password) => this.setState({password})}
             />
          </View>

          <View style={styles.button} >
          <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Start')} >
          <Text >Signup</Text>
        </TouchableHighlight>
        </View>
        {/* <View >
          <Button
          title="Forgot your password?"
          color= "#00b5ec"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        </View> */}
            </View>
            <View style={styles.icons}>
            <View>
          {/* <Icon
          iconStyle={styles.imgStyle}
          color={ state.signInCheck ? "#00b5ec" : "black"}
          size={35}
          name='login'
          onPress={() => this.props.navigation.navigate('SignIn')}
        /> */}
        <Text style={{color:'blue'}} onPress={() => this.props.navigation.navigate('SignIn')}>Sign In</Text>
          </View>

          <View style={{color:'red'}}>
          {/* <Icon
          name='adduser'
          size={38}
          color={state.signUpCheck ? "#00b5ec" : "black"}
          iconStyle={[{color:'red'},styles.imgStyle]}
          //source={signup}
        /> */}
        <Text style={{color:"#00b5ec"}} onPress={() => this.props.navigation.navigate('SignUp')}>Sign Up</Text>
          </View>
            </View>
        </View>
      );
    }
  };

  export default SignUp;