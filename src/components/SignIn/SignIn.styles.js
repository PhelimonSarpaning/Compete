import { StyleSheet, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
   
    main: {
        flex:1,
        height: deviceHeight * 0.2,
        padding: 20,
        justifyContent:'center',
    },
    body:{
        marginTop:200,
        justifyContent:'center',
        padding:20,
        alignContent:'center',
    },
    headerText: {
        flex:1,
    },
    button: {
        justifyContent:'center',
        paddingHorizontal:50,
        color:'#5dc7e0',
        fontSize:8000,
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#00b5ec",
      },
    textType: {
        // fontFamily: "Righteous-Regular", 
    },
    text:{
        flex:1,
    },
    signin : {
        // fontFamily:'Barlow-ExtraLight',
        fontSize:50,
    },
    inputContainer:{
        borderBottomColor: '#5dc7e0',
        borderBottomWidth:0.5,
    },
    inputs: {
       height:50,
       fontSize:20,
       marginLeft:16,
       

    },
    imgStyle: {
        width:30,
        height:30,
    },
    icons : {
        justifyContent:'space-between',
        alignContent:'center',
        flexDirection:'row',
        paddingTop:80,
        marginTop:deviceHeight * .1,
        marginBottom:100,
        paddingHorizontal:20,
    },
  });
  
  export default styles;