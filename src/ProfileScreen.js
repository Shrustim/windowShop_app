import  React,{useState,useEffect} from 'react';
import { Button, Text, View,Image,TextInput,Dimensions ,ScrollView,TouchableOpacity    } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import Colors from './constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './css/ProfileCss';
import { connect } from 'react-redux';
import api from './api'; 
import Spinner from './components/Spinner';

function ProfileScreen({ navigation,userId }) {
  const [editShow,setEditShow] = useState(true);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [mobileNo, onChangeMobileNo] = useState("");
    const [pincode, onChangePincode] = useState("");

    const [nameC, setNameC] = useState("");
    const [addressC, setAddressC] = useState("");
    const [pincodeC, onChangePincodeC] = useState("");
    const [loading ,setLoading] = useState(false);
    const [errorMessage ,setErrorMessage] = useState(" ");

   const EditUser = async() => {
      setLoading(true);
      setErrorMessage("")
        console.log(userId,"userId");
      const res = await api.patch('users/'+userId,{"name":nameC,"pincode":""+pincodeC+"", "address":addressC});
      console.log("res",res.status);
      if(res.status == 204){
         setName(nameC);
         setAddress(addressC);
         onChangePincode(pincodeC);
         setEditShow(true);
         setLoading(false);
       
      }else{
        setLoading(false);
        setErrorMessage("Invalid Mobile no or password");
      
      }
   }
   const getUserInfo = async() =>{
     const res = await api.get('users/'+userId);
      if(res.data){
         console.log("getUserInfo",res.data);
         setName(res.data.name);
         onChangeMobileNo(res.data.mobileNo);
         setAddress(res.data.address);
         onChangePincode(res.data.pincode);

         setNameC(res.data.name);
         setAddressC(res.data.address);
         onChangePincodeC(res.data.pincode);

      }
   }
useEffect(()=> {
  getUserInfo();
},[])
    return (
       <ScrollView >
          <View style={{backgroundColor:Colors.white}}>
        <View style={{borderBottomLeftRadius:100,justifyContent: "center", textAlign: "center",height:300,borderBottomRightRadius:100,backgroundColor:"#6e0e09"}}>
      <View style={styles.container,{ alignItems:"center"}}> 
          
          
       <Text style={{textAlign:"center",marginBottom:30,paddingTop:20,backgroundColor:"#ffffff",width:90,height:90,borderRadius:50}}>
                    <Icon name="user" size={42} color="#6e0e09"  />
                    </Text>
                     <Text style={styles.headd} >{name}</Text>
       </View> 
       </View>
       </View> 

       <View style={{backgroundColor:Colors.white}}>
       <View style={{backgroundColor:Colors.white,borderTopLeftRadius:60,borderTopRightRadius:60}}>
        {editShow ? 
           <View style={[styles.container,{height:420}]}>
         
           <Text style={{marginBottom:10,color:Colors.black,fontSize:20,fontWeight:"600"}}><Icon name="user" size={25} color="#6e0e09" /> {name}</Text>
           <Text style={{marginBottom:10,color:Colors.black,fontSize:20,fontWeight:"600"}}><Icon name="phone" size={30} color="#6e0e09"  />   91+ {mobileNo}</Text>
           <Text style={{marginBottom:10,color:Colors.black,fontSize:20,fontWeight:"600"}}><Icon name="map-marker" size={30} color="#6e0e09"  />  {address} {pincode}</Text>

           <TouchableOpacity onPress={()=>setEditShow(false)}>
                       <Text style={[styles.buyBtn,{backgroundColor:"#6e0e09"}]}  ><Icon name="pencil" size={15} color="white"  />  Edit</Text>
            </TouchableOpacity>
          </View>
          :<>
           <View style={[styles.container,{height:420}]}>
            <Text style={styles.inputLablee} >Name</Text>
                        <TextInput
                          style={styles.input}
                          onChangeText={setNameC}
                          value={nameC}
                          placeholder="Enter name"
                          placeholderTextColor = "#000000"
                    /> 
                     <Text style={styles.inputLablee} >Address</Text>
                        <TextInput
                     style={[styles.input,{marginTop:20}]}
                          onChangeText={setAddressC}
                          value={addressC}
                          placeholder="Enter address"
                          placeholderTextColor = "#000000"
                       />  
                         <Text style={styles.inputLablee} >Pincode</Text>
                        <TextInput
                     style={[styles.input,{marginTop:20}]}
                          onChangeText={onChangePincodeC}
                          value={pincodeC}
                          placeholder="Enter pincode"
                          placeholderTextColor = "#000000"
                       />  
            <View style={{flex:1,flexDirection:"row"}}>
               { loading ? 
               <TouchableOpacity  onPress={() => EditUser() }>
                       <Text style={[styles.buyBtn,{backgroundColor:"#6e0e09"}]}  >  <Spinner/> Loading </Text>
                  
                    </TouchableOpacity>
              :    <TouchableOpacity  onPress={() => EditUser() }>
                       <Text style={[styles.buyBtn,{backgroundColor:"#6e0e09"}]}  ><Icon name="pencil" size={15} color="white"  />  Update</Text>
                    </TouchableOpacity>
               }
  
          
             <TouchableOpacity onPress={()=>setEditShow(true)}>
                       <Text style={[styles.buyBtn,{backgroundColor:"#6e0e09",marginLeft:10}]}  >  Cancel</Text>
            </TouchableOpacity>
            </View>
           
            </View>
          </>}
      
       </View>
       </View>
          </ScrollView>
    );
  }
  const mapStateToProps = (state) => {
  // console.log(state);
 return {userId:state.auth.userId};
}
export default connect(mapStateToProps)(ProfileScreen);