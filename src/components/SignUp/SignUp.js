import React, {Component, useState} from 'react';
import {View, Text, TextInput, Button, TouchableHighlight, Image, SafeAreaView} from 'react-native';
import styles from './SignUp.styles';
//import Icon from 'react-native-vector-icons/AntDesign';

class SignUp extends Component {

  constructor(props){
    super(props);
    state = {
      username:'',
      bodyFat:'',
      email:'',
      bodyMass:'',
      height:'',
      phoneNumber:'',
      weight:'',
      age:'',
      signUpCheck: true,
    }
  }
  
    render() {
      return (
        <View
          style={styles.body}>
            <View>
            <View>
           <Text><Text style={styles.signin}>Create Profile{"\n\n"}</Text>
          <Text> Welcome to <Text style={styles.textType}>GoalCompete</Text></Text>
          </Text>
          </View>
          <View style={styles.inputContainer}>
              <TextInput
              style={styles.inputs}
              placeholder="Name"
              textContentType="name"
              onChangeText={(username) => this.setState({username})}
             />
          </View>
          <View style={styles.inputContainer}>
              <TextInput
              style={styles.inputs}
              placeholder="Age"
              textContentType="telephoneNumber"
              onChangeText={(age) => this.setState({age})}
             />
          </View>
          <View style={styles.inputContainer}>
              <TextInput 
              style={styles.inputs}
              placeholder="Body Mass"
              onChangeText={(bodyMass) => this.setState({bodyMass})}
            //   keyboardType="email-address"
              textContentType="oneTimeCode"
             />
          </View>
          <View style={styles.inputContainer}>
              <TextInput 
              style={styles.inputs}
              placeholder="Height(inches)"
              onChangeText={(height) => this.setState({height})}
            //   keyboardType="email-address"
              textContentType="newPassword"
             />
          </View>
          <View style={styles.inputContainer}>
              <TextInput 
              style={styles.inputs}
              placeholder="Weight"
              onChangeText={(weight) => this.setState({weight})}
            //   keyboardType="email-address"
              textContentType="newPassword"
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
              placeholder="Body Fat%"
              //secureTextEntry={true}
              textContentType="oneTimeCode"
              onChangeText={(bodyFat) => this.setState({bodyFat})}
             />
          </View>

          <View style={styles.button} >
          <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('CreateGroup')} >
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
            {/* </View>
            <View style={styles.icons}>
            <View> */}
          {/* <Icon
          iconStyle={styles.imgStyle}
          color={ state.signInCheck ? "#00b5ec" : "black"}
          size={35}
          name='login'
          onPress={() => this.props.navigation.navigate('SignIn')}
        /> */}
        {/* <Text style={{color:'blue'}} onPress={() => this.props.navigation.navigate('SignIn')}>Sign In</Text>
          </View> */}

          <View style={{color:'red'}}>
          {/* <Icon
          name='adduser'
          size={38}
          color={state.signUpCheck ? "#00b5ec" : "black"}
          iconStyle={[{color:'red'},styles.imgStyle]}
          //source={signup}
        /> */}
        <Text style={{color:"#00b5ec"}} onPress={() => this.props.navigation.goBack()}>Back</Text>
          </View>
            </View>
        </View>
      );
    }
  };

  export default SignUp;