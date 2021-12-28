import  React,{useState,useEffect} from 'react';
import {  Dimensions, FlatList, Text, View,Image,TextInput ,ScrollView,TouchableOpacity    } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import styles from './css/ProductlistCss';
import { Animations } from './constants/Animations';
import * as Animatable from 'react-native-animatable'
import Colors from './constants/Colors';
import api from './api'; 
import Spinner from './components/Spinner';
import ListItem from "./components/ListItem";
// const ListItem = ({ image, index, animation,navigation,product }) => {
//   console.log("product",product);
//   return (
//     <Animatable.View
//       animation={animation}
//       duration={1000}
//       delay={index * 300}
//     >
//        <View
//                   style={styles.box}
//                 >
//                   <Neumorphism
//                   lightColor={'#dedddd'}
//                   darkColor={'#76c2ffb8'}
//                   shapeType={'flat'}
//                   radius={20}
                  
//                 >
//                    <View
//                    style={styles.innerbox}
//                 >
//                     <View style={{  flex: 1, flexDirection: "row"}}>
//                     <TouchableOpacity   onPress={() => {navigation.navigate('ProductDetail')}}>
//                       <Image style={styles.ImgaeT}
//                               source={{
//                                 uri: product.imageone,
//                               }}
//                         />
//                     </TouchableOpacity>
//                        <View style={styles.proBox}>
//                        <Text style={styles.productHead} >{product.productName}</Text>
//                        <Text style={styles.producttype} >by Sato</Text>
//                        <Text style={styles.productdescrip} >{product.description}</Text>
//                        <View style={{flex:1,   flexDirection: "row",paddingTop:20}}>
//                        <Text style={styles.productrupees} >{product.price}Rs</Text>
//                        <TouchableOpacity   onPress={() => {navigation.navigate('Cart')}}>
//                        <Text style={[styles.buyBtn,{backgroundColor:Colors.primary}]}  >Add Cart</Text>
//                        </TouchableOpacity>
//                         </View>
//                          </View>
//                     </View>
                    
//                 </View>
//               </Neumorphism>
//                </View>
//     </Animatable.View>
//   )
// }

function ProductList({route, navigation }) {
  const { categoryId ,name} = route.params; 
  var headingName= JSON.stringify(name);
  const [text, onChangeText] = useState("");
  const [products, setProducts] = useState([]);
  const animation = Animations[Math.floor(Math.random() * Animations.length)]
  const getproductAll = async() => {
    var id= JSON.stringify(categoryId);
 
    if(id === "0"){
      const res = await api.get('products');
    if(res.data.length > 0){
     // console.log("getproductAll",res.data);
      setProducts(res.data);
    }
    }else{
      const res = await api.get('products?filter=%7B%22where%22%3A%20%7B%22categoryId%22%3A%20'+id+'%7D%7D');
      if(res.data.length > 0){
       // console.log("getproductAll",res.data);
        setProducts(res.data);
      }
    }
   
  }
  useEffect(() => {
    getproductAll();
  },[]);
    return (
      <ScrollView style={{marginBottom:50}}>
          <View style={{backgroundColor:"#81f9ff6b"}}>
        <View style={{borderBottomLeftRadius:60,backgroundColor:"#f5f5f5"}}>
      <View style={styles.container}> 
           <Text style={styles.headd} >{JSON.parse(headingName)}</Text>
           <Text style={styles.headdtwo} >Perfect Choice !</Text>
          
           <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search Here"
            placeholderTextColor = "#000000"
      />
      
       </View> 
       </View>
       </View> 

       <View style={{backgroundColor:"#f5f5f5"}}>
       <View style={{backgroundColor:"#81f9ff6b",borderTopRightRadius:60}}>
       <View style={[styles.container,{paddingTop:0}]}>   
        
       <View style={styles.containerTwo}>
       { products.length > 0 ? 
            <>
            {products.map((i, index) => {
              return(
       <ListItem key={index} navigation={navigation} product={i} 
       index={index} animation={animation} />
            )
            })
        }
      
         </>
              :<>
              <View style={{ flex: 1,
    justifyContent: "center",
    alignItems: "center",width: Dimensions.get('window').width,height:500}}>
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
  export default ProductList;