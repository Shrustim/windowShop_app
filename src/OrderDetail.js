import  React,{useState,useEffect} from 'react';
import { Button, Text, View,Image,TextInput ,ScrollView,TouchableOpacity    } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import styles from './css/OrderDetailCss';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from './constants/Colors';
import { connect } from 'react-redux';
import api from './api'; 
function OrderDetail({ route,navigation,userId }) {
  const { orderId } = route.params; 
  var orderIdd= JSON.stringify(orderId);
  const [orderDetail, setOrderDetail] = useState(null);
   const [totalAmt, setTotalAmt] = useState(null);
   const getOrderDetailById = async() => {
  
      const res = await api.get('ordersById/'+JSON.parse(orderIdd));
      if(res.data){
        console.log("OrderDetail",res.data)
         
                var totalAmtt=0;
              res.data.map(ele=>{
                totalAmtt+=ele.totalPrice
              })
                
              setTotalAmt(totalAmtt);
        setOrderDetail(res.data);
       }
  } 
   useEffect(() => {
   getOrderDetailById();
  },[ route.params]);
 
  console.log("orderId order detail",orderId);
    return (
      <ScrollView style={{marginBottom:50}}>
          <View style={{backgroundColor:"#81f9ff6b"}}>
        <View style={{borderBottomLeftRadius:60,backgroundColor:"#f5f5f5"}}>
      <View style={styles.container}> 
           <Text style={styles.headd} >Thanks for Order</Text>
          
      
       </View> 
       </View>
       </View> 

       <View style={{backgroundColor:"#f5f5f5"}}>
       <View style={{backgroundColor:"#81f9ff6b",borderTopRightRadius:60}}>
       <View style={[styles.container,{paddingTop:0}]}>  
       {orderDetail ? 
        <>
         <View style={{  flex: 1, flexDirection: "row",  paddingTop:20}}>
         <Text style={[styles.productrupees,{marginLeft:12,marginTop:2,fontSize:18}]} ><Text style={{fontWeight:"400"}}>Order No:</Text> #0{orderDetail[0].orderId}</Text>
          <Text style={[styles.productrupees,{marginLeft:12,marginTop:2,fontSize:18}]} ><Text style={{fontWeight:"400"}}>Order Date:</Text> {orderDetail[0].orderDate}</Text>
         </View>
         <View style={{  flex: 1, flexDirection: "row",  paddingTop:5}}>
           <Text style={[styles.productrupees,{marginLeft:12,marginTop:2,fontSize:18}]} ><Text style={{fontWeight:"400"}}>Total:</Text> {totalAmt}Rs</Text>
         </View>
       <View style={styles.containerTwo}>
         
         {orderDetail.length > 0 ?
                   <>
                      {orderDetail.map((i, index) => {
                 return (
                   <View style={styles.box} key={index} >
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
                              uri: i.imageone,
                            }}
                      />
                      <View style={styles.proBox}>
                       <Text style={styles.productHead} >{i.productName}</Text>
                      
                       <View style={{flex:1,   flexDirection: "row",paddingTop:6}}>
                        <Text style={styles.producttype} >Qty: {i.qty}</Text>
                        <Text style={styles.productrupees} >{i.totalPrice}Rs</Text>
                    
                        </View> 
                        </View>
                    </View>
                    </View>
            </Neumorphism>
           </View>
           )
              })}
               
                   </>
          : null}
               
      </View>
      </>: null} 
      
       </View>
       </View>
       </View>
          </ScrollView>
    );
  }
  const mapStateToProps = (state) => {
  return {cart : state.cart,userId:state.auth.userId};
}
export default connect(mapStateToProps)(OrderDetail);