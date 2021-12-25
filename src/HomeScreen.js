import  React,{useState,useEffect} from 'react';
import { Dimensions, Text, View,Image,TextInput ,ScrollView ,TouchableOpacity   } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import styles from './css/Homecss';
import Colors from './constants/Colors';
import HomeImageSlider from "./components/HomeImageSlider";
import Spinner from './components/Spinner';
import api from './api'; 
function HomeScreen({ navigation }) {
  const [text, onChangeText] = useState("");
 const [category, setCategory] = useState([]);

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
         { category.map((i,index) => {
           if(index < 4) {
            return(
              <Text style={styles.typetext}  onPress={() => {navigation.navigate('ProductList', {
                categoryId: i.id,name:i.categoryName
              })}}  key={i.id} >{i.categoryName}</Text>
           )
           }
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