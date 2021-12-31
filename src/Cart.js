import  React,{useState} from 'react';
import { Button, Text, View,Image,TextInput ,ScrollView,TouchableOpacity,Dimensions    } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import styles from './css/CartCss';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from './constants/Colors';
import { connect } from 'react-redux';
import CartItem from './components/CartItem';

function Cart({ navigation,cart }) {
    return (
      <ScrollView>
          <View style={{backgroundColor:cart.cart.length > 0 ? "#81f9ff6b" : "white"}}>
        <View style={{borderBottomLeftRadius:60,backgroundColor:"#f5f5f5"}}>
      <View style={styles.container}> 
           <Text style={styles.headd} >Cart</Text>
           
      
       </View> 
       </View>
       </View> 

       <View style={{backgroundColor:"#f5f5f5"}}>
       <View style={{backgroundColor:cart.cart.length > 0 ? "#81f9ff6b" : "white",borderTopRightRadius:60}}>
       <View style={[styles.container,{paddingTop:0}]}>   
       <View style={{  flex: 1, flexDirection: "row",  paddingTop:20}}>
         { cart.cart.length > 0 ?  <>
       <Text style={[styles.productrupees,{marginLeft:12,marginTop:2,fontSize:20}]} >Total:{cart.total}Rs</Text>
       <TouchableOpacity style={{marginLeft:96}} onPress={() =>  navigation.navigate('PlaceOrder')}>
                       <Text style={[styles.placeOrderBtn,{backgroundColor:Colors.orangered}]}  ><Icon name="shopping-cart" size={19} color="#ffffff" style={{marginBottom:10}} />   Place Order</Text>
                       </TouchableOpacity>
                       </> : <></> }
         </View>
       <View style={styles.containerTwo}>
         { cart.cart.length > 0 ?  <>
		   {cart.cart.map((i, index) => {
			    return(
             <CartItem key={index} cartProInfo={i} />
			      )
 })
        }
      
</>
              : <>
                 <View style={{justifyContent: 'center',alignItems: 'center',height:(Dimensions.get('window').height - 240 ),width:(Dimensions.get('window').width - 40)}}>

                   <Image style={{width:300,height:250,backgroundColor:"#ede8e7",borderRadius:10,marginBottom:20}}
                             source={{
                              uri:"https://likeelectronic.com/shopping_cart_empty.jpg",
                            }}
                            />

          </View>
              </> }
                  
              

             

         </View>
       </View>
       </View>
       </View>
          </ScrollView>
    );
  }
  const mapStateToProps = (state) => {
  // console.log(state);
 return {cart : state.cart};
}
export default connect(mapStateToProps)(Cart);