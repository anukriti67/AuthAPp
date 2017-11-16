import React from 'react'
import {Text, TouchableOpacity } from 'react-native'

Button = ({PressCallback,text}) => {
  const {ButtonStyle, TextStyle }=styles
  return (
    <TouchableOpacity style ={ButtonStyle} onPress={PressCallback}>
      <Text style={TextStyle}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = {
  TextStyle:{
    fontSize:14,
    color:'#007aff',
    alignSelf:'center',
    paddingTop:5,
    paddingBottom:5,
    fontWeight:'600'
  },
  ButtonStyle:{
    marginLeft:2,
    marginRight:2,
    flex:1,
    alignItems:'center',
    alignSelf:'stretch',
    backgroundColor:'yellow',
    borderWidth:1,
    borderColor:'red',
    borderRadius:2
  }

}
module.exports = {Button:Button }
