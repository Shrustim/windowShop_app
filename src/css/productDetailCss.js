import {StyleSheet} from 'react-native'

export default StyleSheet.create({

container: {
    padding:20
},
headd: {
    color:"black",
    fontWeight: "700",
    fontSize:25,

},
headdtwo: {
    color:"black",
   fontSize:15,

   
},
ImgaeT:{
    width: 300,
    marginTop:20,
    marginLeft:25,
    height: 236,
    resizeMode: "contain"
},
productHead:{
    color:"black",
    fontSize:25,
    fontWeight:"bold"
  },
  producttype:{
    color:"black",
    fontSize:14,
  },
  productdescrip:{
    color:"#666564",
    fontSize:13,
    marginTop:10
  },
  productrupees:{
    color:"black",
    fontSize:25,
    fontWeight:"bold",
    marginTop:10
  },
  buyBtn:{
    color:"white",
    fontSize:14,
    backgroundColor:"#403b58",
    height:45,
    width:100 ,borderRadius:30,
    textAlign: "center",
    paddingTop:10,
    marginLeft:160

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