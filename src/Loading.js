import  React from 'react';
import { Dimensions, Text, View,Image   } from 'react-native';
const  Loading = () => {
return (

       <View style={{backgroundColor:"white",justifyContent:"center",paddingLeft:(17* Dimensions.get('window').width)/100,height:Dimensions.get('window').height,width:Dimensions.get('window').width}}>
           <Image style={{  width: 250,
    height: 250,
    resizeMode: "contain"}}
                             source={{
                              uri: "https://cdn.shopify.com/s/files/1/0323/3814/9421/files/animation_300x.gif?v=1605809550",
                            }}
                      />
       </View>
	);
}
 export default Loading;