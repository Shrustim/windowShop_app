import {StyleSheet} from 'react-native'

export default StyleSheet.create({

container: {
    padding:20,
    paddingTop:15
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
input: {
    height: 40,
    marginTop: 12,
    padding: 10,color:"black",
    borderRadius:10,
    backgroundColor:"#ffffff"
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
}
,
containerTwo: {
    flex: 1,
    marginTop: 8,
    flexWrap:'wrap',
    flexDirection: "row",
    paddingTop:30
  },
  box: {
    width: 175,
    height: 120,
    padding:10,
    marginBottom:10
  },
  innerbox:{
    width: 175,
    height: 110,
    backgroundColor: '#ffffff'
  },
  ImgaeT:{
    width: 175,
    height: 110,
    resizeMode: "contain"
}
});