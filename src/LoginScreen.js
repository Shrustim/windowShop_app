import  React,{useState} from 'react';
import { Button, Text, View,TextInput,TouchableOpacity,ImageBackground } from 'react-native';
import styles from './css/LoginCss';
import Neumorphism from 'react-native-neumorphism';
import Icon from 'react-native-vector-icons/FontAwesome';
function LoginScreen({ navigation }) {
  const [text, onChangeText] = React.useState("Mobile No");
  const [password, onChangePassword] = React.useState("Pasword");
    return (
    
       <View style={styles.container}>
       <ImageBackground source={{ uri: 'https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', }} resizeMode="cover" style={styles.image}>
        {/* <Neumorphism
                  lightColor={'#dedddd'}
                  darkColor={'#76c2ffb8'}
                  shapeType={'flat'}
                  radius={20}
                  style={styles.loginBox}
                > */}
                    <View style={styles.loginBox}>
                      
                    <Text style={{textAlign:"center",marginBottom:20,paddingTop:20,marginLeft:100,backgroundColor:"#660505",width:90,height:90,borderRadius:50}}>
                    <Icon name="user" size={42} color="#ffffff"  />
                    </Text>
            {/* <Text style={{marginBottom:30,fontSize:30,fontWeight:"900",color:"#ffffff",textAlign:"center"}}>Login</Text> */}
            {/* <Neumorphism
                  lightColor={'#dedddd'}
                  darkColor={'#76c2ffb8'}
                  shapeType={'flat'}
                  radius={20}
                 > */}
                  <TextInput
                          style={styles.input}
                          onChangeText={onChangeText}
                          value={text}
                          placeholder="useless placeholder"
                    />  
      {/* </Neumorphism> */}

      {/* <Neumorphism
                  lightColor={'#dedddd'}
                  darkColor={'#76c2ffb8'}
                  shapeType={'flat'}
                  radius={20}
                  style={{marginTop:20}}
                 > */}
                  <TextInput
                          style={[styles.input,{marginTop:20}]}
                          onChangeText={onChangePassword}
                          value={password}
                          placeholder="useless placeholder"
                    />  
      {/* </Neumorphism> */}
      <TouchableOpacity> 
      <Neumorphism
                  lightColor={'#dedddd'}
                  darkColor={'#dedddd'}
                  shapeType={'flat'}
                  radius={20}
                  style={[styles.loginBtn,{marginTop:20}]}
                 >
                 <Text style={{ color:"white",
        fontSize:19,textAlign:"center",fontWeight:"900"}}>Login</Text>
      </Neumorphism>
      </TouchableOpacity>
       <Text style={{textAlign:"center",color:"#ffffff",marginTop:10}}>Or</Text>
     
        <Text style={{textAlign:"center",color:"#ffffff",marginTop:10,fontWeight:"900",fontSize:17}}> Register Now</Text>
      
           </View>
                  {/* </Neumorphism> */}
        
        
       </ImageBackground>
     </View>
    );
  }
  
  export default LoginScreen;