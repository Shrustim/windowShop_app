import  React,{useState} from 'react';
import { Button, Text, View,Image,TextInput ,ScrollView,TouchableOpacity    } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import styles from './css/CartCss';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from './constants/Colors';
function Cart({ navigation }) {
    return (
      <ScrollView>
          <View style={{backgroundColor:"#81f9ff6b"}}>
        <View style={{borderBottomLeftRadius:60,backgroundColor:"#f5f5f5"}}>
      <View style={styles.container}> 
           <Text style={styles.headd} >Cart</Text>
          
      
       </View> 
       </View>
       </View> 

       <View style={{backgroundColor:"#f5f5f5"}}>
       <View style={{backgroundColor:"#81f9ff6b",borderTopRightRadius:60}}>
       <View style={[styles.container,{paddingTop:0}]}>   
       <View style={{  flex: 1, flexDirection: "row",  paddingTop:20}}>
       <Text style={[styles.productrupees,{marginLeft:12,marginTop:2,fontSize:20}]} >Total:205Rs</Text>
       <TouchableOpacity style={{marginLeft:96}}>
                       <Text style={[styles.placeOrderBtn,{backgroundColor:Colors.orangered}]}  ><Icon name="shopping-cart" size={19} color="#ffffff" style={{marginBottom:10}} />   Place Order</Text>
                       </TouchableOpacity>
         </View>
       <View style={styles.containerTwo}>
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
                              uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a45cb35-c77c-4005-aa56-78a10cc4d85d/d31f04u-ce90a02c-c2aa-4d54-acce-9bad1d82789e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhNDVjYjM1LWM3N2MtNDAwNS1hYTU2LTc4YTEwY2M0ZDg1ZFwvZDMxZjA0dS1jZTkwYTAyYy1jMmFhLTRkNTQtYWNjZS05YmFkMWQ4Mjc4OWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fBMCQ8_PT3gleMTAXykLMBBE_vjuLWKs-CKAqDnFtjk',
                            }}
                      />
                       <View style={styles.proBox}>
                       <Text style={styles.productHead} >Irul Chair</Text>
                      
                       <View style={{flex:1,   flexDirection: "row",paddingTop:6}}>
                        <Text style={styles.producttype} >by Sato</Text>
                        <Text style={styles.productrupees} >205Rs</Text>
                    
                        </View> 

                       <View style={{flex:1,flexDirection:"row"}}>
                      
                       <View style={{flex:1,flexDirection:"row",marginTop:4}}>
                       <TouchableOpacity>
                            <Text style={{backgroundColor:"#d8d1cf",width:30,height:30,color:"black",borderTopLeftRadius:10,borderBottomLeftRadius:10,fontSize:25,paddingLeft:12,paddingTop:7}}>
                            <Icon name="minus" size={15} color="#424141"  />
                            </Text>
                            </TouchableOpacity>
                            <Text style={{backgroundColor:"#d8d1cf",width:30,height:30,color:"black",fontSize:16,textAlign:"center",paddingTop:3}}>1</Text>
                            <TouchableOpacity>
                               <Text style={{backgroundColor:"#d8d1cf",width:30,height:30,color:"black",borderTopRightRadius:10,borderBottomRightRadius:10,fontSize:20,paddingLeft:12,paddingTop:6}}>
                            <Icon name="plus" size={15} color="#424141"  />
                            </Text>
                            </TouchableOpacity>
                         </View>
                        <TouchableOpacity style={{marginLeft:40,marginRight:10}}>
                       <Text style={[styles.DeleteBtn,{backgroundColor:Colors.primary}]}  ><Icon name="trash" size={19} color="#ffffff" style={{marginBottom:10}} /></Text>
                       </TouchableOpacity>
                        </View>
                      
                         </View>
                    </View>
                    
                </View>
              </Neumorphism>
               </View>

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
                              uri: 'https://n4.sdlcdn.com/imgs/b/u/n/Plaza-Brown-Pendulum-Wall-Clock-SDL328782822-1-bc7ea.jpg',
                            }}
                      />
                       <View style={styles.proBox}>
                       <Text style={styles.productHead} >Irul Chair</Text>
                      
                       <View style={{flex:1,   flexDirection: "row",paddingTop:6}}>
                       <Text style={styles.producttype} >by Sato</Text>
                       <Text style={styles.productrupees} >205Rs</Text>
                    
                        </View> 

                       <View style={{flex:1,flexDirection:"row"}}>
                      
                       <View style={{flex:1,flexDirection:"row",marginTop:4}}>
                       <TouchableOpacity>
                            <Text style={{backgroundColor:"#d8d1cf",width:30,height:30,color:"black",borderTopLeftRadius:10,borderBottomLeftRadius:10,fontSize:25,paddingLeft:12,paddingTop:7}}>
                            <Icon name="minus" size={15} color="#424141"  />
                            </Text>
                            </TouchableOpacity>
                            <Text style={{backgroundColor:"#d8d1cf",width:30,height:30,color:"black",fontSize:16,textAlign:"center",paddingTop:3}}>1</Text>
                            <TouchableOpacity>
                               <Text style={{backgroundColor:"#d8d1cf",width:30,height:30,color:"black",borderTopRightRadius:10,borderBottomRightRadius:10,fontSize:20,paddingLeft:12,paddingTop:6}}>
                            <Icon name="plus" size={15} color="#424141"  />
                            </Text>
                            </TouchableOpacity>
                           </View>
                        <TouchableOpacity style={{marginLeft:40,marginRight:10}}>
                       <Text style={[styles.DeleteBtn,{backgroundColor:Colors.primary}]}  ><Icon name="trash" size={19} color="#ffffff" style={{marginBottom:10}} /></Text>
                       </TouchableOpacity>
                        </View>
                      
                         </View>
                    </View>
                    
                </View>
              </Neumorphism>
               </View>

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
                              uri: 'https://cdn11.bigcommerce.com/s-hqjg7u/images/stencil/1280x1280/attribute_rule_images/3272_source_1479981709.png',
                            }}
                      />
                       <View style={styles.proBox}>
                       <Text style={styles.productHead} >Irul Chair</Text>
                      
                       <View style={{flex:1,   flexDirection: "row",paddingTop:6}}>
                       <Text style={styles.producttype} >by Sato</Text>
                       <Text style={styles.productrupees} >205Rs</Text>
                    
                        </View> 

                       <View style={{flex:1,flexDirection:"row"}}>
                      
                       <View style={{flex:1,flexDirection:"row",marginTop:4}}>
                       <TouchableOpacity>
                            <Text style={{backgroundColor:"#d8d1cf",width:30,height:30,color:"black",borderTopLeftRadius:10,borderBottomLeftRadius:10,fontSize:25,paddingLeft:12,paddingTop:7}}>
                            <Icon name="minus" size={15} color="#424141"  />
                            </Text>
                            </TouchableOpacity>
                            <Text style={{backgroundColor:"#d8d1cf",width:30,height:30,color:"black",fontSize:16,textAlign:"center",paddingTop:3}}>1</Text>
                            <TouchableOpacity>
                               <Text style={{backgroundColor:"#d8d1cf",width:30,height:30,color:"black",borderTopRightRadius:10,borderBottomRightRadius:10,fontSize:20,paddingLeft:12,paddingTop:6}}>
                            <Icon name="plus" size={15} color="#424141"  />
                            </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{marginLeft:40,marginRight:10}}>
                       <Text style={[styles.DeleteBtn,,{backgroundColor:Colors.primary}]}  ><Icon name="trash" size={19} color="#ffffff" style={{marginBottom:10}} /></Text>
                       </TouchableOpacity>
                        </View>
                      
                         </View>
                    </View>
                    
                </View>
              </Neumorphism>
               </View>

         </View>
       </View>
       </View>
       </View>
          </ScrollView>
    );
  }
  export default Cart;