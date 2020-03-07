import React, {Component} from 'react';
import CardButton from '@paraboly/react-native-card-button';
import styles from './Start.styles';
import LinearGradient from 'react-native-linear-gradient';
import { Container, Header, Content, Card, CardItem, Icon, Right } from 'native-base';
import {View, Text, TextInput, Button, TouchableHighlight, Image, SafeAreaView} from 'react-native';

class Start extends Component{
    constructor(props){
        super(props);
        // state = {
        //     authenticat
        // }
    }


    render(){
        const title = "Create Group"
        return (
            <Container>
                <Header />
            <View style={styles.body}>
                {/* <View>
                <Text style={{fontSize:50, color:'green'}}>Compete</Text>
                </View>
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
                    <Text>
                        Sign in with Facebook
                    </Text>
                </LinearGradient> */}
                
               <CardButton
               width={370}
               height={150}
               textSize={20}
               gradient={true}
               iconName={"edit"}
               iconSize={40}
               text={"Create Group"}
               textColor={"white"}
               onPress={() => this.props.navigation.navigate('CreateGroup')}
               gradientColors={["#e65c00", "#f9d423"]}
            
               />

               <View style={styles.secondCard}>
               <CardButton
               width={370}
               height={150}
               iconName={"people"}
               iconSize={40}
               textSize={20}
               text={"Join Group"}
               gradientColors={["#2193b0", "#6dd5ed"]}
               />
               </View>
               
            </View>
            </Container>
        );
    }
};

export default Start;