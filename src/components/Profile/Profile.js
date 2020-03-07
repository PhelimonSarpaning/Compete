import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default function Profile({route, navigation})  {
    // constructor(props){
    //     super(props);
    
    // }

    // render() {
        const { userName } = route.params;
        const { weight } = route.params;
        const { height } = route.params;
        const {age} = route.params;
        const {bodyPer} = route.params;
        const {bodyMass} = route.params;
        const {skeletalMass} = route.params;
        //const text = JSON.stringify(userName);
      return (
        <View style={styles.container}>
           <View style={styles.header}></View>
           <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
            {/* // <View style={styles.body}>
            //   <View style={styles.bodyContent}> */}
            <View style={styles.name}>
                <Text style={styles.name}>{userName}</Text>
                <Text style={styles.info}>Weight : {weight}</Text>
                <Text style={styles.info}>Height : {height}</Text>
                <Text style={styles.info}>Age : {age}</Text>
                <Text style={styles.info}>Body% : {bodyPer}</Text>
                <Text style={styles.info}>Body Mass : {bodyMass}</Text>
                <Text style={styles.info}>Skeletal Mass : {skeletalMass}</Text>
                {/* <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text> */}
                </View>
                {/* <TouchableOpacity style={styles.buttonContainer}>
                //   <Text>{userName}</Text>  
                //   {console.debug("the text is" + userName)}
                // </TouchableOpacity>              
                // <TouchableOpacity style={styles.buttonContainer}>
                //   <Text>Opcion 2</Text> 
                // </TouchableOpacity> */}
        {/* //       </View>
        //   </View> */}
        <View>
            <Text style={{color:"#00b5ec"}} onPress={() => navigation.goBack()}>Back</Text>
            </View>
        </View>
      );
    }
  
  const styles = StyleSheet.create({
    header:{
      backgroundColor: "#00BFFF",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    // name:{
    //   fontSize:272,
    //   color:"black",
    //   fontWeight:'600',
    //   marginTop:500,
    //   alignSelf:"center"
    // },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
      
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600",
      alignSelf:"center",
      marginTop:40
    },
    info:{
     alignSelf:"center",
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
  });