import React, {Component, useState} from 'react';
import {View, Text, TextInput, Button, TouchableHighlight, Image, SafeAreaView} from 'react-native';
import styles from './SignIn.styles';
// import signin from './../../images/signin.png';
// import signup from './../../images/signup.png';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import Icon from 'react-native-vector-icons/AntDesign';
// import 'react-native-gesture-handler';


class SignIn extends Component {

  constructor(props){
    super(props);
    state = {
      username:'',
      password:'',
      signInCheck: true,
    }
  }
  
    render() {
      return (
        <View
          style={styles.body}>
            <View>
            <View>
           <Text><Text style={styles.signin}>Sign In{"\n\n"}</Text>
          <Text> Welcome back to <Text style={styles.textType}>GoalCompete</Text></Text>
          </Text>
          </View>
          <View style={styles.inputContainer}>
              <TextInput
              style={styles.inputs}
              placeholder="Username"
              onChangeText={(username) => this.setState({username})}
             />
          </View>
          <View style={styles.inputContainer}>
              <TextInput 
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
             />
          </View>
          <View style={styles.button}>
          <TouchableHighlight style={styles.buttonContainer} >
          <Text >Login</Text>
        </TouchableHighlight>
        </View>
        <View >
          <Button
          title="Forgot your password?"
          color= "#00b5ec"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        </View>
            </View>
            <View style={styles.icons}>
            <View>
          {/* <Icon
          iconStyle={styles.imgStyle}
          color={ state.signInCheck ? "#00b5ec" : "black"}
          size={35}
          name='login'
        /> */}
        <Text style={{color:"#00b5ec"}} onPress={() => this.props.navigation.navigate('SignIn')}>Sign In</Text>
          </View>

          <View style={{color:'red'}} >
          {/* <Icon
          name='adduser'
          size={38}
          color={Colors.dark}
          iconStyle={[{color:'red'},styles.imgStyle]}
          onPress={() => this.props.navigation.navigate('SignUp')}
          //source={signup}
        /> */}
        <Text style={{color:'red'} } onPress={() => this.props.navigation.navigate('SignUp')}>Sign Up</Text>
          </View>
            </View>
        </View>
      );
    }
  };

  export default SignIn;