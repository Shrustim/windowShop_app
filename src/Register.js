import  React,{useState} from 'react';
import { connect } from 'react-redux';
import api from './api'; 
import {  Text, View,TextInput,TouchableOpacity,ImageBackground } from 'react-native';
import styles from './css/RegisterCss';
import Neumorphism from 'react-native-neumorphism';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import {signIn  } from './actions'; 
import Spinner from './components/Spinner';
function Register(props) {
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirPassword] = useState("");
  const [name, setName] = useState("");
  const [loading ,setLoading] = useState(false);
  const [errorMessage ,setErrorMessage] = useState(" ");
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
  const userregister = async() =>{
    if(mobileNo === "" || mobileNo.length !== 10 || password === "" || confirmPassword === "" 
    || name === "" || password !== confirmPassword ){
     // console.log("error");
     if(password !== confirmPassword ){
      setErrorMessage("password and confirm password does not match.");
    }
    
    
      if(confirmPassword === "" ){
        setErrorMessage("Please enter confirm password.");
      }
      if(password === ""){
        setErrorMessage("Please enter password.");
      }
      
      if(mobileNo === "" || mobileNo.length !== 10){
        setErrorMessage("Please enter valid mobile no.");
      }
      if(name === "" ){
        setErrorMessage("Please enter name.");
      }
      
     
    }else{ 
      setLoading(true);
      setErrorMessage("")
      const res = await api.post('users',{"name":name,"mobileNo":mobileNo,"password":password});
      if(res.data !== null){
       await _storeData([res.data])
       setMobileNo("")
        setPassword("")
       
        setLoading(false);
        props.signIn(res.data.id);
      }else{
        setLoading(false);
        setErrorMessage("Invalid Mobile no or password");
      
      }
      
    }
  
  }
 
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
             
                      <TextInput
                          style={styles.input}
                          onChangeText={setName}
                          value={name}
                          placeholder="Name"
                          placeholderTextColor = "#000000"
                    /> 
                        <TextInput
                     style={[styles.input,{marginTop:20}]}
                          onChangeText={setMobileNo}
                          value={mobileNo}
                          placeholder="Mobile No"
                          placeholderTextColor = "#000000"
                    />  
    
                  <TextInput
                          style={[styles.input,{marginTop:20}]}
                          onChangeText={setPassword}
                          value={password}
                          placeholder="Pasword"
                          placeholderTextColor = "#000000"
                    /> 
                      <TextInput
                          style={[styles.input,{marginTop:20}]}
                          onChangeText={setConfirPassword}
                          value={confirmPassword}
                          placeholder="Confirm Pasword"
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
           fontSize:19,textAlign:"center",fontWeight:"900"}}> <Spinner/> Loading  </Text>
         </Neumorphism>
         </TouchableOpacity>
         :  <TouchableOpacity onPress={()=>{userregister()}}> 
         <Neumorphism
                     lightColor={'#dedddd'}
                     darkColor={'#dedddd'}
                     shapeType={'flat'}
                     radius={20}
                     style={[styles.loginBtn,{marginTop:20}]}
                    >
                    <Text style={{ color:"white",
           fontSize:19,textAlign:"center",fontWeight:"900"}}> Register </Text>
         </Neumorphism>
         </TouchableOpacity>
      }

      {/* <TouchableOpacity> 
      <Neumorphism
                  lightColor={'#dedddd'}
                  darkColor={'#dedddd'}
                  shapeType={'flat'}
                  radius={20}
                  style={[styles.loginBtn,{marginTop:20}]}
                 >
                 <Text style={{ color:"white",
        fontSize:19,textAlign:"center",fontWeight:"900"}}>Register</Text>
      </Neumorphism>
      </TouchableOpacity> */}
       <Text style={{textAlign:"center",color:"#ffffff",marginTop:10}}>Or</Text>
     
        <Text onPress={()=> props.navigation.navigate('LoginScreen')} style={{textAlign:"center",color:"#ffffff",marginTop:10,fontWeight:"900",fontSize:17}}>Login  Now</Text>
      
           </View>
                  {/* </Neumorphism> */}
        
        
       </ImageBackground>
     </View>
    );
  }
  
  const mapStateToProps = (state) => {
    // console.log(state);
   return {auth : state.auth};
  }
  export default connect(mapStateToProps,{signIn })(Register);