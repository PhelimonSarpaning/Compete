import React, {Component} from 'react';
import {
    StyleSheet,
    View
  } from 'react-native';
//import {List} from 'react-native-elements';
import { Container, Header, Content, List, ListItem, Left, Thumbnail, Card, CardItem, Text,Icon,Right, Body } from "native-base";

class LeaderBoard extends Component{
    constructor(props){
        super(props);
        state = {
          data: [
              {id:1, userName:"Thierry", highScore:145},
              {id:2, userName:"Phil", highScore:155},
              {id:3, userName:"Gabrielle", highScore:149},
              {id:4, userName:"Galle", highScore:179}
          ]
        }
      }
   
      render(){
          const cardInfo = state.data.map(cardData => (
            <Card>
            <CardItem>
              {/* <Icon active name="logo-googleplus" /> */}
              <Text key={cardData.id}>{cardData.id}. {cardData.userName}</Text>
              <Right>
                  <Text>{cardData.highScore}</Text>
                <Icon name="arrow-up" />
              </Right>
             </CardItem>
           </Card>
          ));

          const cardList = state.data.map(cardInf => (
           
           <Card >    
            <ListItem avatar onPress={(data) => this.props.navigation.navigate('Profile')}>
              <Left>
                <Thumbnail source={{ uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y' }} />
              </Left>
              <Body>
                <Text key={cardInf.id}>{cardInf.userName}</Text>
                {/* <Text note>Doing what you like will always keep you happy . .</Text> */}
              </Body>
              <Right>
                <Text note>{cardInf.highScore}</Text>
                <Icon name="arrow-up" />
              </Right>
            </ListItem>
         </Card>
          ));

          return(
            <Container>
        {/* <Header  /> */}
        <View style={styles.header}><Text style={styles.info}>LeaderBoard</Text></View>
        {/* <Card>
            <Text>Hello</Text>
        </Card> */}
        <Content>
          {cardList}
        </Content>
      </Container>
          );
      }
      
    
};
export default LeaderBoard;

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
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
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
      fontWeight: "600"
    },
    info:{
      fontSize:40,
      color: "white",
      marginTop:90,
      justifyContent:"center",
      alignSelf: "center"
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