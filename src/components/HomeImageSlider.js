
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,Dimensions 
} from 'react-native';

import ImageSlider from 'react-native-image-slider';
import Colors from '../constants/Colors';
const windowWidth = Dimensions.get('window').width;
const HomeImageSlider = () => {
   
    console.log("width",windowWidth);
    const images = [
      'https://venngage-wordpress.s3.amazonaws.com/uploads/2021/10/Email-Banner-Furniture-Sale.png',  
      'https://i0.wp.com/furnitureyourway.net/wp-content/uploads/2016/04/furniture-your-way-banner-02.png',
      'https://media.istockphoto.com/vectors/furniture-sale-square-banner-for-social-media-post-template-vector-id1254758376',
      'https://image.freepik.com/free-vector/foundation-product-banner-ads-with-paper-roses-decoration-3d-illustration_317442-1419.jpg',
      'http://teaknoak.com/wp-content/uploads/2016/06/web-Banner-sofa.jpg',
    ];

    return (
      <View style={styles.container}>
      
        <ImageSlider
          loop
          autoPlayWithInterval={3000}
          images={images}
          onPress={({ index }) => alert(index)}
          customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <View
              key={index}
              style={[
                style,
                styles.customSlide,
                { backgroundColor: index % 2 === 0 ? 'yellow' : 'green' },
              ]}
            >
              <Image source={{ uri: item }} style={styles.customImage} />
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}
                  >
                    <Text style={position === index ? styles.buttonSelected:styles.buttonNotSelected}>
                      {index + 1}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        />
    
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  slider: { backgroundColor: '#000', height: 350 },
  buttons: {
    zIndex: 1,
    height: 15,
    marginTop: -25,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: 3,
    width: 15,
    height: 15,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSelected: {
    opacity: 1,
    color: Colors.primary,
    backgroundColor:Colors.primary,
    width:10,
    height:10,
    borderRadius:50
  },
  buttonNotSelected: {
    opacity: 1,
    color: Colors.light,
    backgroundColor: Colors.light,
    width:10,
    height:10,
    borderRadius:50
  },
  customSlide: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  customImage: {
    width: windowWidth,
    height: 150,
    resizeMode : "stretch",
  },
});

export default HomeImageSlider;