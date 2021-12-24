import  React,{useState} from 'react';
import { Button, Text, View,Image,TouchableOpacity    } from 'react-native';
import { useSelector ,useDispatch } from "react-redux"; 
import Neumorphism from 'react-native-neumorphism';
import styles from '../css/CartCss';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';
import { connect } from 'react-redux';
import { changeCart,increaseCart,descreaseCart,removefromCart,gettotalamt} from "../actions/cart";
function CartItem({ cartProInfo}) {
      const dispatch = useDispatch();
     console.log("cart cartProInfo ",cartProInfo);

 const incrementPro = (id) =>{
     dispatch(increaseCart(id));
     dispatch(gettotalamt());
 } 
 const decrementPro = (id,qty) =>{
   if(qty === 1){
    dispatch(removefromCart(id));
   }else{
    dispatch(descreaseCart(id));
   }
  
  dispatch(gettotalamt());
}
const removePro = (id) =>{
  dispatch(removefromCart(id));
  dispatch(gettotalamt());
} 
const emptyCart = () =>{
 dispatch(changeCart());
 dispatch(gettotalamt());
} 
    return (
    <View 
                  style={styles.box}
                >
                  <Neumorphism
                  lightColor={'#dedddd'}
                  darkColor={'#76c2ffb8'}
                  shapeType={'flat'}
                  radius={20}
                  
                >
                   <View
                   style={styles.innerbox}
                >
                    <View style={{  flex: 1, flexDirection: "row"}}>

                    <Image style={styles.ImgaeT}
                             source={{
                              uri: cartProInfo.imageone,
                            }}
                      />
                       <View style={styles.proBox}>
                       <Text style={styles.productHead} >{cartProInfo.productName}</Text>
                      
                       <View style={{flex:1,   flexDirection: "row",paddingTop:6}}>
                        <Text style={styles.producttype} >by Sato</Text>
                        <Text style={styles.productrupees} >{cartProInfo.subamout}Rs</Text>
                    
                        </View> 

                       <View style={{flex:1,flexDirection:"row"}}>
                      
                       <View style={{flex:1,flexDirection:"row",marginTop:4}}>
                       <TouchableOpacity onPress={()=>decrementPro(cartProInfo.id,cartProInfo.qty)}>
                            <Text style={{backgroundColor:"#d8d1cf",width:30,height:30,color:"black",borderTopLeftRadius:10,borderBottomLeftRadius:10,fontSize:25,paddingLeft:12,paddingTop:7}}>
                            <Icon name="minus" size={15} color="#424141"  />
                            </Text>
                            </TouchableOpacity>
                            <Text style={{backgroundColor:"#d8d1cf",width:30,height:30,color:"black",fontSize:16,textAlign:"center",paddingTop:3}}>{cartProInfo.qty}</Text>
                            <TouchableOpacity onPress={()=>incrementPro(cartProInfo.id)}>
                               <Text style={{backgroundColor:"#d8d1cf",width:30,height:30,color:"black",borderTopRightRadius:10,borderBottomRightRadius:10,fontSize:20,paddingLeft:12,paddingTop:6}}>
                            <Icon name="plus" size={15} color="#424141"  />
                            </Text>
                            </TouchableOpacity>
                         </View>
                        <TouchableOpacity style={{marginLeft:40,marginRight:10}} onPress={() => removePro(cartProInfo.id)}>
                       <Text style={[styles.DeleteBtn,{backgroundColor:Colors.primary}]}  ><Icon name="trash" size={19} color="#ffffff" style={{marginBottom:10}} /></Text>
                       </TouchableOpacity>
                        </View>
                      
                         </View>
                    </View>
                    
                </View>
              </Neumorphism>
               </View>
                
    );
  }
  const mapStateToProps = (state) => {
  // console.log(state);
 return {cart : state.cart};
}
export default connect(mapStateToProps)(CartItem);