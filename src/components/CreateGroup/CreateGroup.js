import React, {Component, useState} from 'react';
import {View, Text, TextInput, Button, TouchableHighlight, Image, SafeAreaView} from 'react-native';
import styles from './CreateGroup.styles';
import CardButton from '@paraboly/react-native-card-button';
//import Icon from 'react-native-vector-icons/AntDesign';

class SignUp extends Component {

  constructor(props){
    super(props);
    state = {
      timeline:'',
      groupName:'',
      winningPrize:'',
      groupSecret:'',
      progressUpdates:'',
    }
  }
  
    render() {
      return (
        <View
          style={styles.body}>
            <View>
            <View>
           <Text><Text style={styles.signin}>Create Group{"\n\n"}</Text>
          {/* <Text> Welcome to <Text style={styles.textType}>GoalCompete</Text></Text> */}
          </Text>
          </View>
          <View style={styles.inputContainer}>
              <TextInput
              style={styles.inputs}
              placeholder="Group Name"
              textContentType="name"
              onChangeText={(groupName) => this.setState({groupName})}
             />
          </View>
          <View style={styles.inputContainer}>
              <TextInput 
              style={styles.inputs}
              placeholder="End of Competition"
              onChangeText={(timeline) => this.setState({timeline})}
              textContentType="none"
             />
          </View>
          <View style={styles.inputContainer}>
              <TextInput 
              style={styles.inputs}
              placeholder="Group Secret"
              onChangeText={(groupSecret) => this.setState({groupSecret})}
              textContentType="none"
             />
          </View>
          <View style={styles.inputContainer}>
              <TextInput 
              style={styles.inputs}
              placeholder="Winning Prize"
              textContentType="none"
              onChangeText={(winningPrize) => this.setState({winningPrize})}
             />
          </View>

          <View style={styles.button} >
            {/* <View style={styles.buttonContainer}>

            
          <CardButton
               width={200}
               height={40}
               textSize={20}
               gradient={true}
               iconName={"edit"}
               iconSize={40}
               text={"Create Group"}
               textColor={"white"}
               onPress={() => this.props.navigation.navigate('CreateGroup')}
               gradientColors={["#e65c00", "#f9d423"]}
            
               />
            </View> */}
          <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('LeaderBoard')} >
          <Text >Create</Text>
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
            {/* <View style={styles.icons}>
            <View> */}
          {/* <Icon
          iconStyle={styles.imgStyle}
          color={ state.signInCheck ? "#00b5ec" : "black"}
          size={35}
          name='login'
          onPress={() => this.props.navigation.navigate('SignIn')}
        /> */}
        
        {/* <Text style={{color:'blue'}} onPress={() => this.props.navigation.navigate('SignIn')}>Sign In</Text>
          </View>

          <View style={{color:'red'}}> */}
          {/* <Icon
          name='adduser'
          size={38}
          color={state.signUpCheck ? "#00b5ec" : "black"}
          iconStyle={[{color:'red'},styles.imgStyle]}
          //source={signup}
        /> */}
    
        {/* <Text style={{color:"#00b5ec"}} onPress={() => this.props.navigation.navigate('SignUp')}>Sign Up</Text>
          </View>
            </View> */}
            <View>
            <Text style={{color:"#00b5ec"}} onPress={() => this.props.navigation.goBack()}>Back</Text>
            </View>
        </View>
      );
    }
  };

  export default SignUp;