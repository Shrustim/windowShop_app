import {StyleSheet} from 'react-native'

export default StyleSheet.create({

    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: "center"
      },
      text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
      },

      loginBox:{
          width:280,
          height:400,
        //   backgroundColor:"#ffffff",
          borderRadius:20,
          marginLeft:60
      },
      input: {
        height: 40,
        padding: 10,color:"black",
        borderRadius:10,
        backgroundColor:"#ffffff"
      },
      loginBtn:{
       
        height:45,
        width:170 ,borderRadius:30,
        textAlign: "center",
        paddingTop:7,
        marginLeft:55
    
    },
});