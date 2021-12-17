import  React,{useState,useEffect} from 'react';
import { Button,Dimensions, Text, View,Image,TextInput ,ScrollView ,TouchableOpacity   } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import ImageSlider from 'react-native-image-slider';
import styles from './css/Homecss';
import Colors from './constants/Colors';
import HomeImageSlider from "./components/HomeImageSlider";
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from './components/Spinner';
import api from './api'; 
function HomeScreen({ navigation }) {
  const [text, onChangeText] = useState("");
 const [category, setCategory] = useState([]);
//  const _retrieveData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('user_values');
//       if (value !== null) {
//         // We have data!!
//         console.log("user_values",value);
//       }
//     } catch (error) {
//       // Error retrieving data
//       console.log("user_values error",error);
//     }
//   };
//   _retrieveData();
const getCategory = async() => {
  const res = await api.get('categories');
  if(res.data.length > 0){
    console.log("getCategory",res.data);
    setCategory(res.data);
  }
}
useEffect(() => {
  getCategory();
},[]);
    return (
      <ScrollView style={{marginBottom:50}}>
          <HomeImageSlider/>
         <View style={{backgroundColor:"#81f9ff6b"}}>
        <View style={{borderBottomLeftRadius:60,backgroundColor:"#f5f5f5"}}>
      <View style={styles.container}> 
    
           <Text style={styles.headd} >Best Decorate</Text>
           <Text style={styles.headdtwo} >Perfect Choice !</Text>
           <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search Here"
            placeholderTextColor = "#000000"
      />
        <View style={[styles.typebtn,{marginTop:20}]}>
        { category.length > 0 ? 
        <>
        <TouchableOpacity   onPress={() => {navigation.navigate('ProductList', {
            categoryId: 0,name:"All"
          })}}>
            <Text style={[styles.typetextActive,{backgroundColor:Colors.primary}]} >All</Text>
          </TouchableOpacity>    
         { category.map((i) => {
           return(
              <Text style={styles.typetext}  onPress={() => {navigation.navigate('ProductList', {
                categoryId: i.id,name:i.categoryName
              })}}  key={i.id} >{i.categoryName}</Text>
           )
         })
         }
      
           </> : <></>  }
          </View>
       </View> 
       </View>
       </View> 
       <View style={{backgroundColor:"#f5f5f5"}}>
       <View style={{backgroundColor:"#81f9ff6b",borderTopRightRadius:60}}>
       <View style={[styles.container,{paddingTop:0}]}>   
       
          <View style={styles.containerTwo}>
            { category.length > 0 ? 
            <>

          { category.map((i) => {
              return(
                <View
                  style={styles.box}  key={i.id}
                >
                  <TouchableOpacity onPress={() => {navigation.navigate('ProductList', {
            categoryId: i.id,name:i.categoryName
          })}}>
                  <Neumorphism
                  lightColor={'#dedddd'}
                  darkColor={'#76c2ffb8'}
                  shapeType={'flat'}
                  radius={20}
                  
                >
                   <View
                   style={styles.innerbox}
                >
                     <Image style={styles.ImgaeT}
                             source={{
                              uri: i.image,
                            }}
                      />
                </View>
              </Neumorphism>
              </TouchableOpacity>
               </View>
              )
            })
         }
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
                     <Image style={styles.ImgaeT}
                             source={{
                              uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a45cb35-c77c-4005-aa56-78a10cc4d85d/d31f04u-ce90a02c-c2aa-4d54-acce-9bad1d82789e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhNDVjYjM1LWM3N2MtNDAwNS1hYTU2LTc4YTEwY2M0ZDg1ZFwvZDMxZjA0dS1jZTkwYTAyYy1jMmFhLTRkNTQtYWNjZS05YmFkMWQ4Mjc4OWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fBMCQ8_PT3gleMTAXykLMBBE_vjuLWKs-CKAqDnFtjk',
                            }}
                      />
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
                        <Image style={styles.ImgaeT}
                             source={{
                              uri: 'https://cdn11.bigcommerce.com/s-hqjg7u/images/stencil/1280x1280/attribute_rule_images/3272_source_1479981709.png',
                            }}
                      />

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
                     <Image style={styles.ImgaeT}
                             source={{
                              uri: 'https://m.media-amazon.com/images/I/71msWIzlvwS._SL1500_.jpg',
                            }}
                      />

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
                    <Image style={styles.ImgaeT}
                             source={{
                              uri: 'https://n4.sdlcdn.com/imgs/b/u/n/Plaza-Brown-Pendulum-Wall-Clock-SDL328782822-1-bc7ea.jpg',
                            }}
                      />
                  
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
                   <Image style={styles.ImgaeT}
                             source={{
                              uri: 'https://n4.sdlcdn.com/imgs/j/l/m/RAJ-ROYAL-Flower-Pot-SDL235924191-1-8a5ce.jpeg',
                            }}
                      />

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
                    <Image style={styles.ImgaeT}
                             source={{
                              uri: 'https://img3.junaroad.com/uiproducts/14227826/pri_175_p-1506688028.jpg',
                            }}
                      />

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
                ></View>
              </Neumorphism>
               </View> */}
               </>
              :<>
              <View style={{ flex: 1,
    justifyContent: "center",
    alignItems: "center",width: Dimensions.get('window').width,height:310}}>
                <Spinner color="#000000" /> 
              </View>
               
              </> }
               </View>  
          </View>
          </View>
       </View>
      
      </ScrollView>
    );
  }
  export default HomeScreen;