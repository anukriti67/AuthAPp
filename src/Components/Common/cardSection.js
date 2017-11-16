 import React from 'react'
 import { View} from 'react-native'

 const CardSection = (props) => {
   return  <View style={cardSectionStyles}>{props.children}</View>
 }
 const cardSectionStyles ={
   backgroundColor:'#fff8ff',
   borderWidth:4,
   borderColor:'black',
   margin:3,
   padding:10,
   justifyContent:'flex-start',
   flexDirection:'row',
   position:'relative'
 }

 export { CardSection};
