import  React,{useState,useEffect} from 'react';
import { Button, Text, View,Image,TextInput,Dimensions ,ScrollView,TouchableOpacity    } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import Colors from './constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './css/ProfileCss';
function ProfileScreen({ navigation }) {
  const [editShow,setEditShow] = useState(true);
    return (
       <ScrollView >
          <View style={{backgroundColor:Colors.white}}>
        <View style={{borderBottomLeftRadius:100,justifyContent: "center", textAlign: "center",height:300,borderBottomRightRadius:100,backgroundColor:"#6e0e09"}}>
      <View style={styles.container,{ alignItems:"center"}}> 
          
          
       <Text style={{textAlign:"center",marginBottom:30,paddingTop:20,backgroundColor:"#ffffff",width:90,height:90,borderRadius:50}}>
                    <Icon name="user" size={42} color="#6e0e09"  />
                    </Text>
                     <Text style={styles.headd} >Shrushti Mane</Text>
       </View> 
       </View>
       </View> 

       <View style={{backgroundColor:Colors.white}}>
       <View style={{backgroundColor:Colors.white,borderTopLeftRadius:60,borderTopRightRadius:60}}>
        {editShow ? 
           <View style={[styles.container,{height:420}]}>
         
           <Text style={{marginBottom:10,color:Colors.black,fontSize:20,fontWeight:"600"}}><Icon name="user" size={25} color="#6e0e09" />   Shrushti Mane</Text>
           <Text style={{marginBottom:10,color:Colors.black,fontSize:20,fontWeight:"600"}}><Icon name="phone" size={30} color="#6e0e09"  />   91+ 9959895998</Text>
           <Text style={{marginBottom:10,color:Colors.black,fontSize:20,fontWeight:"600"}}><Icon name="map-marker" size={30} color="#6e0e09"  />   kolhapur Dward 33 laxthirth vasahat ,458585</Text>

           <TouchableOpacity >
                       <Text style={[styles.buyBtn,{backgroundColor:"#6e0e09"}]}  ><Icon name="pencil" size={15} color="white"  />  Edit</Text>
            </TouchableOpacity>
          </View>
          :<>
             
          </>}
      
       </View>
       </View>
          </ScrollView>
    );
  }
  export default ProfileScreen; 