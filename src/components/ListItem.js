import  React from 'react';
import {  Text, View,Image,TouchableOpacity    } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import styles from '../css/ProductlistCss';
import * as Animatable from 'react-native-animatable'
import Colors from '../constants/Colors';
import {addtoCart,gettotalamt} from '../actions/cart';
import { connect } from 'react-redux';
const ListItem = ({ index, animation,navigation,product,addtoCart,gettotalamt }) => {
  const addToCartt = async() => {
  
    var proDuctData = product;
    proDuctData.qty=1;
    proDuctData.subamout=proDuctData.price;
      console.log("addto cart ",proDuctData);
  await addtoCart(proDuctData);
  gettotalamt();
  }
  return (
    <Animatable.View
      animation={animation}
      duration={1000}
      delay={index * 300}
    >
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
                    <TouchableOpacity   onPress={() => {navigation.navigate('ProductDetail', {
                    productId: product.id
                })}}>
                      <Image style={styles.ImgaeT}
                              source={{
                                uri: product.imageone,
                              }}
                        />
                    </TouchableOpacity>
                       <View style={styles.proBox}>
                       <Text style={styles.productHead} >{product.productName}</Text>
                       <Text style={styles.producttype} >by Sato</Text>
                       <Text style={styles.productdescrip} >{product.description}</Text>
                       <View style={{flex:1,   flexDirection: "row",paddingTop:20}}>
                       <Text style={styles.productrupees} >{product.price}Rs</Text>
                       <TouchableOpacity   onPress={() => {addToCartt()}}>
                       <Text style={[styles.buyBtn,{backgroundColor:Colors.primary}]}  >Add Cart</Text>
                       </TouchableOpacity>
                        </View>
                         </View>
                    </View>
                    
                </View>
              </Neumorphism>
               </View>
    </Animatable.View>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
 return {cart : state.cart};
}
export default connect(mapStateToProps,{addtoCart,gettotalamt})(ListItem);
