import  React,{useState} from 'react';
import api from './api'; 
import { connect } from 'react-redux';
import { Button, Text, View,TextInput,TouchableOpacity,ImageBackground  } from 'react-native';
import styles from './css/LoginCss';
import Neumorphism from 'react-native-neumorphism';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import {signIn , signOut } from './actions'; 
import Spinner from './components/Spinner';
function LoginScreen(props) {
  const [mobileNo, onChangeMobileNo] = useState("");
  const [password, onChangePassword] = useState("");
  const [errorMessage ,setErrorMessage] = useState(" ");
  const [loading ,setLoading] = useState(false);
  
 const  _storeData = async (data) => {
    try {
      await AsyncStorage.setItem(
        'user_values',
        JSON.stringify(data)
      );
    } catch (error) {
      // Error saving data
    }
  };
  const userlogin = async() =>{
    if(mobileNo === "" || mobileNo.length !== 10 || password === "" ){
      if(password === ""){
        setErrorMessage("Please enter password.");
      }
      
      if(mobileNo === "" || mobileNo.length !== 10){
        setErrorMessage("Please enter valid mobile no.");
      }
      
    }else{ 
      setLoading(true);
      const res = await api.get('users?filter=%7B%22where%22%3A%20%7B%22mobileNo%22%3A%20%22'+mobileNo+'%22%2C%22password%22%3A%20%22'+password+'%22%7D%7D');
      if(res.data.length > 0){
       await _storeData(res.data)
        onChangeMobileNo("")
        onChangePassword("")
        setErrorMessage("")
        setLoading(false);
        props.signIn(res.data[0].id);
      }else{
        setLoading(false);
        setErrorMessage("Invalid Mobile no or password");
      
      }
      
    }
  
  }
 
    return (
    
       <View style={styles.container}>
       <ImageBackground source={{ uri: 'https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', }} resizeMode="cover" style={styles.image}>
       
                    <View style={styles.loginBox}>
                      
                    <Text style={{textAlign:"center",marginBottom:20,paddingTop:20,marginLeft:100,backgroundColor:"#660505",width:90,height:90,borderRadius:50}}>
                    <Icon name="user" size={42} color="#ffffff"  />
                    </Text>
           
                  <TextInput
                          style={styles.input}
                          onChangeText={onChangeMobileNo}
                          value={mobileNo}
                          placeholder="Mobile No"
                          placeholderTextColor = "#000000"
                    />  
   
                  <TextInput
                          style={[styles.input,{marginTop:20}]}
                          onChangeText={onChangePassword}
                          value={password}
                          placeholder="Password"
                          placeholderTextColor = "#000000"
                    />  


<Text style={{textAlign:"center",color:"#ff0707",fontSize:18,marginTop:10,fontWeight:"bold"}}>{errorMessage}</Text>
      { loading ? 
         <TouchableOpacity> 
         <Neumorphism
                     lightColor={'#dedddd'}
                     darkColor={'#dedddd'}
                     shapeType={'flat'}
                     radius={20}
                     style={[styles.loginBtn,{marginTop:20}]}
                    >
                    <Text style={{ color:"white",
           fontSize:19,textAlign:"center",fontWeight:"900"}}> <Spinner color="#ffffff"/> Logging  </Text>
         </Neumorphism>
         </TouchableOpacity>
         :  <TouchableOpacity onPress={()=>{userlogin()}}> 
         <Neumorphism
                     lightColor={'#dedddd'}
                     darkColor={'#dedddd'}
                     shapeType={'flat'}
                     radius={20}
                     style={[styles.loginBtn,{marginTop:20}]}
                    >
                    <Text style={{ color:"white",
           fontSize:19,textAlign:"center",fontWeight:"900"}}> Login </Text>
         </Neumorphism>
         </TouchableOpacity>
      }
     
       <Text style={{textAlign:"center",color:"#ffffff",marginTop:10}}>Or</Text>
     
        <Text onPress={()=> props.navigation.navigate('Register')} style={{textAlign:"center",color:"#ffffff",marginTop:10,fontWeight:"900",fontSize:17}}> Register Now</Text>
      
           </View>
            
       </ImageBackground>
     </View>
    );
  }
  
  const mapStateToProps = (state) => {
    // console.log(state);
   return {auth : state.auth};
  }
  export default connect(mapStateToProps,{signIn , signOut})(LoginScreen);