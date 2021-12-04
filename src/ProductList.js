import  React,{useState} from 'react';
import {  Dimensions, FlatList, Text, View,Image,TextInput ,ScrollView,TouchableOpacity    } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import styles from './css/ProductlistCss';
import { Animations } from './constants/Animations';
import * as Animatable from 'react-native-animatable'
import Colors from './constants/Colors';

const ListItem = ({ image, index, animation,navigation }) => {
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
                    <TouchableOpacity   onPress={() => {navigation.navigate('ProductDetail')}}>
                      <Image style={styles.ImgaeT}
                              source={{
                                uri: image,
                              }}
                        />
                    </TouchableOpacity>
                       <View style={styles.proBox}>
                       <Text style={styles.productHead} >Irul Chair</Text>
                       <Text style={styles.producttype} >by Sato</Text>
                       <Text style={styles.productdescrip} >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                       <View style={{flex:1,   flexDirection: "row",paddingTop:20}}>
                       <Text style={styles.productrupees} >205Rs</Text>
                       <TouchableOpacity   onPress={() => {navigation.navigate('Cart')}}>
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

function ProductList({ navigation }) {
  const [text, onChangeText] = React.useState("Search Here");
  const animation = Animations[Math.floor(Math.random() * Animations.length)]
  console.log(animation);
    return (
      <ScrollView>
          <View style={{backgroundColor:"#81f9ff6b"}}>
        <View style={{borderBottomLeftRadius:60,backgroundColor:"#f5f5f5"}}>
      <View style={styles.container}> 
           <Text style={styles.headd} >Best Decorate</Text>
           <Text style={styles.headdtwo} >Perfect Choice !</Text>
          
           <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="useless placeholder"
      />
      
       </View> 
       </View>
       </View> 

       <View style={{backgroundColor:"#f5f5f5"}}>
       <View style={{backgroundColor:"#81f9ff6b",borderTopRightRadius:60}}>
       <View style={[styles.container,{paddingTop:0}]}>   

       <View style={styles.containerTwo}>
       <ListItem navigation={navigation} image={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a45cb35-c77c-4005-aa56-78a10cc4d85d/d31f04u-ce90a02c-c2aa-4d54-acce-9bad1d82789e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhNDVjYjM1LWM3N2MtNDAwNS1hYTU2LTc4YTEwY2M0ZDg1ZFwvZDMxZjA0dS1jZTkwYTAyYy1jMmFhLTRkNTQtYWNjZS05YmFkMWQ4Mjc4OWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fBMCQ8_PT3gleMTAXykLMBBE_vjuLWKs-CKAqDnFtjk"} 
       index={0} animation={animation} />
         <ListItem navigation={navigation}  image={"https://n4.sdlcdn.com/imgs/b/u/n/Plaza-Brown-Pendulum-Wall-Clock-SDL328782822-1-bc7ea.jpg"} 
       index={1} animation={animation} />
        <ListItem navigation={navigation}  image={"https://cdn11.bigcommerce.com/s-hqjg7u/images/stencil/1280x1280/attribute_rule_images/3272_source_1479981709.png"} 
       index={1} animation={animation} />
             {/* <View
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
                    <TouchableOpacity   onPress={() => {navigation.navigate('ProductDetail')}}>
                      <Image style={styles.ImgaeT}
                              source={{
                                uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a45cb35-c77c-4005-aa56-78a10cc4d85d/d31f04u-ce90a02c-c2aa-4d54-acce-9bad1d82789e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhNDVjYjM1LWM3N2MtNDAwNS1hYTU2LTc4YTEwY2M0ZDg1ZFwvZDMxZjA0dS1jZTkwYTAyYy1jMmFhLTRkNTQtYWNjZS05YmFkMWQ4Mjc4OWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fBMCQ8_PT3gleMTAXykLMBBE_vjuLWKs-CKAqDnFtjk',
                              }}
                        />
                    </TouchableOpacity>
                       <View style={styles.proBox}>
                       <Text style={styles.productHead} >Irul Chair</Text>
                       <Text style={styles.producttype} >by Sato</Text>
                       <Text style={styles.productdescrip} >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                       <View style={{flex:1,   flexDirection: "row",paddingTop:20}}>
                       <Text style={styles.productrupees} >205Rs</Text>
                       <TouchableOpacity   onPress={() => {navigation.navigate('Cart')}}>
                       <Text style={styles.buyBtn}  >Add Cart</Text>
                       </TouchableOpacity>
                        </View>
                         </View>
                    </View>
                    
                </View>
              </Neumorphism>
               </View> */}

               {/* <View
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
                       <Text style={styles.producttype} >by Sato</Text>
                       <Text style={styles.productdescrip} >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                       <View style={{flex:1,   flexDirection: "row",paddingTop:20}}>
                       <Text style={styles.productrupees} >205Rs</Text>
                       <TouchableOpacity>
                       <Text style={styles.buyBtn}  >Add Cart</Text>
                       </TouchableOpacity>
                        </View>
                         </View>
                    </View>
                    
                </View>
              </Neumorphism>
               </View> */}

               {/* <View
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
                       <Text style={styles.producttype} >by Sato</Text>
                       <Text style={styles.productdescrip} >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                       <View style={{flex:1,   flexDirection: "row",paddingTop:20}}>
                       <Text style={styles.productrupees} >205Rs</Text>
                     
                      <TouchableOpacity>
                       <Text style={styles.buyBtn}  >Add Cart</Text>
                       </TouchableOpacity>
                        </View>
                         </View>
                    </View>
                    
                </View>
              </Neumorphism>
               </View> */}

         </View>
       </View>
       </View>
       </View>
          </ScrollView>
    );
  }
  export default ProductList;