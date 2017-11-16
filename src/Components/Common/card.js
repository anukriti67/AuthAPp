import React from 'react'
import { View } from 'react-native'
const Card =(props)=>{
  return <View style={Styles.containerStyle}>{props.children}</View>
}

const Styles= {
  containerStyle :{
    borderWidth :2,
    backgroundColor:'#f8f8ff',
    borderBottomWidth:0,
    borderColor :'#800',
    borderRadius:2,
    shadowColor:'#000',
    shadowOpacity:0.4,
    shadowOffset:{width:0, height:2},
    elevation:4,
    marginLeft:5,
    marginRight:5,
    marginTop:10
  }
}
export {Card} ;
