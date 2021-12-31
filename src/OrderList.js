import  React,{useState,useEffect} from 'react';
import { Button, Text, View,Image,TextInput ,ScrollView,TouchableOpacity ,Dimensions   } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import styles from './css/OrderListCss';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from './constants/Colors';
import { connect } from 'react-redux';
import api from './api'; 

function OrderList({ navigation ,userId}) {
     const [orderDetail, setOrderDetail] = useState([]);
   const getOrderDetailByUserId = async() => {
  
      const res = await api.get('ordersList/'+userId);
      if(res.data){
        console.log("ordersList",res.data)
        setOrderDetail(res.data);
       }
  } 
   useEffect(() => {
   getOrderDetailByUserId(); 
  },[]);
  console.log("orderId order detail",userId);
    return (
      <ScrollView style={{marginBottom:50}}>
          <View style={{backgroundColor:orderDetail.length > 0 ? "#81f9ff6b" : "white"}}>
        <View style={{borderBottomLeftRadius:60,backgroundColor:"#f5f5f5"}}>
      <View style={styles.container}> 
           <Text style={styles.headd} >Order Detail</Text>
          
      
       </View> 
       </View>
       </View> 

       <View style={{backgroundColor:"#f5f5f5"}}>
       <View style={{backgroundColor:orderDetail.length > 0 ? "#81f9ff6b" : "white",borderTopRightRadius:60}}>
       <View style={[styles.container,{paddingTop:0}]}>   
       <View style={{  flex: 1, flexDirection: "row",  paddingTop:20}}>
               
         </View>
       <View style={styles.containerTwo}>
        

          {orderDetail.length > 0 ?
           
             <>
              {orderDetail.map((i, index) => {

                return(
                 <View style={styles.box} key={index}
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
                        <View style={styles.proBox}>
                       <View style={{flex:1,   flexDirection: "row",paddingTop:6}}>
                        <Text style={styles.productrupees} > <Text style={{fontWeight:'400'}}>Order No:</Text> #0{i.id}</Text>
                        <Text style={styles.productrupees} ><Text style={{fontWeight:'400'}}>Order Date:</Text> 2/12/2010</Text>
                        <TouchableOpacity  onPress={() =>    navigation.navigate('OrderDetail', {
                    orderId:i.id
                 })}><Text style={styles.productrupees} ><Icon name="pencil" size={19} color={Colors.purple}/></Text></TouchableOpacity>
                      </View> 
                       <View style={{flex:1,   flexDirection: "row",paddingTop:6}}>
                        <Text style={styles.productrupees} ><Text style={{fontWeight:'400'}}>Qty:</Text> {i.qty}</Text>
                        <Text style={styles.productrupees} ><Text style={{fontWeight:'400'}}>Amt:</Text> {i.totalPrice}Rs</Text>
                        </View> 
                     </View>
                   </View>
                 </View>
              </Neumorphism>
                </View>
                )
              })}
              
                </>


           : <View style={{justifyContent: 'center',alignItems: 'center',height:(Dimensions.get('window').height - 240 ),width:(Dimensions.get('window').width - 40)}}>

                   <Image style={{width:204,height:200,backgroundColor:"#ede8e7",borderRadius:10,marginBottom:20}}
                             source={{
                              uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQFNUQ3sfLGMRm9cINBygL0LOltvsapZYXFg&usqp=CAU",
                            }}
                            />

                              <Text style={styles.productrupees} >Opps! Not Yet Orders.</Text>
           </View>}
              

             

         </View>
       </View>
       </View>
       </View>
          </ScrollView>
    );
  }
  const mapStateToProps = (state) => {
  return {cart : state.cart,userId:state.auth.userId};
}
export default connect(mapStateToProps)(OrderList);