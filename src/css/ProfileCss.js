import {StyleSheet} from 'react-native'

export default StyleSheet.create({

container: {
    padding:40
    
},
headd: {
    color:"white",
    fontWeight: "700",
    fontSize:25,

},
headdtwo: {
    color:"black",
   fontSize:15,

   
},
input: {
    height: 40,
    marginTop: 12,
    padding: 10,color:"red",
    borderRadius:10,
    backgroundColor:"#ffffff",
    borderColor:"red"
  },
  inputLablee:{
    color:"black",marginTop:5
},
typetextActive:{
    color:"white",
    fontSize:10,
    backgroundColor:"#403b58",
    height:35,
    width:80 ,borderRadius:10,
    textAlign: "center",
    paddingTop:10,
    marginLeft:5
},
typetext:{
    color:"black",
    fontSize:10,
    height:35,
    width:60 ,borderRadius:10,
    textAlign: "center",
    paddingTop:10,
    marginLeft:5
},
typebtn:{
    flexDirection:'row'
},
containerTwo: {
    flex: 1,
    marginTop: 8,
    flexWrap:'wrap',
    flexDirection: "row",
    paddingTop:30
  },
  box: {
    width: 350,
    height: 180,
    padding:10,
    marginBottom:10
  },
  innerbox:{
    width: 350,
    height: 170,
    backgroundColor: '#ffffff'
  },
  ImgaeT:{
    width: 145,
    marginTop:30,
    height: 110,
    resizeMode: "contain"
},
productHead:{
  color:"black",
  fontSize:16,
  fontWeight:"bold"
},
producttype:{
  color:"black",
  fontSize:14,
},
productdescrip:{
  color:"#666564",
  fontSize:12,
},

proBox:
{width:185, height: 170,paddingLeft:1,paddingTop:13,paddingBottom:5,paddingRight:5
},
buyBtn:{
    color:"white",
    fontSize:14,
    backgroundColor:"#403b58",
    height:35,
    width:100 ,borderRadius:30,
    textAlign: "center",
    paddingTop:7,
    marginTop:20

},
productrupees:{
  color:"black",
  fontSize:16,
  fontWeight:"bold",
  marginTop:10
},

centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 10,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 5,
    textAlign: "center",
    color:"white",
    fontSize:15
  }

});