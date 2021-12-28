import  React,{useState,useEffect} from 'react';
import { Dimensions, Text, View,Image,TextInput ,ScrollView ,TouchableOpacity   } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import styles from './css/PlaceOrder';
import Colors from './constants/Colors';
import Spinner from './components/Spinner';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from './api'; 
import RadioButton from './components/RadioButton';
import { connect } from 'react-redux';
function PlaceOrder({ navigation ,cart,userId}) {
  const [name, onChangeName] = useState("");
  const [mobileNo, onChangeMobileNo] = useState("");
  const [addess, onChangeAddress] = useState("");
  const [pincode, onChangePincode] = useState("");
const getUserInfo = async() =>{
     const res = await api.get('users/'+userId);
      if(res.data){
         console.log("getUserInfo",res.data);
         onChangeName(res.data.name);
          onChangeMobileNo(res.data.mobileNo);
           onChangeAddress(res.data.address);
            onChangePincode(res.data.pincode);
      }
}
useEffect(()=> {
  getUserInfo();
},[]);

const InsertdatainorderProducts = async(payload) => {
const resr = await api.post('orderproducts',payload);
}

const placeOrder = async() => {
  if(pincode === "" || pincode === null) {

  }else{
    const res = await api.post('orders',{"userId":userId,"totalPrice":cart.total,"qty":cart.cart.length,"address":addess,"pincode":parseInt(pincode)});
      if(res.data !== null){
          cart.cart.map((i, index) => {
              const payload = {"orderId":res.data.id,"userId":userId,"productId":i.id,
              "totalPrice":i.subamout,"qty":i.qty,"price":i.price}
               InsertdatainorderProducts(payload);
          })

          console.log("place order successfully");
      }
  }
}


    return (
      <ScrollView style={{marginBottom:50}}>
         <View style={{backgroundColor:"#81f9ff6b"}}>
        <View style={{borderBottomLeftRadius:60,backgroundColor:"#f5f5f5"}}>
      <View style={styles.container}> 
    
           <Text style={styles.headd} >Place Order</Text>

            <Text style={styles.inputLablee} >Name</Text>
           <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Name"
            placeholderTextColor = "#000000"
      />
       <Text style={styles.inputLablee} >Mobile No:</Text>
           <TextInput
            style={styles.input}
            onChangeText={onChangeMobileNo}
            value={mobileNo}
            placeholder="Mobile No"
            placeholderTextColor = "#000000"
      />
       <Text style={styles.inputLablee} >Address</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={addess}
            placeholder="Address"
            placeholderTextColor = "#000000"
      />
       <Text style={styles.inputLablee} >Pincode</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePincode}
            value={pincode}
            placeholder="Pincode"
            placeholderTextColor = "#000000"
      />
       
       <View style={{flex:1, flexDirection: "row",marginTop:15}}>
          <RadioButton selected={true} />
          <Text style={styles.inputLablee,{marginLeft:10,marginTop:1,color:Colors.black}} >Cash On Delivery</Text>
       </View>
        <View style={[styles.typebtn,{marginTop:20}]}>
       
          </View>
       </View> 
       </View>
       </View> 
       <View style={{backgroundColor:"#f5f5f5"}}>
       <View style={{backgroundColor:"#81f9ff6b",borderTopRightRadius:60}}>
       <View style={[styles.container,{paddingTop:0}]}>   
       
          <View style={styles.containerTwo}>
           <View style={{  flex: 1, flexDirection: "row",  paddingTop:20}}>
         { cart.cart.length > 0 ?  <>
          <View>
           <Text style={[styles.productrupees,{marginLeft:12,marginTop:2,fontSize:20}]} >Total:{cart.total}Rs
       </Text>
       <Text style={{color:Colors.black,marginLeft:12,fontWeight:"bold"}}>Qty: {cart.cart.length}</Text>
       <Text style={{color:Colors.black,marginLeft:12,fontWeight:"bold"}}>Shipping Price: 0</Text>

          </View>
      
       <TouchableOpacity style={{marginLeft:96}} onPress={() =>  placeOrder()}>
                       <Text style={[styles.placeOrderBtn,{backgroundColor:Colors.orangered}]}  ><Icon name="shopping-cart" size={19} color="#ffffff" style={{marginBottom:10}} />   Place Order</Text>
                       </TouchableOpacity>
                       </> : <></> }
         </View>
               </View>  
          </View>
          </View>
       </View>
      
      </ScrollView>
    );
  }
  const mapStateToProps = (state) => {
  // console.log(state);
 return {cart : state.cart,userId:state.auth.userId};
}
export default connect(mapStateToProps)(PlaceOrder);