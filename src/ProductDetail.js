import  React,{useState,useEffect} from 'react';
import { Button, Text, View,Image,TextInput ,ScrollView  ,TouchableOpacity  } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import styles from './css/productDetailCss';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from './constants/Colors';
import api from './api'; 
import Spinner from './components/Spinner';
function ProductDetail({route, navigation }) {
  const { productId } = route.params; 
  var productIdd= JSON.stringify(productId);
  console.log("json praser productId", JSON.parse(productIdd));
  const [product, setProduct] = useState([]);
  const [imagee, setImagee] = useState('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a45cb35-c77c-4005-aa56-78a10cc4d85d/d31f04u-ce90a02c-c2aa-4d54-acce-9bad1d82789e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhNDVjYjM1LWM3N2MtNDAwNS1hYTU2LTc4YTEwY2M0ZDg1ZFwvZDMxZjA0dS1jZTkwYTAyYy1jMmFhLTRkNTQtYWNjZS05YmFkMWQ4Mjc4OWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fBMCQ8_PT3gleMTAXykLMBBE_vjuLWKs-CKAqDnFtjk');
  const getproductById = async() => {
  
      const res = await api.get('products?filter=%7B%22where%22%3A%20%7B%22id%22%3A%20'+JSON.parse(productIdd)+'%7D%7D');
      if(res.data.length > 0){
        console.log("getproductById",res.data);
        setProduct(res.data);
        setImagee(res.data[0].imageone);
      }
   
  }

  useEffect(() => {
   getproductById();
  },[]);
    return (
      <ScrollView>
        {
        product.length > 0 ? 
         <>
       <View style={{backgroundColor:"#ffffff"}}>
    <View style={{backgroundColor:"#f5f5f5"}}>
  <View style={styles.container}> 
  <Image style={styles.ImgaeT}
                             source={{
                              uri: imagee,
                            }}
                            />
  
   </View> 
   </View>
   </View> 
   <View style={{backgroundColor:"#f5f5f5",marginBottom:60}}>
       <View style={{backgroundColor:"#ffffff",borderTopLeftRadius:60,borderTopRightRadius:60}}>
       <View style={[styles.container,{padding:30}]}>   
       <Text style={styles.productHead} >{product[0].productName}</Text>
       <View style={{flex:1,flexDirection:"row"}}>
                       <Text style={styles.producttype} >by Sato</Text>
                       <View style={{flex:1,flexDirection:"row",marginLeft:195}}>
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
       </View>
                       <Text style={styles.productdescrip} >{product[0].description }</Text>
      
      <View style={{flex:1, flexWrap: "wrap",flexDirection: "row",alignContent:"center",marginTop:15}}>
         <View style={{width:104,height:100,marginRight:10}}>
         <TouchableOpacity onPress={() => { setImagee(product[0].imageone)}}>
         <Image style={{width:104,height:100,backgroundColor:"#ede8e7",borderRadius:10}}
                             source={{
                              uri: product[0].imageone,
                            }}
                            />
                            </TouchableOpacity>
           </View>
           <View style={{width:104,height:100,marginRight:10}}>
           <TouchableOpacity onPress={() => { setImagee(product[0].imagetwo)}}>
         <Image style={{width:104,height:100,backgroundColor:"#ede8e7",borderRadius:10}}
                             source={{
                              uri: product[0].imagetwo,
                            }}
                            />
                              </TouchableOpacity>
           </View>
           <View style={{width:104,height:100}}>
           <TouchableOpacity onPress={() => { setImagee(product[0].imagethree)}}>
         <Image style={{width:104,height:100,backgroundColor:"#ede8e7",borderRadius:10}}
                             source={{
                              uri: product[0].imagethree,
                            }}
                            />
                              </TouchableOpacity>
           </View>
      </View>   

      <View style={{flex:1,   flexDirection: "row",paddingTop:20}}>
                       <Text style={styles.productrupees} >{ product[0].price}Rs</Text>
                       <TouchableOpacity>
                       <Text style={[styles.buyBtn,{backgroundColor:Colors.primary}]}  >Add Cart</Text>
                       </TouchableOpacity>
                        </View>

                    
     </View>
    </View>
    </View>   
     </> :
     <View style={{backgroundColor:"#ffffff"}}>
    <View style={{backgroundColor:"#f5f5f5"}}>
  <View style={styles.container}> 
  <Spinner color="#000000"/>
   </View> 
   </View>
   </View> 
    
     }  
     
    
     
   </ScrollView>
    );
  }
  export default ProductDetail;